var carApp = angular.module('DemoApp', ["ngRoute"]);

carApp.controller('CarController', ["CarFactory", "$http", function (CarFactory, $http) {
        var self = this;
        self.array = [];
        var cars = function () {
            console.log("api");
            $http({
                method: 'GET',
                url: 'api/car'
            }).then(function successCallback(response) {
                console.log(response.data);
                self.array = response;
            }, function errorCallback(response) {
                console.log("error");
            });
        };
        cars();
        console.log(self.array);

        var self = this;
        self.cars = cars;
        self.title = "Cars Demo App"
        self.predicate = "year"
        self.reverse = false;
        self.nextId = 5;

    }]);

carApp.factory('CarFactory', ["$http", function ($http) {
        var temp = this;
        var getCars = function () {
            console.log("api");
            $http({
                method: 'GET',
                url: 'api/car'
            }).then(function successCallback(response) {
                console.log(response.data);
                self.array = response;
            }, function errorCallback(response) {
                console.log("error");
            });
        };
        var deleteCar = function (id) {};//Delete Car on the Server
        var addCar = function (newcar) {};//Add Car on the Server
        var editCar = function (car) {}//Edit Car on the Server;
        return {
            getCars: getCars,
            deleteCar: deleteCar,
            addCar: addCar,
            editCar: editCar
        };
    }]);

carApp.controller('AddCarController', ["CarFactory", "$routeParams", function (CarFactory, $routeParams) {

        var addCar = this;

        addCar.id = $routeParams;

        addCar.cars = CarFactory.getCars();
        console.log(addCar.cars);

        addCar.add = function (car) {
            CarFactory.addEditCar(car);
        }

        addCar.edit = function (editCar) {
            CarFactory.addEditCar(editCar);
        }

    }]);


carApp.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: 'allCars.html',
                controller: "CarController as ctrl"
            })
            .when("/addCar", {
                templateUrl: "addCar.html",
                controller: "AddCarController as Add"
            })
            .when("/editCar/:id", {
                templateUrl: "editCar.html",
                controller: "AddCarController as Add"

            })
});
