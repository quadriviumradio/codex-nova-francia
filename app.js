import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home'
];

window.app = angular.module('codex', requires);

// Permet de récupérer les éléments de state params

app.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

app.filter('majuscule', function() {
    return function(personnage) {         
              return personnage.toUpperCase();
    };
});

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});

app.directive("compPerso", function() {
    return {
        restrict : "E",
        template : "*Presse-papier historique*<br><ul id='regis'><li ng-repeat='nom in $ctrl.tabPerso'>{{nom}}</li></ul><br>"
        //{{$ctrl.affichePerso()}}
    };
});

angular.bootstrap(document.getElementById('codex'), ['codex']);