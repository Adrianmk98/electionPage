class SetUp
{
	partyFeild;
	ridingFeild;
	messageFeild;
	
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
			//start
			this.#runCounter(10)
			return returnVal;
		}

		//fail
		returnVal.success = false;
		this.#sendMessage("Invalid feild: Make sure that all file feilds are set with a csv file")

		return returnVal;
	}

	#runCounter(count)
	{
		if(count == 5)
		{
			$("#setup").css("display","none")
		}
		else if(count == 0)
		{
			return ;
		}
		this.#sendMessage("Live Stream Starting in : "+count)
		setTimeout(this.#runCounter.bind(this, count - 1), 1000)
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

	//message methods
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

$("button").click(a.run.bind(a))