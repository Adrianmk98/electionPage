class Exception
{
	error;
	message;
	constructor(error, message = "")
	{
		this.error = error
		this.message = message
	}

	toString()
	{
		return this.error+":"+this.message
	}
}