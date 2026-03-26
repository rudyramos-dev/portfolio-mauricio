module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg:       '#0d1117',
          surface:  '#161b22',
          surface2: '#21262d',
          border:   '#30363d',
          green:    '#4ade80',
          'green-dim': '#22c55e',
          cyan:     '#38bdf8',
          orange:   '#fb923c',
          purple:   '#a78bfa',
          yellow:   '#fbbf24',
          red:      '#f87171',
          text:     '#e6edf3',
          muted:    '#8b949e',
          comment:  '#6e7681',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}