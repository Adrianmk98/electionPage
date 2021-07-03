class Listener
{
	#successAction;
	#failureAction;

	constructor()
	{
	}

	setOnSuccess(action)
	{
		this.#successAction = action;

		return this;
	}

	setOnFailure(action)
	{
		this.#failureAction = action;

		return this;
	}

	onSuccess(data)
	{
		this.#successAction(data);

		return this
	}

	onFailure()
	{
		this.#failureAction();

		return this
	}
}