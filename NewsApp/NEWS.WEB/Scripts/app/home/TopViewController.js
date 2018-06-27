app.controller("TopView", ($scope, $http) => {
    $http.get("/Home/TopViewPartial")
        .then((res) => {
            $scope.item = res.data;
        })
})