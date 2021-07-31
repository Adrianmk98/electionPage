
class Party:
    def __init__(self, key, shortName, longName, colour):
        self.key = key
        self.shortName = shortName
        self.longName = longName
        self.colour = colour
    def __str__(self):
        return "{0}\t{1}\t{2}\t{3}".format(self.key, self.shortName, self.longName, self.colour)
    
