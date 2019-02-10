module.exports = {
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "jsx": true
          },
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true,
        "commonjs": true
    },
    "plugins": ["react"],
    "rules": {
      "react/prop-types": 0,
      "react/jsx-uses-vars": [2],
      "no-console": 0
    }
};

