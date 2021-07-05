/**
 * Candidate stores Candidate info
 */
class Candidate
{
	#partyId;
	#name;
	#faceSteal;
	#pollCount = [];

	/**
	 * constructor assigns and validates new candidate values
	 *
	 * @param {Array} arguments[0] array of all values with riding.csv
	 *
	 * @param {string} arguments[0] the party Id that the candidate belongs to
	 * @param {string} arguments[1] the name of the candidate
	 * @param {string} arguments[2] the image name of the candidates facesteal
	 * @param {Array} arguments[3] Array of votes received
	 *
	 * @throw {IlligalArguments} throws if the wrong number of IlligalArguments were given
	 */
	constructor()
	{
		if (arguments.length === 1)
		{
			this.#constructor1(arguments[0]);
		}
		else if(arguments.length === 4)
		{
			this.#constructor2(arguments[0], arguments[1], arguments[2], arguments[3])
		}
		else
		{
			throw "IlligalArguments";
		}
	}

	/**
	 * private #constructor1 assigns and validates new candidate values
	 *
	 * @param {Array} line array of all values with riding.csv
	 *
	 * @param {IlligalArguments} throws if the wrong data type is inserted
	 */
	#constructor1(line)
	{
		if(typeof line[0] === "string")
		{
			this.#partyId = line[0]	
		}
		else
		{
			throw "IlligalArguments"
		}

		if(typeof line[1] === "string")
		{
			this.#faceSteal = line[1]
		}
		else
		{
			throw "IlligalArguments"
		}

		if(typeof line[2] === "string")
		{
			this.#name = line[2]
		}
		else
		{
			throw "IlligalArguments"
		}
		
		for(var i1 = 3; i1 < line.length; i1++)
		{
			if(/^\d+$/.test(line[i1]))
			{
				this.#pollCount.push(parseInt(line[i1]))
			}
			else
			{
				throw "IlligalArguments"
			}
		}
	}

	/**
	 * private #constructor1 assigns and validates new candidate values
	 *
	 * @param {string} partyId the party Id that the candidate belongs to
	 * @param {string} name the name of the candidate
	 * @param {string} faceSteal the image name of the candidates facesteal
	 * @param {Array} pollCount Array of votes received
	 *
	 * @param {IlligalArguments} throws if the wrong data type is inserted
	 */

	#constructor2(partyId, name, faceSteal, pollCount)
	{
		if(typeof partyId === "string")
		{
			this.#partyId = partyId	
		}
		else
		{
			throw "IlligalArguments"
		}

		if(typeof faceSteal === "string")
		{
			this.#faceSteal = faceSteal
		}
		else
		{
			throw "IlligalArguments"
		}

		if(typeof name === "string")
		{
			this.#name = name
		}
		else
		{
			throw "IlligalArguments"
		}
		
		for(var i1 = 3; i1 < pollCount.length; i1++)
		{
			if(/^\d+$/.test(pollCount[i1]))
			{
				this.#pollCount.push(parseInt(pollCount[i1]))
			}
			else
			{
				throw "IlligalArguments"
			}
		}	
	}
}