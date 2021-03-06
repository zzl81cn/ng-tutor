angular.module("tutor", []);

angular.module("tutor").controller("BindingCtrl", ["$scope", function($scope) {
    $scope.items = [{
        title: "Simple Binding",
        url: "partials/binding/simple.html"
    }, {
        title: "Array",
        url: "partials/binding/array.html"
    }, {
        title: "Watch",
        url: "partials/binding/watch.html"
    }, {
        title: "List",
        url: "partials/binding/list.html"
    }, {
        title: "Style",
        url: "partials/binding/style.html"
    }, {
        title: "If",
        url: "partials/binding/if.html"
    }, {
        title: "Switch",
        url: "partials/binding/switch.html"
    }, {
        title: "Region",
        url: "partials/binding/region.html"
    }, {
        title: "Employee",
        url: "partials/binding/employee.html"
    }, {
        title: "Wave",
        url: "partials/binding/wave.html"
    }, {
        title: "Sort",
        url: "partials/binding/sort.html"
    }];

    $scope.selectedItem = $scope.items[0];

    $scope.change = function(item) {
        $scope.selectedItem = item;
    };
}]);

angular.module("tutor").controller("ScopeCtrl", ["$scope", function($scope) {
    $scope.items = [{
        title: "extend",
        url: "partials/scope/extend.html"
    }, {
        title: "assign",
        url: "partials/scope/assign.html"
    }, {
        title: "alias",
        url: "partials/scope/alias.html"
    }, {
        title: "new scope",
        url: "partials/scope/newscope.html"
    }, {
        title: "isolate",
        url: "partials/scope/isolate.html"
    }, {
        title: "hierarchy",
        url: "partials/scope/hierarchy.html"
    }, {
        title: "event bus",
        url: "partials/scope/eventbus.html"
    }];

    $scope.selectedItem = $scope.items[0];

    $scope.change = function(item) {
        $scope.selectedItem = item;
    };
}]);