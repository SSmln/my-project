module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
      
        "plugin:react/recommended"
        
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "parser": "babel-parser"      
            
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@emotion"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "@emotion/jsx-import": "error",
        "react/no-unknown-property": ["error", { "ignore": ["css"] , "ignore": ["styled"]}],
        "@emotion/pkg-renaming": "error",
        "@emotion/no-vanilla": "error",
        "@emotion/import-from-emotion": "error",
        "@emotion/styled-import": "error"
     

    }
}
