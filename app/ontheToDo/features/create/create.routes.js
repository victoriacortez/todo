angular
    .module('ontheToDo.create') // No array, as we are "extending" the module
    .config(ontheToDoConfig);

function ontheToDoConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'create', // name of the route
        url: '/create', // url endpoint for the route
        templateUrl: '/ontheToDo/features/create/create.html', // The url to the view template
        controller: 'CreateCtrl', // The name of the controller to use for this route
        controllerAs: 'CreateVM' // The namespace for the view to access the view model
    })
}
