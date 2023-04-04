from flask import Flask, render_template, url_for
from Components.data import constructor_leaderboard
from Components.data import driver_leaderboard

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/constructor_leaderboard")
def home():
    return render_template('constructor.html', leaderboard = constructor_leaderboard, 
                           enumerate=enumerate,
                           str = str)

@app.route("/driver_leaderboard")
def driver():
    return render_template('driver.html', leaderboard = driver_leaderboard, 
                           enumerate=enumerate,
                           str = str)

if __name__ == '__main__':
    app.run(debug=True)