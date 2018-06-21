import re
import json


class Hint:
    def __init__(self, id):
        self.id = id
        self.hint = ''
    def appendTxt(self, txt):
        self.hint += " " + txt
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)
    def __str__(self):
         return self.id + "\n" + self.hint + "\n"
 
hints = []
with open("/home/suroot/Documents/hints.txt") as q:
    hints = q.readlines()
    hints = [x.strip() for x in hints]

hs = {}
h = {}
for i in range(len(hints)):
    line = hints[i]
    r = re.compile(r'^(#\d+)')
    id = re.match(r, line)
    if(id):
        h = Hint(id.group(1) )
        h.appendTxt(line)
        hs[id.group(1)] =  h                    
    else:
        h.appendTxt(line)
   

print("[")
for k,v in hs.items():
    print(hs[k].toJSON() + ",")
print("]")

class Question:
    def __init__(self, id):
        self.id = id
        self.question = ''
        self.hints = []
        self.solution = ''
        self.solutionRuntime = ''
        self.solutionSpace = ''
        self.fullSolution = ''
    def appendTxt(self, txt):
        self.question += " " + txt
    def addHints(self, txt):
        hints = txt.split(', ')
        hints = [x.strip() for x in hints]
        for x in hints:
            try:
                self.hints.append(hs[x.strip()].hint)
            except KeyError:
                None
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)
    def __str__(self):
         return self.id + "\n" + self.question + "\n" + "".join(self.hints)
 
questions = []
with open("/home/suroot/Documents/questions.txt") as q:
    questions = q.readlines()
    questions = [x.strip() for x in questions]

qs = []
q = []
for i in range(len(questions)):
    line = questions[i]
    r = re.compile(r'^(\d+\.\d*)')
    id = re.match(r, line)
    if(id):
        q = Question(line)
        qs.append(q)                    
    elif line.startswith("Hints:"):
        q.addHints(line.replace("Hints:", ""))
    else:
        q.appendTxt(line)
   
print("[")
for i in range(len(qs)):
    print(qs[i].toJSON() + ",")
print("]")