var app = angular.module('resumeApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/homeTemplate.html'
	})
	.when('/Resume', {
		templateUrl: '/resumeTemplate.html'
	})
	.when('/Contact', {
		templateUrl: '/contactTemplate.html'
	})
	.when('/CVResume', {
		templateUrl: '/cvResumeTemplate.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});