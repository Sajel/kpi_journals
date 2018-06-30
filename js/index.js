angular.module('sortApp', [])
    .controller('mainController', function ($scope, $http) {
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchJournal = '';     // set the default search/filter term

        $http.get('./internationalJournals.json')
            .then(function (response) {
                $scope.internationalJournals = response.data;
            }, function (error) {
                console.log(error);
            });
    });