

## Design Bullets
** V1
-	AngularJS/Typescript app
-	Bootstrap
-	Questions and Categories will be loaded from JSON
-	Add star rating to question

** V2
-	Backend system to maintain the question list.
-	Generate interview assessment report
-	Calculate the soccer base on the category, e.g. html rating 4.3, css rating 3.8

## Steps to execute the project - local

** For the First time users:
1. Download and Install Nodejs (https://nodejs.org/download/)
2. Download and Install Git (https://git-scm.com/downloads), make sure select GIT bash in Command Prompt Up
3. Download and Install Python 2 (https://www.python.org/downloads/)
4. Run Setup.cmd for the first time

** For Developer
1. Run by "gulp" in Command Prompt Up will enter the development mode
2. Open Browser : localhost:3000

** For Packaging
1. Run by "gulp package", find "interview.war" in "./builds" folder

** For unit test:
1. Complete the operations above.
2. Confirm karma.coonf.js(In the files:[], there are service test path pattern and controller test path pattern, choose which part you need to test).
3. Run by "gulp test", and confirm the result and case quality which be run.



### Project Structure
```
├───interview
│   bower.json
│   gulpfile.config.js
│   gulpfile.js
│   karma.conf.js
│   package.json
│   questions.json
│   pom.xml
│   README.MD
│   setup.cmd		This windows batch file will setup the project, for first time use only
│   tsd.json
├───app
│   ├───asset		Contains the resource to be copied to web content folder directly, e.g. images, html pages and etc
│   │   ├───images
│   │   ├───mock-data
│   │   └───view	Contains the html files, move to other directory if html needs to be minified?
│   ├───config		To be removed??
│   ├───css			Contains the CSS files, which will be concatenated, minified, and copied to  web content folder
│   ├───sass		Contains the SASS files, which will be compiled into css, concatenated, minified, and copied to  web content folder
│   └───script	Contains the TYPESCRIPT files, which will be compiled into css, concatenated, uglified, and copied to  web content folder
└───test			Contains unit test case
    └───unit
        ├───controller
        ├───coverage
        ├───data
        └───service
```


### Gulp Design
```
├───default			Default Gulp job, which enter developing mode
│   ├───clean		Del the builds folder and typescript lib
│   ├───tsd			Generate the typeDir lib (./app/typeDir)
│   ├───build		Build project
│   │   ├───compile-typescript   Compile TYPESCRIPT, concatenate, uglify if non-dev env, output to builds/js
│   │   ├───compile-css					 Compile SASS, concatenate, minify if non-dev env, output to builds/css
│   │   ├───build-bower-js			Concatenate js lib, uglify if non-dev env, output to builds/js
│   │   └───copy-assets				 Copy assets to builds folder
│   ├───watch					Watching the changing, re-compile, update the web content, and refresh the brower
│   └───run						Starts the local server on top of ./builds folder, http://localhost:3000
├───package						Package a deployable war file(builds/interview.war), will do the minify and uglify jobs
│   ├───clean
│   ├───tsd
│   ├───build
│   │   ├───compile-typescript
│   │   ├───compile-css
│   │   ├───build-bower-js
│   │   └───copy-assets
│   └───zip						Create dist at builds/interview.war
│───test						  Run test once and exit(karma)
└───tdd								Watch for file changes and re-run tests on each change(karma, NOT tested)
```
