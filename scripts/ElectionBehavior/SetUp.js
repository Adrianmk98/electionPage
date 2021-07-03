/**
 * SetUp class addresses with the functionality in setting up the election page
 */
class SetUp
{
	partyFeild;
	#partyListener;

	ridingFeild;
	#ridingListener;

	messageFeild;

	/**
	 * constructor assigns values of instances and preps listeners
	 */
	constructor()
	{
		this.partyFeild = $("input#partySettings")[0]
		this.#partyListener = new Listener();

		this.#partyListener.setOnSuccess
		(
			function(data)
			{
				console.log(data)
			}
		).setOnFailure
		(
			function()
			{
				console.log("Failure")
			}
		)


		this.ridingFeild = $("input#ridingSettings")[0]
		this.#ridingListener = new Listener();

		this.#ridingListener.setOnSuccess
		(
			function(data)
			{
				console.log(data)
			}
		).setOnFailure
		(
			function()
			{
				console.log("Failure")
			}
		)

		this.messageFeild = $("#setup > #message")
	}

	/*
	 * run method gathers inputed settings into one json object
	 *
	 * @return {Object} json object of parties, ridings and success condition of the method
	 */
	run()
	{
		var returnVal = {"success" : true, "parties": null, "ridings": null}

		//checks if all feilds are set
		if(this.#feildCheck())
		{
			returnVal.parties = null;
			returnVal.ridings = null;

			CSVParser.csvToArray
			(
				this.partyFeild.files[0],
				this.#partyListener
			)

			CSVParser.csvToArray
			(
				this.ridingFeild.files[0],
				this.#ridingListener
			)


			this.#startCountDown(10)

			console.log(returnVal)
			
			return returnVal;
		}

		//fail
		returnVal.success = false;
		this.#sendMessage("Invalid feild: Make sure that all file feilds are set with a csv file")

		console.log(returnVal)
		return returnVal;
	}

	/**
	 * startCountDown is a recursive method to count down before the election page is actived
	 *
	 * @param {Number} count is an int of the number seconds left before the page starts
	 */
	#startCountDown(count)
	{
		if(count == 5)
		{
			$("#setup").css("display","none")
		}
		else if(count == 0)
		{
			return ;
		}
		this.#sendMessage("Live Stream Starting in : " + count)
		setTimeout(this.#startCountDown.bind(this, count - 1), 1000)
	}

	/**
	 * feildCheck checks if all settings are set with a valid value
	 * 
	 * @return {boolean} boolean whether all feilds are valid
	 */
	#feildCheck()
	{
		return this.#fileCheck(this.partyFeild.files) && this.#fileCheck(this.ridingFeild.files);
	}

	/**

	 * fileCheck determines if a file feild is set in a useable manner
	 *
	 * @param {Object} files is files instance from file input feild
	 *
	 * @return {boolean} boolean if the file is a csv
	 */
	#fileCheck(files)
	{
		if(files.length != 1)
		{
			return false;
		}

		name = files[0].name.toLowerCase();

		return name.substr(name.length - 3, 3) == "csv"
	}

	/**
	 * sendMessage updates message box
	 *
	 * @param {string} messageStr string value of message that will be displayed
	 */
	#sendMessage(messageStr)
	{
		this.messageFeild.addClass("alert")
		this.messageFeild.text(messageStr)

		setTimeout(this.#hideMessage.bind(this), 10*1000)
	}

	/**
	 * hideMessage hides the message box after being displayed
	 */
	#hideMessage()
	{
		this.messageFeild.removeClass("alert")
	}
}

a = new SetUp();

$("button").click(a.run.bind(a))