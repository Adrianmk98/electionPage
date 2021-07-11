/**
 * RidingPools stores ridings that are queued and activley being displayed
 */
class RidingPools
{
	queue = []
	active = []
	max;

	constructor(max, ridings)
	{
		this.max = max

		for(var i1 = 0; i1 < ridings.length; i1++)
		{
			this.queue.push(ridings[i1])
		}
	}

	/**
	 * updatePool updates queue and active arrays based on time values
	 *
	 * @param {int} time is number value used to update queue and active
	 */
	updatePool(time)
	{
		var tmp;

		for(var i1 = this.queue.length - 1; i1 >= 0; i1--)
		{
			if(time >= this.queue[i1].getStartTime())
			{
				tmp = this.queue[i1]

				this.active.push(tmp)

				this.queue.splice(i1, 1)
			}
		}
	}
}