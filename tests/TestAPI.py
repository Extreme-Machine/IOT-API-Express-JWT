import json
import requests
import random
import time

URL = 'http://localhost:3000/api/realtime'

HEADERS = {'Content-Type':'application/json',
'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmY3YmY5MWViZmY5NjFmZDQxZmM2MzQiLCJ2ZWhpY2xlTmFtZSI6InRlc3QyIiwidmVoaWNsZU51bWJlciI6InRlc3QyIiwiaWF0IjoxNTQyOTYzMDg5fQ.aCU0y0PmWUGx2XX7Q3RomwafWlWOdAQzl7nIUQCVeEI'}


def randomData():
    i = random.randint(1,1000)
    PAYLOAD = {	
        "gps": {
            "lat":  i,
            "long": i
        },
        "speed": i,
        "acceleration": i ,
        "status": "true",
        "temperature": i,
        "batteryLevel": i,
        "fuelLevel": i
    }
    return PAYLOAD

def testAPI():
    count = 0
    for i in range(0,10000):
        r = requests.post(URL, data=json.dumps(randomData()), headers=HEADERS)
        count+=1
        print("Count: {}".format(count))
        print (r.text)


start_time = time.time()
testAPI()
print("--- %s seconds ---" % (time.time() - start_time))