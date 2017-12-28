var appFlickrAPI = angular.module('formFlickr', []);
appFlickrAPI.controller('FlickrController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
// appFlickrAPI.controller('FlickrController', ['$scope', '$http', function ($scope, $http) {	
	// $scope.showSelectedImage = false;
	$http.get("releasenote.json").success(function(data) {
		$scope.notes = data.releasenote;
	});

	$http.get("todos.json").success(function(data) {
		$scope.todos = data.todos;
	});
	
	$scope.commonArea = 'main';
	
	$scope.master = {};
	$scope.images = {};

	$scope.openNewTab = function(selectedImageURL) {
	$scope.url = selectedImageURL;

	// $scope.redirectToGoogle = function(){
		// // $window.open(selectedImageURL, '_blank');
		// $scope.url = selectedImageURL;
	// };	
	document.getElementById("link2image").style.color = "red";
	window.open(selectedImageURL, '_blank');
	// return true;
	};

	// $("#link2Image").click(function(e){
		// e.preventDefault();//this will prevent the link trying to navigate to another page
		// var href = $(this).attr("href");//get the href so we can navigate later
		// $window.location = href;
	// });

	// $("#link2Image").on('click', function(event) {
		// event.preventDefault();
		// window.location = "http://www.google.com";
	// });
	 
	$scope.search = function (searchCriteria) {
	if (searchCriteria.tags === undefined || searchCriteria.tags.trim() === "") {
	  searchCriteria.tags = null;
	  $scope.master = angular.copy(searchCriteria);
	  $scope.form.$submitted = true;
	  return false;
	}
	//$scope.form.tags.$setUntouched();
	$scope.form.tags.$setValidity();

	// URL for Flickr API
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne";

	flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
	  + "&tags=" + encodeURIComponent($scope.searchCriteria.tags)
	  + "&tagmode=" + $scope.searchCriteria.mode
	  + "&format=json";

	// AJAX query to Flickr API
	$http.jsonp(flickrAPI)
	  .success(function (data, status, headers, config) {
	  $scope.images = data;
	  $scope.imagesStatus = status;

	})

	// handling error - if any
	  .error(function (data, status, headers, config) {
	  $scope.images = data;
	  $scope.imagesStatus = status;
	});

	// post-validation rest
	$scope.form.tags.$setValidity();
	};

	// reset form to initial state
	$scope.resetForm = function (form) {
		$scope.form.tags.$setValidity();
		$scope.images = {};
		$scope.searchCriteria = {};
		// $scope.showSelectedImage = false;
		$scope.commonArea='main';
	};

	// select an image when click on one
	$scope.clickAnImage = function (i) {
		 // $scope.showSelectedImage = true;
		 $scope.title = i.title;
		 $scope.author = i.author;
		 $scope.tags = i.tags;
		 $scope.image = i.link;
		 $scope.commonArea = 'selectedImage';
	};
		
	// click commonArea: releaseNote or toDo list
	$scope.selectCommonArea = function (c) {
		$scope.commonArea = c;
	}
}]);