class Main
{
	static #parties = {}
	static #ridings = []

	static #primaryDuration = 0;
	static #secondaryDuration = 0;

	static #primaryRidingPool;
	static #secondaryRidingPool;

	static #active = true;
	static #time = 0;

	static #primaryPolling = new PrimaryPolling();

	/**
	 * start methods intiates the election livestream
	 */
	static start()
	{
		console.log("started")

		Main.#primaryRidingPool = new RidingPools(5, Main.#ridings)
		Main.#secondaryRidingPool = new RidingPools(NaN, Main.#ridings)

		Main.#active = true;
		
		Main.#primaryRidingPool.updatePool(Main.#time)
		Main.#secondaryRidingPool.updatePool(Main.#time)


		Main.#update()
	}

	/**
	 * update method handles the updating of riding veiws
	 */
	static #update()
	{
		if(Main.#active)
		{
		Main.#primaryRidingPool.updatePool(Main.#time)
		Main.#secondaryRidingPool.updatePool(Main.#time)

			if(Main.#time % Main.#primaryDuration === 0)
			{
				if(Main.#primaryRidingPool.active.length > 0)
				{
					Main.#primaryPolling.draw(Main.#primaryRidingPool.active[0], Main.#parties, Main.#time)
				}
				
				console.log("UPDATE MAIN")
				console.log(Main.#primaryRidingPool)
			}

			if(Main.#time % Main.#secondaryDuration === 0)
			{
				console.log("UPDATE Secondary")
				console.log(Main.#secondaryRidingPool)
			}

			Main.#time++;
		}

		setTimeout(Main.#update, 1000)
	}

	/**
	 * togglePause plays/pauses the livestream based on whether livestream is active
	 */
	static togglePause()
	{
		Main.#active = Main.#active === true
	}

	/**
	 * play plays the livestream
	 */
	static play()
	{
		Main.#active = true
	}

	/**
	 * pause pauses the livestream
	 */
	static pause()
	{
		Main.#active = false;
	}

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
			Main.#parties[party.getKey()]=party
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
			Main.#ridings.push(riding)
		}
		else
		{
			throw "IlligalArguments"
		}
	}

	/**
	 * getRiding gets the riding at specfic index
	 *
	 * @param {param} index is number 
	 *
	 * @returns {Riding} riding at index
	 */
	static getRiding(index)
	{
		return Main.#ridings[index]
	}

	/**
	 * DOCUMENTATION HERE
	 */
	static ridingCount()
	{
		return Main.#ridings.length
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
			Main.#primaryDuration = duration
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
			Main.#secondaryDuration = duration
		}
		else
		{
			throw "IlligalArguments"
		}
	}
}