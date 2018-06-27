app.controller("TopNewest", ($scope, $http) => {
    $scope.Newests = null;
    $scope.newsItem = null;
    $http.get("/Home/TopNewestPartial")
        .then(function (res) {
            $scope.Newests = res.data.listnewsItem;
            $scope.newsItem = res.data.newsItem;
        })
})