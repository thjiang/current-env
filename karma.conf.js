module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "test/*.js"
        ],
        preprocessors: {
            "test/*.js": ["webpack", "coverage"],
        },
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: "babel-loader"
                    }
                ]
            },
            mode: "production"
        },
        reporters: ["progress", "coverage"],
        coverageReporter: {
            type: "html",
            dir: "coverage/"
        },
        plugins: [
            "karma-webpack",
            "karma-jasmine",
            "karma-chrome-launcher",
            "karma-coverage"
        ],
        port: 9876,
        exclude: [],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false,
        concurrency: Infinity
    });
};
