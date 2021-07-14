class PrimaryPolling extends Facade
{
	static area = $("#main");
	static ridingName = $("#header")

	static #candidates;

	constructor()
	{
		super()
	}

	draw(riding, parties, time)
	{
		PrimaryPolling.#candidates = riding.getCandidateVote(time)
		var tmp = ""
		var candidate;
		for(var i1 = 0; i1 < PrimaryPolling.#candidates.length; i1++)
		{
			candidate = PrimaryPolling.#candidates[i1]
			tmp += this.#draw(candidate, parties[candidate.getParty()].getAbrv(), riding.votes, i1 == 0)
		}
		PrimaryPolling.area.html(tmp)
		PrimaryPolling.ridingName.children().first().text(riding.getName())
	}

	/**
	 * #draw method returns string of candidate box for HTML
	 *
	 * @param {Candidate} candidate is a candidate object that stores key candidate information
	 * @param {partyName} partyName is the name of the party
	 */
	#draw(candidate, partyName, totalVoteCount, winner)
	{
		var tmp = ""

		tmp += '<div id="'+ candidate.getParty() +'" class="candidate partyColourBorder">'
			tmp += '<img src="facesteals/'+ candidate.getFaceSteal() +'">'
			tmp += '<div class="party partyColour">'+ partyName +'</div>'
			tmp += '<div class="name">U/'+ candidate.getName() +'</div>'
			tmp += '<div class="cover"></div>'
			tmp += '<div class="vote">'
				tmp += '<div class="percent">'
					var votePercent = Math.round(candidate.votes / totalVoteCount * 100)
					tmp += '<h1>'+ votePercent +'%</h1>'
					tmp += '<div id="progressBar">'
						tmp += '<div style="width: '+ votePercent +'%;" class="progress partyColour"></div>'
					tmp += '</div>'
				tmp += '</div>'
				tmp += '<div class="voteCount '
				if(winner)
				{
					tmp += 'winner'
				}
					tmp+='">'

					tmp += '<h3>' + candidate.votes + '</h3>'
				if(winner)
				{
					if(PrimaryPolling.#candidates.length > 2)
					{
						tmp += '<h3>'+ (totalVoteCount - PrimaryPolling.#candidates[1].votes) +' lead'+'</h3>'
					}
					else
					{
						tmp += '<h3>'+ totalVoteCount +' lead'+'</h3>'
					}
				}
				tmp += '</div>'
			tmp += '</div>'
			tmp += '<div class="bottom"></div>'
		tmp += '</div>'

		return tmp
	}

	update(riding, parties, time)
	{
		PrimaryPolling.#candidates = riding.getCandidateVote(time)
		var tmp = ""
		var candidate;
		for(var i1 = 0; i1 < PrimaryPolling.#candidates.length; i1++)
		{
			candidate = PrimaryPolling.#candidates[i1]
			tmp += this.#draw(candidate, parties[candidate.getParty()].getAbrv(), riding.votes, i1 == 0)
		}
		PrimaryPolling.area.html(tmp)
		PrimaryPolling.ridingName.children().first().text(riding.getName())
	}
}