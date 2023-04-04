from flask import Flask, render_template, url_for
from Components.data import leaderboard

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', leaderboard = leaderboard)

if __name__ == '__main__':
    app.run(debug=True)