var app = angular
.module("persModul", [])
.controller("persController", function ($scope, $http) {
/*başka sayfadaki veriyi okuma için kullanıyoruz.*/
$http.get("il-ilce.json")
.then(function (gelen) {
/*gelen değişkeni içindeki veriye data özelliği ile ulaşılır*/
/*$scope.personeller özelliğine gelen veriyi yerleştirip modeli oluşturmuş olduk. */
$scope.personeller = gelen.data;
});


});
