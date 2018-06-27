app.controller("Category", function ($scope, $http) {
    $scope.isParent = true;
    $http.get("/Home/LoadCategories")
        .then((res) => {
            $scope.categories = res.data;
            for (var i = 0; i < $scope.categories.length; i++) {
                var data = $scope.categories[i].CategoryId;
                $http({
                    url: "/Home/LoadCategoryAndChild/",
                    method: "GET",
                    params: { categoryId: data }
                }).then((res) => {
                    $scope.category = res.data.cateVM;
                    $scope.article = res.data.article1[0];
                })
            }
        })
})
app.controller("CategoryAndChild", function ($scope, $http) {
    var data = 1;
    $http({
        url: "/Home/LoadCategoryAndChild/",
        method: "GET",
        params: { categoryId: data }
    }).then((res) => {
        $scope.category = res.data.cateVM;
        $scope.article = res.data.article1[0];
    })
})