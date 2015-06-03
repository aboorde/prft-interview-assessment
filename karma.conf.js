module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/typeDir/angularjs/angular-mocks.d.ts',
      'app/script/**/*.ts',
      //'test/unit/controller/MemberLandingControllerTest.ts'
      //'test/unit/service/MemberLandingServiceTest.ts'
      'test/unit/MemberLandingTest.ts'
    ],
    
    // coverage reporter generates the coverage 
    reporters: ['progress', 'coverage'],

  	preprocessors: {
  	  '**/*.ts': ['typescript'],
  	  // source files, that you wanna generate coverage for 
      // do not include tests or libraries 
      // (these files will be instrumented by Istanbul) 
      'test/unit/MemberLandingTest.ts': ['coverage']
    },
    coverageReporter: {
        // specify a common output directory 
        dir: 'test/unit/coverage/',
        reporters: [
          // reporters not supporting the `file` property 
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          // reporters supporting the `file` property, use `subdir` to directly 
          // output them in the `dir` directory 
          { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
          { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
          { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
          { type: 'text', subdir: '.', file: 'text.txt' },
          { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
        ]
      },
    
    typescriptPreprocessor: {
        // options passed to the typescript compiler 
        options: {
          sourceMap: true, // (optional) Generates corresponding .map file. 
          target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5' 
          //module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd' 
          noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type. 
          //noResolve: true, // (optional) Skip resolution and preprocessing. 
          //removeComments: true // (optional) Do not emit comments to output. 
        },
        //transforming the filenames 
        //transformPath: function(path) {
        //  return path.replace(/\.ts$/, '.js');
        //}
    }
  });
};