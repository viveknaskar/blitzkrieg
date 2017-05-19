/// <reference path="angular.min.js" />

var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {

    var employees = [
        { name: "Peter", dateOfBirth: new Date("November 14, 1987"), designation: "Software Engineer", gender: "Male", salary: 400000 },
        { name: "Mark", dateOfBirth: new Date("June 24, 1977"), designation: "Software Developer", gender: "Male", salary: 56800 },
        { name: "Emma", dateOfBirth: new Date("August 27, 1985"), designation: "Network Engineer", gender: "Female", salary: 20000 },
        { name: "Gary", dateOfBirth: new Date("January 14, 1998"), designation: "DBA", gender: "Male", salary: 565000 },
        { name: "Lekshmi", dateOfBirth: new Date("July 04, 1989"), designation: "CEO", gender: "Female", salary: 98450 },
        { name: "Timlin", dateOfBirth: new Date("May 19, 1989"), designation: "Software Engineer", gender: "Female", salary: 3400000 },
        { name: "Larry", dateOfBirth: new Date("December 29, 1993"), designation: "Software Engineer", gender: "Male", salary: 200030 }

    ];

    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortTable = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
    }

});