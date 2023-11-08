# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div


app = Flask(__name__)

@app.route('/add')
def addition():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a, b)
    return str(result)

@app.route('/sub')
def subtract():
    a = float(request.args.get('a', 0))
    b = float(request.args.get('b', 0))
    result = a - b
    return str(result)

@app.route('/mult')
def multiply():
    a = float(request.args.get('a', 0))
    b = float(request.args.get('b', 0))
    result = a * b
    return str(result)

@app.route('/div')
def divive():
    a = float(request.args.get('a', 0))
    b = float(request.args.get('b', 1))  # Ensure b is not 0 for division
    result = a / b
    return str(result)

## PART TWO

operators = {
        "add": add,
        "sub": sub,
        "mult": mult,
        "div": div,
        }

@app.route("/math/<oper>")
def do_math(oper):
    """Do math on a and b."""

    a = float(request.args.get('a', 0))
    b = float(request.args.get('b', 0))
    result = operators[oper](a, b)

    return str(result)