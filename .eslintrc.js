module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "@vue/eslint-config-airbnb",
        "eslint:recommended",
        "@vue/prettier"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "max-len": [
            "error",
            120,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: false,
                ignoreTemplateLiterals: false
            }
        ]
    }
};
