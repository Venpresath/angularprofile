'use strict'
{
    let edit = {
        templateUrl: `edit.html`,
        controller: function(userService){
            let vm = this;

            // vm.name = "Jango Fett";
            // vm.contact = "dontloseyourhead@geonosis.com";
            // vm.bio = "Hi there! I'm Jango Fett, the most underrated AND overrated character in the entire Universe. They only featured me a few times in the movies before they killed off my character in the most anticlimactic way possible, but at least I managed to walk away with a pretty sweet video game for the Gamecube!";
            vm.user = userService.getUser();
            vm.update = function(){
                userService.setUser(vm.user)
            }
        }
    }

    edit.$inject = ["userService"];

    angular
    .module("profile")
    .component("edit", edit);
}