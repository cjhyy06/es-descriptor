const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry"
    }
  ]
]

const plugins = [
  ["@babel/plugin-proposal-decorators", { "legacy": true }]
]

module.exports = {
  presets,
  plugins
}
