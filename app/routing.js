'use strict';

/**
 * @ngdoc overview
 * @name cardspace
 * @description
 * # cardspace
 *
 * Main module of the application.
 *
 * controllers
 */
angular
  .module('csApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'cs.directives',
    'cs.home',
    'cs.design',
    'cs.sidebarProfile',
    'cs.sidebarDesign',
    'cs.profile',
    'cs.maps'
  ])

.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    localStorage.clear();

    localStorage.setItem('users', JSON.stringify([
      {'name':'John Smith', 'email':'johnsmith@gmail.com', "password":"jsmith12345678"},
      {'name':'James Smith', 'email':'jamessmith@gmail.com', "password":"jsmith87654321"},
      {'name':'Joe Bloggs', 'email':'joebloggs@gmail.com', "password":"jbloggs12345678"},
      {'name':'Jane Doe', 'email':'janedoe@gmail.com', "password":"jdoe12345678"},
      {'name':'J Do', 'email':'t', "password":"t"}
    ]));

    $urlRouterProvider.otherwise('/');

    $stateProvider

    //
    // Home route
    //

    .state('/', {
      url: '/',
        views: {
          'header': {
              templateUrl: './header-index/' +
                'header-index.tpl.html'
          },
          'main': {
              templateUrl: './home/' +
                'home.tpl.html',
              controller: 'HomeCtrl'
          }
        }
    })

    //
    // Design route
    //

    .state('design', {
      url: '/design',
        views: {
          'header': {
              templateUrl: './header-main/' +
                'header-main.tpl.html',
              controller: 'HomeCtrl'
          },
          'sidebar': {
              templateUrl: './sidebar-design/' +
                'sidebar-design.tpl.html',
              controller: 'SidebarDesignCtrl'
          },
          'main': {
              templateUrl: './design/' +
                'design.tpl.html',
              controller: 'DesignCtrl'
          }
        }
    })

    //
    // Maps route
    //

    .state('maps', {
      url: '/maps',
        views: {
          'header': {
              templateUrl: './header-main/' +
                'header-main.tpl.html',
              controller: 'HomeCtrl'
          },
          'sidebar': {
              templateUrl: './sidebar-profile/' +
                'sidebar-profile.tpl.html',
              controller: 'SidebarProfileCtrl'
          },
          'main': {
              templateUrl: './maps/' +
                'maps.tpl.html',
              controller: 'MapsCtrl'
          }
        }
    })

    //
    // Profile route
    //

    .state('profile', {
      url: '/profile',
        views: {
          'header': {
              templateUrl: './header-main/' +
                'header-main.tpl.html',
              controller: 'HomeCtrl'
          },
          'sidebar': {
              templateUrl: './sidebar-profile/' +
                'sidebar-profile.tpl.html',
              controller: 'SidebarProfileCtrl'
          },
          'main': {
              templateUrl: './profile/' +
                'profile.tpl.html',
              controller: 'ProfileCtrl'
          }
        }
    });

    //$locationProvider.html5Mode(true);
  }
]);
