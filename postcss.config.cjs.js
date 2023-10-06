module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-modules': {
      scopeBehaviour: 'local',
    },
    'postcss-preset-env': {
      browsers: [
        'last 2 versions',
        '> 1%',
        'not dead',
      ],
      stage: 3,
    },
  },
};