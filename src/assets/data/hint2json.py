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