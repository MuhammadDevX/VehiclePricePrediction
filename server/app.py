from flask import Flask, request, jsonify
from flask_cors import CORS
from predict import predict_price
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/', methods=['POST'])
def home():
    data = request.get_json()
    print(data)
    prediction = predict_price(data)
    return jsonify(float(prediction))  

if __name__ == '__main__':
    app.run(debug=True)
