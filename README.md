# Rock Paper Scissors 🎮

A browser-based Rock Paper Scissors game built with **vanilla JavaScript** and **HTML**. Play against the computer in a series of rounds; the first player to earn **3 points** wins.

## Features

- Random computer choices using `Math.random()`
- Standard Rock Paper Scissors rules, including ties
- Score tracking for the player and computer
- Automatic winner announcement when either side reaches 3 points
- Simple input using a browser prompt and results displayed in the browser's developer console

## Technologies

- **JavaScript (ES6)** — game logic, input handling, random choices, and score tracking
- **HTML5** — minimal page structure and script loading

## Getting Started

No installation, dependencies, or build tools are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/MojtabaNabid/rock-paper-scissor.git
   ```
2. Open `index.html` in your browser.
3. Open your browser's **Developer Tools → Console** to see the scores and results.
4. Enter `rock`, `paper`, or `scissor` in each prompt. Use lowercase spelling as shown.
5. Continue until you or the computer earns 3 points.

> **Note:** This is a prompt-and-console-based game, not a graphical button-based interface. An invalid entry displays a message in the console; it does not count as a win.

## How It Works

1. The player selects `rock`, `paper`, or `scissor` in a browser prompt.
2. The computer randomly selects one of the three choices.
3. The game checks the outcome and updates the scores (ties do not add points).
4. Scores are logged to the browser console after each round.
5. The game announces the match winner when one score reaches 3.

## Project Structure

```text
rock-paper-scissor/
├── app.js       # Game logic and score tracking
├── index.html   # HTML entry point
└── README.md    # Project documentation
```

## Author

**Mojtaba Nabid** — [GitHub](https://github.com/MojtabaNabid)

## Repository

[View the source code on GitHub](https://github.com/MojtabaNabid/rock-paper-scissor)
