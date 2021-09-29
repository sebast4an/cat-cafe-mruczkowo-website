# Cat Cafe Mruczkowo in Gliwice 😺

Website for my client. Client needed landing page without CMS. Website had to contain information section about cafe (text prepared by the Client) and contact section with make call button. In cafe domination green color so, on the website needed green and dark colors. Before coding client wanted to see design proposition in Figma and help him in buying domain and later deploy the website with config DNS records A / AAA.

## Live 📍:
https://kocia-kawiarnia-mruczkowo.pl


## Detailed customer expectations:
- The website needs to be lightweight and load very fast
- Bigger logo only in start page
- News section with a view of new Facebook posts
- Loading photos of new cats by photo name
- Sections: about caffee, how to help, contact with click to call button and section with Google Maps 
- Information about cookies files
- The final website must only contain the files: js, html, css and assets directory

## Tech used 👨‍💻:

| Tech              | Description                 |
| ----------------- | --------------------------- |
| JavaScript        | _ES6 syntax_                |
| Webpack 5         | _Builder_                   |
| SASS              | _CSS preprocessors_         |
| ESLint            | _Static code analysis_      |
| Prettier          | _Code formatter_            |
| Babel             | _JavaScript compiler_       |
| Autoprefixer      | _Add prefixes for browsers_ |

[All dependencies list](#all-dependencies-list)

## Using:

Installation:
```
npm i
```

Development server:
```
npm run serve
```

Build:
```
npm run build
```

Format all files by prettier:
```
npm run format
```


## All dependencies list:
```
"devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/eslint-parser": "^7.15.0",
    "@babel/plugin-syntax-top-level-await": "^7.14.5",
    "@babel/plugin-transform-runtime": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/runtime": "^7.15.3",
    "autoprefixer": "^10.3.1",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^6.2.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-webpack-plugin": "^3.0.1",
    "html-webpack-plugin": "^5.3.2",
    "mini-css-extract-plugin": "^2.2.0",
    "postcss": "^8.3.6",
    "postcss-loader": "^6.1.1",
    "prettier": "^2.3.2",
    "sass": "^1.38.0",
    "sass-loader": "^12.1.0",
    "style-loader": "^3.2.1",
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.0.0"
  },
  "dependencies": {
    "normalize.css": "^8.0.1"
  }
```
