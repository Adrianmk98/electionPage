
class Party:
    def __init__(self, key, shortName, longName, colour):
        self.key = key
        self.shortName = shortName
        self.longName = longName
        self.colour = colour
    def __str__(self):
        return "{0}\t{1}\t{2}\t{3}".format(self.key, self.shortName, self.longName, self.colour)
    
class Candidate:
    def __init__(self, partyKey, faceSteal, name):
        self.partyKey = partyKey
        self.faceSteal = faceSteal
        self.name = name
        self.polling = []
    def __str__(self):
        tmp = "{0}\t{1}\t{2}".format(self.partyKey, self.faceSteal, self.name)
        for poll in self.polling:
            tmp += "\t{0}".format(poll)
        return tmp
    
class Riding:
    def __init__(self, startTime, stepSize, population, ridingName):
        self.startTime = startTime
        self.stepSize = stepSize
        self.population = population
        self.ridingName = ridingName
        self.parties = []
    def generateCandidates(parties, steps):
        partiesCopy = parties.copy()
        candidateParties = []
        #get candidates in riding
        for i1 in range(random.randint(0, len(parties) - 1)):
            candidateParties.append(partiesCopy.pop(random.randint(0,len(partiesCopy)-1)))
        #add candidates in riding
        for party in candidateParties:
            self.parties.append(Candidate())
        #generate polling for candidates
        totalVotes = self.population
        for i in range(steps):
            tmpParties = self.parties.copy()
            random.shuffle(tmpParties)
            for candidate in tmpParties:
                if totalVotes <= 0:
                    break;
                vote = random.randint(0, totalVotes)
                if len(candidate.polling) != 0 :
                    vote += candidate.polling[-1]
                candidate.polling.append(vote)
            if totalVotes <= 0:
                break;
