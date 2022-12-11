module.exports = {
  content: ["./**/*.tsx"], // so that tailwind can target and be used on all tsx files
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
