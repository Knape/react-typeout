// Karma configuration
// Generated on Wed Mar 18 2015 11:41:18 GMT+0800 (CST)

module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/specs/*.js', included: true, watched: !process.env.TRAVIS },
    ],

    // list of files to exclude
    exclude: [
      'test/coverage/**',
      'lib/**',
      'node_modules/'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          include: /src|test|demo/,
          query: {
            presets: ['stage-3', 'es2015', 'react'],
            plugins: []
          },
          loader: 'babel'
        }],
        postLoaders: [{
          test: /\.js$/,
          include: /src/,
          loader: 'istanbul-instrumenter'
        }]
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-coverage',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'istanbul-instrumenter-loader',
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: process.env.TRAVIS ? [] : ['progress', 'coverage'],

    coverageReporter: {
      dir: 'test',
      reporters: [{
        type: 'html',
        subdir: 'coverage'
      }, {
        type: 'text',
      }, {
        type: 'lcov',
        subdir: 'coverage'
      }]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Firefox'],

    browserNoActivityTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !process.env.TRAVIS,
  });
};
