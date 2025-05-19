# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Rock Paper Scissors Game

A modern, interactive web-based Rock Paper Scissors game built with React and TypeScript. This application offers an engaging gaming experience with beautiful animations, responsive design, and real-time game statistics.

## 🎮 Features

### Core Gameplay
- Classic Rock Paper Scissors gameplay
- Real-time player vs computer matches
- Instant feedback on game results
- Smooth animations and transitions
- Interactive game buttons with hover effects

### Game Statistics
- Real-time score tracking
- Win/Loss/Tie counters
- Current streak tracking
- Best streak record
- Detailed game history

### Visual Elements
- Modern, clean user interface
- Responsive design for all devices
- Beautiful gradient effects
- Glassmorphism design elements
- Animated emojis for choices
- Dynamic color schemes

### User Experience
- Intuitive game controls
- Clear game state indicators
- Immediate feedback on actions
- Smooth animations
- Easy-to-read game history
- One-click game reset

## 🛠️ Technical Details

### Technologies Used
- React 18
- TypeScript
- CSS3 with modern features
- Vite for build tooling

### Key Components

#### Game Component
- Main game logic
- State management
- Score tracking
- Game history
- Streak system

#### Styling Features
- CSS Variables for theming
- Responsive design
- Flexbox layouts
- CSS Grid
- Modern animations
- Media queries for device adaptation

### CSS Features
- Custom properties (variables)
- Flexbox and Grid layouts
- CSS animations
- Media queries
- Gradient effects
- Glassmorphism
- Box shadows
- Border radius
- Transitions

## 🎯 Game Rules

1. Player selects one of three options: Rock, Paper, or Scissors
2. Computer randomly selects its choice
3. Winner is determined by traditional rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. Ties occur when both player and computer choose the same option

## 📱 Responsive Design

The game is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

### Breakpoints
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🎨 Design Elements

### Color Scheme
- Primary: #7c3aed (Purple)
- Secondary: #4f46e5 (Indigo)
- Accent: #ec4899 (Pink)
- Background: #f8fafc (Light Gray)
- Text: #1e293b (Dark Gray)

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes using clamp()
- Gradient text effects
- Text shadows for depth

### Animations
- Fade in/out effects
- Slide animations
- Bounce effects
- Pulse animations
- Hover transitions
- Shine effects

## 🔄 Game Flow

1. **Game Start**
   - Player sees the game interface
   - Score and streak counters are visible
   - Game history is empty

2. **During Play**
   - Player selects their choice
   - Computer makes its selection
   - Results are displayed immediately
   - Score and streak are updated
   - Game history is updated

3. **Game Reset**
   - All scores reset to zero
   - Streak counters reset
   - Game history is cleared
   - Ready for new game

## 🎯 Performance Optimizations

- Efficient state management
- Optimized animations
- Responsive image loading
- Minimal DOM updates
- Efficient CSS selectors

## 🔒 Browser Support

The game is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## 📝 Future Enhancements

Potential future improvements:
- Multiplayer support
- Custom themes
- Sound effects
- Achievement system
- Leaderboard
- Tournament mode

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
