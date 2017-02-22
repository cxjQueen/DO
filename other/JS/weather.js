var app = angular.module('App', []);
app.controller('WeatherCtrl', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    $scope.checkCity = function() {
        $http({
            url: 'http://route.showapi.com/9-9',
            params: {
                area: $scope.citys,
                showapi_sign: '85029253e76742c2ba637ce1e1eb46a2',
                showapi_appid: '32305'
            }
        }).success(function(info) {
            console.log(info)
            $scope.wearthers = info.showapi_res_body.dayList;
        });
    };



}]);