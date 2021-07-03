class SetUp
{
	constructor()
	{
		this.partyFeild = $("input#partySettings")[0]
		this.ridingFeild = $("input#ridingSettings")[0]
		this.messageFeild = $("#setup > #message")
	}

	run()
	{
		var returnVal = {"success" : true}
		if(this.#feildCheck())
		{
			console.log("Start")
			//start
			return returnVal;
		}

		//fail
		returnVal.success = false;
		this.#sendMessage("Invalid feild: Make sure that all file feilds are set with a csv file")

		return returnVal;
	}

	//files checks
	#feildCheck()
	{
		return this.#fileCheck(this.partyFeild.files) && this.#fileCheck(this.ridingFeild.files);
	}

	#fileCheck(files)
	{
		if(files.length != 1)
		{
			return false;
		}

		name = files[0].name.toLowerCase();

		return name.substr(name.length - 3, 3) == "csv"
	}

	#sendMessage(messageStr)
	{
		this.messageFeild.addClass("alert")
		this.messageFeild.text(messageStr)

		setTimeout(this.#hideMessage.bind(this), 10*1000)
	}
	#hideMessage()
	{
		this.messageFeild.removeClass("alert")
	}
}

a = new SetUp();