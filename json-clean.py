import json




with open('beats.json', 'r') as f:
    data = json.load(f)

formatted_data = []
for item in data["data"]:

    position = list(item["coord"].split(','))
    new = {}
    a = []
    formatted_coords = []
    for i in position:
        a = i.split(' ')
        if "" in a:
            a.remove("")
        a = [float(i) for i in a]
        formatted_coords.append(a[::-1])
    
    formatted_item = {"beat": item["beat"], "coord": formatted_coords}
 
    formatted_data.append(formatted_item)

print(formatted_data)

  
formatted_json = {"data": formatted_data}

# print(formatted_json)
with open('formatted_json_file.json', 'w') as f:
    json.dump(formatted_json, f, indent=2)




# import json
# with open('data.json', 'w') as f:
#     json.dump(new, f)
