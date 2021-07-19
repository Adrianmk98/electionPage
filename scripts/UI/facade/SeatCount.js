/**
 * SeatCount class updates the seat count footer
 */
class SeatCount extends Facade
{
	static area = $("#footer");

	/**
	 * draws a party seat count boxes
	 *
	 * @param {array} parties is an array of Party that will be visible
	 */
	draw(parties)
	{
		var tmp = ""
		for(var i1 = 0; i1 < parties.length; i1++)
		{
			tmp += this.#draw(parties[i1])
			if(i1 != parties.length - 1)
			{
				tmp += this.#separator()
			}
		}

		SeatCount.area.html(tmp)
	}

	/**
	 * #draw returns a string of the HTML of a party
	 *
	 * @param {Party} party is a Party object used to create a seat count box
	 *
	 * @return {String} HTML of a party
	 */
	#draw(party)
	{
		var tmp = ""

		tmp += '<div id="'+party.getKey()+'" class="party partyColour">'
			tmp += '<div class="name">'+party.getAbrv()+'</div>'
			tmp += '<div class="seat">0</div>'
		tmp += '</div>'

		return tmp;
	}

	/**
	 * #separator returns html string 
	 */
	#separator()
	{
		return '<div class="separator"></div>'
	}

	/**
	 * update the already drawn party seat count boxes
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

		$("div.party > .seat").text(0)

		for(var i1 = 0; i1 < winners.length; i1++)
		{
			$("div#"+winners[i1]+".party").children().last().text(seatCounts[winners[i1]])
		}
	}
}