class Main
{
	static parties = []
	static ridings = []

	static active = true;
	static primaryDuration;
	static secondaryDuration;

	/**
	 * addParties appends a new party into parties array
	 *
	 * @param {param} party that will be appended to parties
	 *
	 * @throw {IlligalArguments} throws when paramaters are not party
	 */
	static addParties(party)
	{
		if(typeof party === "object" && party.constructor.name === Party.name)
		{
			Main.parties.push(party)
		}
		else
		{
			throw "IlligalArguments"
		}
	}

	/**
	 * addRiding appends a new riding into ridings array
	 *
	 * @param {param} riding that will be appended to ridings
	 *
	 * @throw {IlligalArguments} throws when paramaters are not riding
	 */
	static addRiding(riding)
	{
		if(typeof riding === "object" && riding.constructor.name === Riding.name)
		{
			Main.ridings.push(riding)
		}
		else
		{
			throw "IlligalArguments"
		}
	}

	/**
	 * setPrimaryDuration sets the number of seconds the primary riding vissible before transition to another ridding 
	 *
	 * @param {param} duration that will be visible before transition to another riding
	 *
	 * @throw {IlligalArguments} throws when paramaters are not int
	 */
	static setPrimaryDuration(duration)
	{
		if(/^\d+$/.test(duration))
		{
			Main.primaryDuration = duration
		}
		else
		{
			throw "IlligalArguments"
		}
	}

	/**
	 * setSecondaryDuration sets the number of seconds the secondary riding vissible before transition to another ridding 
	 *
	 * @param {param} duration that will be visible before transition to another riding
	 *
	 * @throw {IlligalArguments} throws when paramaters are not int
	 */
	static setSecondaryDuration(duration)
	{
		if(/^\d+$/.test(duration))
		{
			Main.secondaryDuration = duration
		}
		else
		{
			throw "IlligalArguments"
		}
	}
}