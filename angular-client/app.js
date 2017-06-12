var blockbusterApp = angular.module('blockbusterApp', [])

blockbusterApp.controller('blockbusterCtrl', function blockbusterCtrl($scope, $http) {
  
  $scope.showFormBool = false;

  $scope.getMovies = function() {
    $http({
      method : 'GET',
      url : '/getMovies'
    })
    .then(function mySuccess(results) {
      console.log(results.data)
      $scope.movies = results.data;
    });
  }

  $scope.showForm = function() {
    $scope.showFormBool = true;
  }

  $scope.addMovie = function() {
    if($scope.title && $scope.rating && $scope.copies) {
      var movie = {
        title : $scope.title,
        IMDB_Rating : $scope.rating,
        numOfCopies : $scope.copies
      }
      
      $http({
        method : 'POST',
        url : '/addMovie',
        data: movie
      })
      .then(function mySuccess(results) {
        $scope.showFormBool = false;
      });
    }
    else {
      window.alert('A FIELD IS EMPTY')
    }
  }

})

