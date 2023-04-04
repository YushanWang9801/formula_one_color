from flask import Flask, render_template, url_for

app = Flask(__name__)


leaderboard = [
  {
    "team": 'RED BULL RACING HONDA RBPT',
  },
  {
    "team": 'ASTON MARTIN ARAMCO MERCEDES',
  },
  {
    "team": 'MERCEDES',
  },
  {
    "team": 'FERRARI',
  },
  {
    "team": 'MCLAREN MERCEDES',
  },
  {
    "team": 'ALPINE RENAULT',
  },
  {
    "team": 'HAAS FERRARI',
  }, 
  {
    "team": 'ALFA ROMEO FERRARI',
  },
  {
    "team": 'ALPHATAURI HONDA RBPT',
  },
  {
    "team": 'WILLIAMS MERCEDES',
  },
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', leaderboard = leaderboard)

if __name__ == '__main__':
    app.run(debug=True)