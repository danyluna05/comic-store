app.controller('comicController', function($scope, $rootScope, $http,
		comicsResource) {
	$rootScope.isLoggin = false;
	$rootScope.user = {};
	$scope.isOpen = false;
	$scope.comics = comicsResource.get();
	$scope.comicOpen = {};
	$scope.myStar = "";
	$scope.reviewNew = {};

	$scope.stars = [ 1, 2, 3, 4, 5];

	$scope.setSort = function(sortType) {
		$scope.isOpen = false;
		$scope.sort = {};
		if (sortType == 0) {
			$scope.sort = {};
		}
		$scope.validateSideBarSort(sortType);
		$scope.validateSortGender(sortType);
		$scope.validateSortEdition(sortType);
		$scope.validateStateSort(sortType);

	}

	$scope.validateSideBarSort = function(sortType) {
		if (sortType == 1) {
			$scope.sort = {
				"qualification" : "5"
			};
		} else if (sortType == 2) {
			$scope.sort = {
				"popular" : "true"
			};
		} else if (sortType == 3) {
			$scope.sort = {

			};
		} else if (sortType == 4) {
			$scope.sort = {
				"isSearch" : "true"
			};
		}
	}

	$scope.validateSortGender = function(sortType) {
		if (sortType == 5) {
			$scope.sort = {
				"gender" : "fantasy"
			};
		} else if (sortType == 6) {
			$scope.sort = {
				"gender" : "super heroe"
			};
		} else if (sortType == 7) {
			$scope.sort = {
				"gender" : "science fiction"
			};
		}
	}

	$scope.validateSortEdition = function(sortType) {
		if (sortType == 8) {
			$scope.sort = {
				"edition" : "1"
			};
		} else if (sortType == 9) {
			$scope.sort = {
				"edition" : "3"
			};
		} else if (sortType == 10) {
			$scope.sort = {
				"edition" : "5"
			};
		}
	}

	$scope.validateStateSort = function(sortType) {
		if (sortType == 11) {
			$scope.sort = {
				"state" : "new"
			};
		} else if (sortType == 12) {
			$scope.sort = {
				"state" : "old"
			};
		}
	}

	$scope.$watch('searchKeyword', function() {
		$scope.sort = $scope.searchKeyword;
	});

	$scope.openComic = function(comic) {
		$scope.isOpen = true;
		$scope.comicOpen = comic;
	}

	$scope.saveReview = function() {
		$scope.reviewNew.createdOn = Date.now();
		$scope.reviewNew.author = $rootScope.user.email;
		$scope.comicOpen.reviews.push($scope.reviewNew);
		$scope.comicOpen.qualification=$scope.returnQualification($scope.comicOpen.reviews);
		$scope.reviewNew = {};

	}

	$scope.returnQualification = function(reviews) {
		if (reviews.length > 0) {
			var sum = 0;
			for (var _i = 0; _i < reviews.length; _i++) {
				sum = sum + reviews[_i].stars;
			}

			return sum / reviews.length;
		}else{
			return 0;
		}
	}

});