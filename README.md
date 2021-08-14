# <img width="35" height="35" src="https://webpack.js.org/assets/icon-square-big.svg"> Webpack boilerplate
My boilerplate for webpack 5 with babel, eslint, prettier and [other plugins.](#file_folder-dependencies)

## :floppy_disk: Installation:
Clone this repository and install by typing:
``` bash
npm i
```

## :computer: Using:

Development server:
``` bash
npm run serve
```

Build:
``` bash
npm run build
```

Format all files by prettier:
``` bash
npm run format
```


## :abcd: Prettier & ESlint config:

.prettierrc
``` JSON
{
    "singleQuote": true,
    "printWidth": 100,
    "arrowParens": "avoid"
}
```

.eslintrc
``` JSON
{
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": [
        "error",
        { "singleQuote": true, "printWidth": 100, "arrowParens": "avoid" }
      ],
      "arrow-parens": ["warn", "as-needed"]
    },
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "parser": "babel-eslint"
}
```

## :file_folder: Dependencies:
```JSON
  "devDependencies": {
    "@babel/core": "^7.14.5",
    "@babel/eslint-parser": "^7.14.7",
    "@babel/plugin-syntax-top-level-await": "^7.14.5",
    "@babel/plugin-transform-runtime": "^7.14.5",
    "@babel/preset-env": "^7.14.5",
    "@babel/runtime": "^7.14.6",
    "autoprefixer": "^10.2.6",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.6",
    "eslint": "^7.30.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-webpack-plugin": "^2.5.4",
    "html-webpack-plugin": "^5.3.1",
    "mini-css-extract-plugin": "^1.6.0",
    "postcss": "^8.3.2",
    "postcss-loader": "^6.1.0",
    "prettier": "^2.3.2",
    "sass": "^1.34.1",
    "sass-loader": "^12.1.0",
    "style-loader": "^2.0.0",
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "normalize.css": "^8.0.1"
  }
```
