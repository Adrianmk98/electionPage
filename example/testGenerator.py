
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
    
