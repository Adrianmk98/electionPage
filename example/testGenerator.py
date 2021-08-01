import random
import math

class Party:
    '''
        Party class stores key aspects of a Poltical Party
    '''
    
    def __init__(self, key, shortName, longName, colour):
        '''
            __init__ assigns values for key poltical party names and values

            Parameters:
                key (String): key is a short unique name assoicated with party
                shortName (String): shortName is a abbreviation of a poltical party
                longName (String): longName is the name of a poltical party
                colour (String): colour is the party colour
        '''
        self.key = key
        self.shortName = shortName
        self.longName = longName
        self.colour = colour
        
    def __str__(self):
        '''
            __str__ returns a string of key Party instances

            Returns:
                String of key Party instances
        '''
        return "{0}\t{1}\t{2}\t{3}".format(self.key, self.shortName, self.longName, self.colour)
    
class Candidate:
    '''
        Candidate class stores key aspects of a candidate
    '''
     
    names = None
    
    def __init__(self, partyKey, faceSteal, name = None):
        '''
            __init__ assigns values for candidate

            Parameters:
                partyKey (String): unqiue key value from a Party
                faceSteal (String): image name of faceSteal file
                name (String): name of candidate
        '''
        self.partyKey = partyKey
        self.faceSteal = faceSteal
        if name == None:
            self.name = Candidate.randomName()
        else:
            self.name = name
        self.polling = []
        
    def __str__(self):
        '''
            __str__ returns a string of key Candidate instances

            Returns:
                Strings of key Candidate insances
        '''
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
    '''
        Riding Class stores key aspects of a Riding 
    '''
    def __init__(self, startTime, stepSize, population, ridingName):
        '''
            __init__ assigns values for Riding

            Parameters:
                startTime (int): number of seconds before the riding begins counting votes
                stepSize (int): number of seconds before the vote checkpoints
                population (int): number people in a riding
                ridingName (String): name of riding
        '''
        self.startTime = startTime
        self.stepSize = stepSize
        self.population = population
        self.ridingName = ridingName
        self.parties = []
        
    def generateCandidates(self, parties, steps):
        '''
            generateCandidates procedurally creates a set of candidates in the riding

            Parameters:
                parties (list(Party)): list of Parties to choose Candidate parties
                steps (int): number of steps/vote checkpoints
        '''
        partiesCopy = parties.copy()
        candidateParties = []
        #get candidates in riding
        for i1 in range(random.randint(1, len(parties) - 1)):
            candidateParties.append(partiesCopy.pop(random.randint(0,len(partiesCopy)-1)))
        #add candidates in riding
        for party in candidateParties:
            self.parties.append(Candidate(party.key, "1.jpg"))
        #generate polling for candidates
        totalVotes = self.population
        for i in range(steps):
            tmpParties = self.parties.copy()
            random.shuffle(tmpParties)
            for candidate in tmpParties:
                if totalVotes <= 0:
                    break;
                vote = Riding.voteFormula(random.random(), 0, totalVotes, (steps - i - 1) / steps)
                totalVotes -= vote
                if len(candidate.polling) > 0 :
                    vote += candidate.polling[-1]
                candidate.polling.append(vote)
            if totalVotes <= 0:
                break;
            
    def voteFormula(x, minVote, maxVote, offset = 0, scale = 1):
        '''
            voteFormula is a static method that returns number of votes gathered by a candidate at a specfic time based on the formula floor(16*maxVote(x-0)^2(x-1)^2+minVote)

            Parameters:
                x (float): is a random nuber between 0 - 1
                minVote (int): is the minimum number of votes that can be retrived
                maxVote (int): is the maximum number of votes that can be retrived
                offset (float): is a horizontal offset of a curve
                scale (float): horizontal scale factor of a curve

            Returns:
                int number of seats won by candidate
        '''
        if x < offset * scale or x > (1 + offset) * scale:
            return minVote
        vote = 16 * maxVote * (1 / scale * x - offset)**2 * (1/scale*x-(offset+1))**2 + minVote
        vote = math.floor(vote)
        return vote
    
    def __str__(self):
        '''
            __str__ returns a string of key Riding information

            Returns:
                String of key Riding information
        '''
        tmp = "{0}\t{1}\t{2}\t{3}".format(self.startTime, self.stepSize, self.population, self.ridingName)
        for party in self.parties:
            tmp += "\n{0}".format(party)
        return tmp

def saveFile(content, name):
    '''
        saveFile method saves a file

        Parameters:
            content (String): content is string that is used to fill file
            name (Stirng): name is name of file
    '''
    with open(name+".csv", "w") as file:
        file.write(content)
        
def main():
    '''
        main method generates parties.csv and riding.csv
    '''
    partyCount = 5
    
    ridingGroups = 5
    ridingCount = 3
    defaultCountTime = 5
    secondsToMin = 60

    stepSize = [5, 6]
    populationSize = [50000, 999000]
    
    parties = []
    ridings = []

    hexaDecimal = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    
    for i in range(partyCount):
        colour = "#"
        for i2 in range(3):
            colour += "{0}{1}".format(hexaDecimal[random.randint(0,15)],hexaDecimal[random.randint(0,15)])
        parties.append(Party("par{0}".format(i + 1), "P{0}".format(i + 1), "party-{0}".format(i + 1), colour))

    saveFile("\n".join(["{0}".format(p) for p in parties]), "parties2")
    
    for i1 in range(ridingGroups):
        for i2 in range(ridingCount):
            ridings.append(Riding(i1 * defaultCountTime * secondsToMin, random.randint(*stepSize) * secondsToMin, random.randint(*populationSize), "Riding-{0}".format(i1*ridingGroups+i2)))
            ridings[-1].generateCandidates(parties, random.randint(5,25))
            
    saveFile("\n".join(["{0}".format(r) for r in ridings]), "ridings2")

if __name__ == "__main__":
    main()
