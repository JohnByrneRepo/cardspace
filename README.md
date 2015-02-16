# cardspace

Cardspace is an AngularJS driven social business card site.  A fundamental design goal has been recommended by Google team as best practise:

  - A code structure organised around view/feature, not MVC

> The main aim of the application is to
> construct a codebase that is maintainable,
> well documented, and that adheres to modern
> JavaScript engineering principles.  


### Angular naming conventions and folder structure

Directory structure:
```
├── public/
|   |
│   ├── _components
|   |   |
│   │   ├── directives
|   |   |   |   |
│   │   │   |   ├── csTable
|   |   |   |       |
│   │   │   |       ├── csTable.directive.js
│   │   │   |       ├── csTable.tpl.html
|   |   |   |
│   │   │   ├── directives.module.js
|   |   |
│   │   ├── filters
|   |   |   |
│   │   │   ├── filters.module.js
│   │   │   ├── csFilters.js
|   |   |
│   │   ├── services
|   |       |
│   │       ├── actionDispatcher.service.js
│   │       ├── mocks.service.js
│   │       ├── services.module.js
│   │       ├── utils.service.js
|   |
│   ├── main
|   |   |
│   │   ├── main-footer
|   |   |   |
│   │   │   ├── bookingFooter.tpl.html
│   │   │   ├── bookingFooter.scss
|   |   |
│   │   ├── main-login
|   |   |   |
│   │   │   ├── mainLogin.ctrl.js
│   │   │   ├── mainLogin.tpl.html
│   │   │   ├── mainLogin.scss
│   │   │   ├── mainLogin.spec.js
|   |   |
│   │   ├── main-profile
|   |   |   |
│   │   │   ├── mainProfile.ctrl.js
│   │   │   ├── mainProfile.tpl.html
│   │   │   ├── mainProfile.scss
│   │   │   ├── mainProfile.spec.js
|   |   |
|   |   |── main.module.js
|   |   |── main.service.js
|   |
|   |
```

All folders are organised by feature instead of MVC, as recommended by the Angular team:

https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/mobilebasic?pli=1

This concept is further elaborated here:

https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make


### Cardspace Guidelines

Bear in mind that small examples e.g. the Yeoman angular generator are organised by layer
to enforce the idea of separation of Angular concern, not separation of functionality
concern!

Module files define the folder and subfolder module dependencies, and are then
injected into the main app object.  Not all features require a controller, and
therefore only require a template and scss not a test specification.  

The exception to organisation by feature is the _components folder, which features
shared components and does in fact adhere to an MVC style organisation by layer
rather than by feature.  Anything in this folder should be able to be reused,
therefore all the directives among other things are in this folder.

The rules for naming are outlined below, this is purley convention in this context 


### Naming conventions


*Module names*

Modules are namespaced within the context of parent module:

```
├── cs.components.services
    |
    ├── components.services.mocks
    ├── components.services.utils
    ├── components.services.actionDispatcher
```

```
├── cs.booking
    |
    ├── booking.service
    ├── booking.bookingForm.ctrl
    ├── booking.bookingItinerary.ctrl   
    ├── booking.bookingItinerary.service   
```


*Angular app declaration*

```
angular.module("csCardspace", [
    'ui.bootstrap',
    'ui.router',
    'cs.components.services',
    'cs.components.filters',
    'cs.components.directives',
    'cs.booking'
])
```


*Angular objects*

Pascal case is used throughout e.g. 'MainProfileCtrl'


*Files and folders*

All files are named with camel case.  2 extensions are used for services and filters if there are multiple similar files or if they form part of a subfolder.

Templates have 2 extensions to deonte their type for added readability and to adhere to the standard closing file extension: 'tpl' and 'html', and sass files have 'style' amd 'sass' for consistency to match all other feature based assets except for parent level files.  

In the _components folder, all resources are organised and named by layer in an MVC style:

```
├── public/
|   |
│   ├── _components
|       |
│       ├── directives
|       |   |   |
│       │   |   ├── csTable
|       |   |       |
│       │   |       ├── csTable.directive.js
│       │   |       ├── csTable.tpl.html
|       |   |
│       │   ├── directives.module.js
|       | 
│       ├── filters
|       |   |
│       │   ├── filters.module.js
│       │   ├── csFilters.js
|       |
│       ├── services
|           |
│           ├── actionDispatcher.service.js
│           ├── mocks.service.js
│           ├── services.module.js
│           ├── utils.service.js
|   
```

In a feature folder e.g. 'booking' all resources are named and organised by global or sub-level significance.

```
├── public/
|   |
│   ├── main
|   |   |
│   │   ├── main-footer
|   |   |   |
│   │   │   ├── bookingFooter.tpl.html
│   │   │   ├── bookingFooter.scss
|   |   |
│   │   ├── main-login
|   |   |   |
│   │   │   ├── mainLogin.ctrl.js
│   │   │   ├── mainLogin.tpl.html
│   │   │   ├── mainLogin.scss
│   │   │   ├── mainLogin.spec.js
|   |   |
│   │   ├── main-profile
|   |   |   |
│   │   │   ├── mainProfile.ctrl.js
│   │   │   ├── mainProfile.tpl.html
│   │   │   ├── mainProfile.scss
│   │   │   ├── mainProfile.spec.js
|   |   |
|   |   |── main.module.js
|   |   |── main.service.js
|    
|    
```


### Directives vs Controllers

Directives should be reusable components, not application specific, e.g. data table with 
a sorting function.  The application uses Bootstrap components in favor of directives
where possible.

When A directive is used, the contoller is specified in the template not the state provider.


### Controller communication

Controllers communicate by means of publishing to the root scope via the action dispatcher
service.  Any subscribing controller can watch the root scope for the relevant data.


### Grunt

*Code Style and SASS*

Typing 'grunt' performs continuous linting, JSCS (JavaScript code style), and SASS compilation.

*Building minified and concatenated code*

Typing 'grunt build' minifies and concatenates all bower components and 1st party source.


### Tech

Cardspace uses a number of open source projects to work properly:

* *AngularJS* - HTML enhanced for web apps!
* *Twitter Bootstrap* - great UI boilerplate for modern web apps
* *node.js* - evented I/O for the backend
* *Express* - fast node.js network app framework [@tjholowaychuk]
* *Grunt* - the task manager and build system
* *SASS* - css preprocessor
* *Protractor* - functional testing
* *Jasmine and Karma* - unit testing


### Installation

You need Grunt and Bower installed globally:

```sh
$ npm i -g grunt-cli
$ npm i -g bower
```

Clone the repository:
```sh
$ git clone https://github.com/JohnByrneRepo/cardspace cardspace
$ cd cardspace
$ npm install
$ bower install
```

Install Ruby and Compass for Sass
https://www.ruby-lang.org

*Note* You will need to add these into your path.

### Development

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app/app
```

Second Tab:
```sh
$ grunt
```

(optional) Third:
```sh
$ karma start
```

### Todo's

 - Write Tests
 - Refine modular structure
 - Optimise SASS with variables and mixins

License
----

Open source ©2015


**Commercial Software, All rights reserved**

[john byrne]:http://johnbyrne.info/
[node.js]:http://nodejs.org
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[express]:http://expressjs.com
[AngularJS]:http://angularjs.org
[Grunt]:http://gruntjs.com


Comments:

*http://johnbyrne.info/*
html5css3@outlook.com

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

Change directory to a suitable document folder in command prompt on PC or the
command line/terminal otherwise.

Clone the repository.

Change directory into the 'cs' folder that is created.

Type 'npm install' in the same folder - this creates the folder 'cs/node_modules'
and installs all the node modules specified in 'package.json' into it.

Type 'bower install' in the same folder - this creates the folder 'cs/app/bower_components'
and installs all the 3rd party (vendor) JavaScript libraries specified in 'bower.json' into it.


Starting the app and the node express simulation
================================================

Since express version 4, the express generator node packaged module needs to be
installed before express can be run.

npm install -g express-generator

To run the app, type 'node app/server.js' from within the root folder, then navigate
to 'localhost:8080' in your browser.

Troubleshooting 'express not found': Type 'npm install express' - bower may not
install this currently.


Running grunt
=============

Make a change in 'app/_styles/*.scss' and save the file - grunt watch will
compile sass to css, lint, and run tests.


Running unit tests
==================

Type 'grunt test' to run all unit tests.


Viewing the existing development build online
=============================================

TBA
