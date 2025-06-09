from flask import Flask, request, jsonify
from database import get_connection, getProductDemographic
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()
print("CLIENT origin is:", os.getenv("CLIENT"))

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": os.getenv("CLIENT")}})

@app.route("/user/<uid>")
def getUser(uid):
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM user WHERE uid = %s", (uid,))
    res = cursor.fetchall()
    cursor.close()
    connection.close()
    if not res:
        return jsonify({"error": "User not found"}), 404
    return jsonify(res[0])

@app.route("/post", methods=["POST"])
def post():
    data = request.get_json()
    print(data.get("data"))
    return jsonify(data), 201

@app.route("/api/product-inventory/<store>")
def demographicByStore(store):
    result = getProductDemographic(store)
    if not result:
        return jsonify({"error": "No products found for that store"}), 404
    return jsonify(result), 200

if __name__ == "__main__":
    app.run(debug=True)
