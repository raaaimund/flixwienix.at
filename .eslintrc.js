module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}