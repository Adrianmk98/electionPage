import random
import math

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
    
    def randomName():
        '''
            Static method that returns a randomly generated name from a predefined name list

            Returns:
                String of a random name
        '''
        if Candidate.names == None:
            with open("names.txt","r") as f:
                Candidate.names = f.readlines()
        return Candidate.names[random.randint(0,len(Candidate.names)-1)].replace("\n","")
    
class Riding:
    def __init__(self, startTime, stepSize, population, ridingName):
        self.startTime = startTime
        self.stepSize = stepSize
        self.population = population
        self.ridingName = ridingName
        self.parties = []
    def generateCandidates(parties, steps):
        
    def generateCandidates(self, parties, steps):
        partiesCopy = parties.copy()
        candidateParties = []
        #get candidates in riding
        for i1 in range(random.randint(0, len(parties) - 1)):
        for i1 in range(random.randint(1, len(parties) - 1)):
            candidateParties.append(partiesCopy.pop(random.randint(0,len(partiesCopy)-1)))
        #add candidates in riding
        for party in candidateParties:
            self.parties.append(Candidate())
            self.parties.append(Candidate(party.key, "1.jpg"))
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
                vote = Riding.voteFormula(random.random(), 0, totalVotes, (steps - i - 1) / steps)
                totalVotes -= vote
                if len(candidate.polling) > 0 :
                    vote += candidate.polling[-1]
                candidate.polling.append(vote)
            if totalVotes <= 0:
                break;     
    def voteFormula(x, minVote, maxVote, offset = 0, scale = 1):
        if x < offset * scale or x > (1 + offset) * scale:
            return minVote
        vote = 16 * maxVote * (1 / scale * x - offset)**2 * (1/scale*x-(offset+1))**2 + minVote
        vote = math.floor(vote)
        return vote
    
    def __str__(self):
        tmp = "{0}\t{1}\t{2}\t{3}".format(self.startTime, self.stepSize, self.population, self.ridingName)
        for party in self.parties:
            tmp += "\n{0}".format(party)
        return tmp

def saveFile(string, name):
    with open(name, "w") as file:
        f.write(string)
        
def main():
    partyCount = 5
    
    ridingGroups = 5
    ridingCount = 3
    defaultCountTime = 5

    stepSize = [5, 6]
    populationSize = [50000, 999000]
    
    parties = []
    ridings = []
    
    for i in range(partyCount):
        parties.append(Party("par{0}".format(i + 1), "P{0}".format(i + 1), "party-{0}".format(i + 1), "rgb({0},{1},{2})".format(random.randint(0,255), random.randint(0,255), random.randint(0,255))))

    for i1 in range(ridingGroups):
        for i2 in range(ridingCount):
            ridings.append(Riding(i1 * defaultCountTime, random.randint(*stepSize), random.randint(*populationSize), "Riding-{0}".format(i1*ridingGroups+i2)))
            ridings[-1].generateCandidates(parties, )
            print(ridings[-1])
main()
