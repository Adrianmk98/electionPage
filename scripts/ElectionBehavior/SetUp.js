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
		if(this.#feildCheck())
		{
			console.log("Start")
			//start
			return;
		}

		//fail
		console.log("Fail")

		return;
	}

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
}

a = new SetUp();