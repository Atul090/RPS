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

  const choices: Choice[] = ['rock', 'paper', 'scissors'];

  const getComputerChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (player: Choice, computer: Choice): string => {
    if (player === computer) return 'Tie!';
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
      return 'You win! 🎉';
    }
    
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
      <h1>Rock Paper Scissors</h1>
      
      <div className="score-board">
        <div className="score">
          <h2>Player: {score.player}</h2>
          <h2>Computer: {score.computer}</h2>
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
          
          <div className="vs">VS</div>
          
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
          </div>
        )}
      </div>

      {gameHistory.length > 0 && (
        <div className="game-history">
          <h3>Game History</h3>
          <div className="history-list">
            {gameHistory.slice(-5).map((game, index) => (
              <div key={index} className="history-item">
                <span>{getEmoji(game.player)} vs {getEmoji(game.computer)}</span>
                <span className="history-result">{game.result}</span>
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