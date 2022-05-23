import pymongo
import urllib
from pymongo import MongoClient

with open('login.txt') as f:
    lines = f.readlines()

USER = urllib.parse.quote_plus(lines[0].strip())
PASSWORD = urllib.parse.quote_plus(lines[1].strip())

cluster = MongoClient(f"mongodb+srv://{USER}:{PASSWORD}@cluster0.cw07o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db =cluster['intro']
collection = db['test']

post1 = {'_id':1,'name':'Eoin','age':28}
post2 = {'_id':2,'name':'Eoin','age':28}

results = collection.find({"age":{"$lt":30}})

for result in results:
    print(result)
