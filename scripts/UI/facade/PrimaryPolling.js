class PrimaryPolling extends Facade
{
	static area = $("#main");
	static ridingName = $("#header")

	constructor()
	{
		super()
	}

	draw(riding, parties, time)
	{
		var candidates = riding.getCandidateVote(time)
		var tmp = ""
		for(var i1 = 0; i1 < candidates.length; i1++)
		{
			console.log(candidates[i1])
			console.log(parties[candidates[i1].getParty()])
			tmp += this.#draw(candidates[i1], parties[candidates[i1].getParty()].getAbrv(), riding.votes, i1 == 0)
		}
		console.log(tmp)
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
					tmp += '<h1>'+ (candidate.votes / totalVoteCount * 100) +'%</h1>'
					tmp += '<div id="progressBar">'
						tmp += '<div class="progress partyColour"></div>'
					tmp += '</div>'
				tmp += '</div>'
				tmp += '<div class="voteCount '
				if(winner)
				{
					tmp += 'winner'
				}
					tmp+='">'

					tmp += '<h3>' + 270 + '</h3>'
				if(winner)
				{
					tmp += '<h3>'+ (totalVoteCount - candidate.votes) +'lead'+'</h3>'
				}
				tmp += '</div>'
			tmp += '</div>'
			tmp += '<div class="bottom"></div>'
		tmp += '</div>'

		return tmp
	}
}