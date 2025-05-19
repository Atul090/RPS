import { useState, useEffect } from 'react';
import './Game.css';

type Choice = 'rock' | 'paper' | 'scissors';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>('');
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [gameHistory, setGameHistory] = useState<Array<{
    player: Choice;
    computer: Choice;
    result: string;
  }>>([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const choices: Choice[] = ['rock', 'paper', 'scissors'];

  const getComputerChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (player: Choice, computer: Choice): string => {
    if (player === computer) {
      setStreak(0);
      return 'Tie! 🤝';
    }
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
      return 'You win! 🎉';
    }
    
    setStreak(0);
    setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
    return 'Computer wins! 🤖';
  };

  const handleChoice = (choice: Choice) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setPlayerChoice(choice);
    
    // Simulate computer "thinking"
    setTimeout(() => {
      const computer = getComputerChoice();
      setComputerChoice(computer);
      const gameResult = determineWinner(choice, computer);
      setResult(gameResult);
      
      setGameHistory(prev => [...prev, {
        player: choice,
        computer,
        result: gameResult
      }]);
      
      setIsAnimating(false);
    }, 1000);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setScore({ player: 0, computer: 0 });
    setGameHistory([]);
    setStreak(0);
  };

  const getEmoji = (choice: Choice) => {
    switch (choice) {
      case 'rock': return '✊';
      case 'paper': return '✋';
      case 'scissors': return '✌️';
    }
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Rock Paper Scissors</h1>
        <p className="subtitle">Challenge the computer in this classic game!</p>
      </div>
      
      <div className="stats-container">
        <div className="score-board">
          <div className="score">
            <div className="score-item">
              <h2>Player</h2>
              <span className="score-value">{score.player}</span>
            </div>
            <div className="score-item">
              <h2>Computer</h2>
              <span className="score-value">{score.computer}</span>
            </div>
          </div>
        </div>
        
        <div className="streak-container">
          <div className="streak">
            <span className="streak-label">Current Streak</span>
            <span className="streak-value">{streak}</span>
          </div>
          <div className="best-streak">
            <span className="streak-label">Best Streak</span>
            <span className="streak-value">{bestStreak}</span>
          </div>
        </div>
      </div>

      <div className="game-area">
        <div className="choices">
          {choices.map((choice) => (
            <button
              key={choice}
              className={`choice-btn ${playerChoice === choice ? 'selected' : ''} ${isAnimating ? 'disabled' : ''}`}
              onClick={() => handleChoice(choice)}
              disabled={isAnimating}
            >
              <span className="emoji">{getEmoji(choice)}</span>
              <span className="text">{choice.charAt(0).toUpperCase() + choice.slice(1)}</span>
            </button>
          ))}
        </div>

        <div className="battle-area">
          <div className="player-choice">
            {playerChoice && (
              <div className="choice-display">
                <span className="emoji large">{getEmoji(playerChoice)}</span>
                <p>Your choice</p>
              </div>
            )}
          </div>
          
          <div className="vs">
            <span className="vs-text">VS</span>
            {isAnimating && <div className="thinking">Computer is thinking...</div>}
          </div>
          
          <div className="computer-choice">
            {computerChoice && (
              <div className="choice-display">
                <span className="emoji large">{getEmoji(computerChoice)}</span>
                <p>Computer's choice</p>
              </div>
            )}
          </div>
        </div>

        {result && (
          <div className={`result ${result.includes('win') ? 'win' : result.includes('Tie') ? 'tie' : 'lose'}`}>
            <h3>{result}</h3>
            {streak > 1 && (
              <div className="streak-message">
                🔥 {streak} wins in a row! Keep it up! 🔥
              </div>
            )}
          </div>
        )}
      </div>

      {gameHistory.length > 0 && (
        <div className="game-history">
          <h3>Recent Games</h3>
          <div className="history-list">
            {gameHistory.slice(-5).map((game, index) => (
              <div key={index} className="history-item">
                <span className="history-choices">
                  {getEmoji(game.player)} vs {getEmoji(game.computer)}
                </span>
                <span className={`history-result ${game.result.includes('win') ? 'win' : game.result.includes('Tie') ? 'tie' : 'lose'}`}>
                  {game.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game; 