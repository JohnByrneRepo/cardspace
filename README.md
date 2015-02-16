card space!
===================

Repository for the development of Cardfocus MEAN web app.


Installation requirements for cli tools workflow
================================================

Git (http://git-scm.com/book/en/Getting-Started-Installing-Git)

Homebrew (Mac only) (http://brew.sh/)

Node (http://nodejs.org/download/)

Grunt (http://gruntjs.com/getting-started)

Bower (http://bower.io/#install-bower)

Ruby (https://www.ruby-lang.org/en/installation/)

Compass (http://compass-style.org/install/)


Installation setup (command line)
=================================

Change directory to a suitable document folder in command prompt on PC or the command line/terminal otherwise.

Clone the repository.

Change directory into the 'cs' folder that is created.

Type 'npm install' in the same folder - this creates the folder 'cs/node_modules' and installs all the node modules specified in 'package.json' into it.

Type 'bower install' in the same folder - this creates the folder 'cs/app/bower_components' and installs all the 3rd party (vendor) JavaScript libraries specified in 'bower.json' into it.


Starting the app and the node express simulation
================================================

Since express version 4, the express generator node packaged module needs to be installed before express can be run.

npm install -g express-generator

To run the app, type 'node app/server.js' from within the root folder, then navigate to 'localhost:8080' in your browser.

Troubleshooting 'express not found': Type 'npm install express' - bower may not install this currently.


Running grunt smart
===================

Make a change in 'app/_styles/*.scss' and save the file - grunt watch will compile sass to css, lint, and run tests.


Running unit tests
==================

Type 'grunt test' to run all unit tests.


Viewing the existing development build online
=============================================

Visit http://johnbyrne.info/cardspace/ for the latest dev deployment.
