from flask import Flask, jsonify, request
from flask_cors import CORS
from scheduler_temp import message_scheduler

app = Flask(__name__)
CORS(app)

@app.route('/')
def index_route():
    return jsonify({'message': 'Hello, World!'})

@app.route('/', methods=['POST'])
def register_data():
    number = request.get_json()['number']
    message = request.get_json()['message']
    time = request.get_json()['sendTime']
    # print(number, message, time['time'][0:2], time['time'][3:5])
    message_scheduler(number, message, time['time'][0:2], time['time'][3:5])
    return jsonify({'message': 'Message scheduled!'})

if __name__ == '__main__':
    app.run(debug=True)