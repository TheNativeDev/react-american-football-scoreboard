//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [gameStats, setGameStats] = useState({
    down: 1,
    toGo: 10,
    ballOn: 1,
    quarter: 1
  });
  const [timeControl, setTimeControl] = useState("reset");
  const [toGoTerm, setToGoTerm] = useState("");
  const [ballOnTerm, setBallOnTerm] = useState("");

  const increaseScore = (team, points) => {
    team === "lions"
      ? setLionsScore(lionsScore + points)
      : setTigersScore(tigersScore + points);
  };

  const handleBallOnChange = e => {
    setBallOnTerm(e.target.value);
  };

  const handleToGoChange = e => {
    setToGoTerm(e.target.value);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">
            <Timer timeControl={timeControl} />
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow gameStats={gameStats} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={e => {
              increaseScore("lions", 7);
            }}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={e => {
              increaseScore("lions", 3);
            }}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={e => {
              increaseScore("tigers", 7);
            }}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={e => {
              increaseScore("tigers", 3);
            }}
          >
            Away Field Goal
          </button>
        </div>
        <div>
          <div>
            <button
              className="togoButton"
              onClick={() => {
                setGameStats({ ...gameStats, toGo: toGoTerm });
              }}
            >
              To Go
            </button>
            <input
              type="text"
              value={toGoTerm}
              placeholder="to GO"
              onChange={e => handleToGoChange(e)}
            />
          </div>
          <div>
            <button
              className="ballonButton"
              onClick={() => {
                setGameStats({ ...gameStats, ballOn: ballOnTerm });
              }}
            >
              Ball on
            </button>
            <input
              type="text"
              value={ballOnTerm}
              placeholder="Ball On"
              onChange={e => handleBallOnChange(e)}
            />
          </div>
          <button
            className="downButton"
            onClick={() => {
              gameStats.down === 4
                ? setGameStats({ ...gameStats, down: 1 })
                : setGameStats({ ...gameStats, down: gameStats.down + 1 });
            }}
          >
            Down
          </button>
          <button
            className="quarterButton"
            onClick={() => {
              gameStats.quarter === 4
                ? setGameStats({ ...gameStats, quarter: 1 })
                : setGameStats({
                    ...gameStats,
                    quarter: gameStats.quarter + 1
                  });
            }}
          >
            Quarter
          </button>
          <div>
            <button
              className="resetTimer"
              onClick={() => setTimeControl("reset")}
            >
              Reset Timer
            </button>
            <button
              className="pauseTimer"
              onClick={() => setTimeControl("pause")}
            >
              Pause Timer
            </button>
            <button
              className="resumeTimer"
              onClick={() => setTimeControl("resume")}
            >
              Resume Timer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
