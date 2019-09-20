
function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html'
  })
  .state('perso', {
    url: '/perso/{param}',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'vues/perso.html'
  })
  ;
 
};

export default HomeConfig;