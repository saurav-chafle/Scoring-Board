
let teamAScore = 0;
let teamBScore = 0;


let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");


let incrementScore = (team) => {
  if (team === "teamA") {
    teamAScore++;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB") {
    teamBScore++;
    teamBScoreValue.textContent = teamBScore;
  }
  
};


let decrementScore = (team) => {
  if (team === "teamA" && teamAScore > 0) {
    teamAScore--;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB" && teamBScore > 0) {
    teamBScore--;
    teamBScoreValue.textContent = teamBScore;
  }
};


let resetScores = () => {
  teamAScore = 0;
  teamBScore = 0;
  teamAScoreValue.textContent = teamAScore;
  teamBScoreValue.textContent = teamBScore;
};

