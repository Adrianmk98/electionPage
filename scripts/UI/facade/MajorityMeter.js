/**
 * MajorityMeter Facade updates majority meter
 */
class MajorityMeter extends Facade
{
	static area = $("#majorityMeter #polling");

	static #quorum;

	/**
	 * Draw method sets up party bars
	 *
	 * @param {array} parties is an array of party ids
	 * @param {integer} totalSeatCount is number of seats that could be won
	 */
	draw(parties, totalSeatCount)
	{
		var tmp = ""
		for(var i1 = 0; i1 < parties.length; i1++)
		{
			tmp += '<div id="'+parties[i1]+'" class="partyColour progress"></div>'
		}

		MajorityMeter.area.html(tmp)

		MajorityMeter.#quorum = Math.ceil(totalSeatCount/2) + 1

		$("#majorityMeter").find("#overlay").find("div:nth-child(2)").text(MajorityMeter.#quorum + " seats")
	}

	/**
	 * update all party bars
	 *
	 * @param {array} ridings is an array of Riding that will be used to calculate winner for each riding
	 * @param {integer} time is used to update each ridings seat count
	 */
	update(ridings, time)
	{
		var seatCounts = {}

		var winner;
		for(var i1 = 0; i1 < ridings.length; i1++)
		{
			ridings[i1].getCandidateVote(time)
			winner = ridings[i1].getWinner()

			for(var i2 = 0; i2 < winner.length; i2++)
			{
				if(seatCounts[winner[0]] == undefined)
				{
					seatCounts[winner[0]] = 1
				}
				else
				{
					seatCounts[winner[0]] += 1
				}
			}
		}

		var winners = Object.keys(seatCounts)
		var percent;

		$("#majorityMeter").find("#polling").children().css("width", "0%")


		for(var i1 = 0; i1 < winners.length; i1++)
		{
			percent = seatCounts[winners[i1]] / MajorityMeter.#quorum * 100 * 0.68

			$("#majorityMeter").find("#polling").find("#"+winners[i1]).css("width", Math.min(percent, 95)+"%")
		}
	}
}