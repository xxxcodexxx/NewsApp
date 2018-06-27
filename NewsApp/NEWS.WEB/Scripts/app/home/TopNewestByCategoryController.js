app.controller("TopNewestByCategory", ($scope, $http) => {
    var data = "sukien";
    $http({
        url: "/Home/TopNewestByCategoryPartial/",
        method: "GET",
        params: { categoryname: data }
    }).then((res) => {
            $scope.listnewsItem = res.data.listnewsItem;
            $scope.newsItem = res.data.newsItem;
        })
})