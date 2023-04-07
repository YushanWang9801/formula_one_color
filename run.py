from flask import Flask, render_template, url_for
from Components.data import constructor_leaderboard
from Components.data import driver_leaderboard
from Components.data import colors

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/constructors")
def constructor():
    return render_template('constructor.html', leaderboard = constructor_leaderboard, 
                           title = "Constructor Leaderboard",
                           enumerate=enumerate,
                           str = str)

@app.route("/drivers")
def driver():
    return render_template('driver.html', leaderboard = driver_leaderboard, 
                           title = "Driver Leaderboard",
                           enumerate=enumerate,
                           str = str)

@app.route("/design")
def design():
    return render_template('design.html', colors=colors, 
                        enumerate=enumerate,)

if __name__ == '__main__':
    app.run(debug=True)