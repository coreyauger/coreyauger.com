import re
import json

class Question:
    def __init__(self, id):
        self.id = id
        self.question = ''
        self.hints = []
        self.solution = ''
        self.solutionRuntime = ''
        self.solutionSpace = ''
    def appendTxt(self, txt):
        self.question += " " + txt
    def addHints(self, txt):
        self.hints = txt.split(', ')
        self.hints = [x.strip() for x in self.hints]
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