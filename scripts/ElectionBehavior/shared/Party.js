/**
 * Party stores infomration relating to a party and updating all elements relating to a certian party
 */
class Party
{
	#colour;
	#name;
	#abrv;//abbreviation

	/**
	 * constructor assigns and validates new party values
	 *
	 * @param {Array} arguments[0] array of colour, name and abrv
	 * 
	 * @param {String} arguments[0] hexcode or rgb colour value of party
	 * @param {string} arguments[1] long name of party
	 * @param {string} arguments[2] abbreviation of party
	 *
	 * @throw {IlligalArguments} constructor takes either 1 array or 3 string values
	 */
	constructor()
	{

		if (arguments.length === 1)
		{
			this.#constructor1(arguments[0]);
		}
		else if(arguments.length === 3)
		{
			this.#constructor2(arguments[0], arguments[1], arguments[2])
		}
		else
		{
			throw "IlligalArguments";
		}
	}

	/**
	 * private constructor1 intiates Party using array
	 *
	 * @param {Array} line array storing colour, name and abrv
	 */
	#constructor1(line)
	{
		throw "NotImplementedException";

		//if(Array.isArray(line))
		//{
		//}
	}

	/**
	 * private constructor2 intiates Party using array
	 *
	 * @param {String} colour hexcode or rgb colour value of party
	 * @param {string} name long name of party
	 * @param {string} abrv abbreviation of party
	 */
	#constructor2(colour, name, abrv)
	{
		throw "NotImplementedException";
	}
}