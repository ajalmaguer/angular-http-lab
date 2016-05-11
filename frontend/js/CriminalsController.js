(function() {
  "use strict";

  angular
    .module('CriminalsApp')
    .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ["$http"];

  function CriminalsController($http){
    var vm = this

    vm.all = []
    vm.newCriminal = {}

    vm.addCriminal = addCriminal
    vm.removeCriminal = removeCriminal
    vm.changeStatus = changeStatus

    $http
      .get("http://localhost:3000/criminals")
      .then(function (response) {
        vm.all = response.data.criminals
      }, function (err) {
        console.log(err)
      })

    function addCriminal() {
      $http
        .post(
          "http://localhost:3000/criminals",
          vm.newCriminal
        ).then(function (response) {
          vm.all.push(vm.newCriminal)
          vm.newCriminal = {}
        }, function (err) {
          console.log(err)
        })
    }

    function removeCriminal(criminal) {
      var id = criminal._id
      console.log(id)
      $http
        .delete("http://localhost:3000/criminals/"+id)
        .then(function (response) {
          var index = vm.all.indexOf(criminal)
          vm.all.splice(index, 1)
        }, function (err) {
          console.log(err)
        })
    }

    function changeStatus(criminal) {
      if (criminal.status === "unknown") {
        criminal.status = "alive"
      } else if (criminal.status === "alive") {
        criminal.status = "dead"
      } else if (criminal.status === "dead") {
        criminal.status = "unknown"
      }



    }


  }
})();
