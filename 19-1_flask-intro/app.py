from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def say_hello():
    return "Hello there"

@app.route('/bye')
def say_bye():
    return "Good bye"
