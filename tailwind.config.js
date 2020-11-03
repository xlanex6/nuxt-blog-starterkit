module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#1E5A73',
      },
      inset: {},
      // add tailwind custom here,
    }
  },
  variants: {},
  // uncomment if you using tailwind UI
  // plugins: [require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: []
    }
  }
}
