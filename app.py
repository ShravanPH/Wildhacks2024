from flask import Flask, json
from flask_cors import CORS ,cross_origin
import os
import pandas as pd
from sodapy import Socrata
from flask_jsonpify import jsonpify



app = Flask(__name__)
cors = CORS(app)

API_KEY_ID = '73sfqccespsy3pv00s635m3mr'
API_SECRET_KEY = '37nuucuiamu0gpna2fpprp5w9gzls3ke84gic88ulgotj6xaw8'
APP_TOKEN = 'qlzDG0lgMqItogTS532fzVFHj'

client = Socrata("data.cityofchicago.org", None)

# Example authenticated client (needed for non-public datasets):
# client = Socrata(data.cityofchicago.org,
#                  APP_TOKEN,
#                  username="user@example.com",
#                  password="AFakePassword")

results = client.get("dqcy-ctma", limit=20000)

df = pd.DataFrame.from_records(results)

# print(df.primary_type.unique())
dates = df.date.unique()
dates.sort()
# print(dates)


@app.route('/crime-positions', methods=["GET"])
@cross_origin()
def crime_positions():
	
    # required_cols = df[['primary_type', 'latitude', 'longitude']].copy()
    # res = required_cols.groupby('primary_type')

    crime_counts = df.groupby(['beat', 'primary_type']).size().reset_index(name='crime_count')
    print(crime_counts)
    result = crime_counts.groupby('beat').apply(lambda x: x.set_index('primary_type')['crime_count'].to_dict()).to_dict()

    print(result)
    return {"message":"hello", "data": result}

@app.route('/crimes-per-beat', methods=["GET"])
@cross_origin()
def crimes_per_beat():

    beat_crime_counts = df['beat'].value_counts().reset_index()
    beat_crime_counts.columns = ['beat', 'crime_count']

    # print(beat_crime_counts)

    result = beat_crime_counts.set_index('beat')['crime_count'].to_dict()

    print(result)
    return {"message":"hello", "data":result}




# jsondata = json.load(open('beats.json'))
# # print(type(jsondata['beats']['data'][0]))

# new = []
# for i in jsondata['beats']['data']:
#     # print(i[12])
#     val = {"beat": i[12], "coord": i[8]}
#     new.append(val)
# print(new)

# import json
# with open('data.json', 'w') as f:
#     json.dump(new, f)



if __name__ == "__main__":
   
    app.run(host='127.0.0.1', port=5000)