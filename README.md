# Tic-Tac-Toe Game

A modern, interactive Tic-Tac-Toe game built with React and Vite. Play against a friend in this classic two-player game with a beautiful UI and smooth gameplay experience.

## 🎮 Features

- **Two-Player Gameplay**: Play with circles (O) and crosses (X)
- **Win Detection**: Automatically detects winning combinations
- **Visual Feedback**: Winning cells are highlighted in cyan
- **Draw Detection**: Recognizes when the game ends in a draw
- **Reset Functionality**: Start a new game anytime with the reset button
- **Responsive Design**: Fully responsive and works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful background image and clean, minimalist design
- **Turn Indicator**: Shows whose turn it is during gameplay

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and development server
- **ESLint** - Code linting
- **CSS3** - Styling with responsive design

## 📁 Project Structure

```
tic-tac-toe/
├── public/
├── src/
│   ├── assets/
│   │   ├── cell.jsx          # Cell component
│   │   └── tictactoe_bg.jpeg # Background image
│   ├── App.jsx               # Main game component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎯 How to Play

1. The game starts with **Circle's** turn
2. Click on any empty cell to place your mark
3. Players alternate turns between Circle (O) and Cross (X)
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, the game ends in a draw
6. Click the **Reset** button to start a new game

## 🎨 Features in Detail

- **Win Highlighting**: When a player wins, the winning combination is highlighted in cyan
- **Prevent Invalid Moves**: Players cannot click on cells that are already occupied
- **Game State Management**: The game automatically detects when it's over and prevents further moves
- **Responsive Breakpoints**: Optimized for screens from 400px to desktop sizes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start development server with host access
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ by [Rajat]

---

Enjoy playing Tic-Tac-Toe! 🎉

