from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)

app.config['SECRET_KEY'] = "trick123"
debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """Shows home page"""
    prompts = story.prompts

    return render_template('home.html', prompts=prompts)


@app.route('/result')
def show_result():
    """Shows result madlibs Form"""
    text = story.generate(request.args)

    return render_template("result.html", text=text)

