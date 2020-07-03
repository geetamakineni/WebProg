import pymysql, json
from flask import Flask

app = Flask(__name__)


@app.route("/state", methods=['GET'])
def Connect():
    connection = pymysql.connect(host="127.0.0.1", user="root", passwd="root", db="us")
    # Enter the DataBase Name
    cursor = connection.cursor()
    state_dict = {}
    state_list = []
    cursor.execute("SELECT state FROM us.state")
    data = cursor.fetchall()
    for row in data:
        state_list.append(row[0])
    state_dict["state_name"] = state_list
    return json.dumps(state_dict)


@app.route("/city/<name>", methods=['GET'])
def city(name):
    connection = pymysql.connect(host="127.0.0.1", user="root", passwd="root", db="us")
    # Enter the DataBase Name
    cursor = connection.cursor()
    state_dict = {}
    state_list = []
    cursor.execute("SELECT city_name,state_name FROM us.city_state where state_name=" +"'"+ str(name)+"'")
    data = cursor.fetchall()
    for row in data:
        state_list.append(row[0])
    state_dict["city_name"] = state_list
    return json.dumps(state_dict)


if __name__ == "__main__":
    app.run()
