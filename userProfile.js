'use strict'

{
    let pro = {
        templateUrl: `pfp.html`,
        controller: function(){
            let vm = this;

            // vm.name = "Jango Fett";
            // vm.contact = "dontloseyourhead@geonosis.com";
            // vm.bio = "Hi there! I'm Jango Fett, the most underrated AND overrated character in the entire universe. They only featured me a few times in the movies before they killed off my character in the most anticlimactic way possible.. but hey, at least I managed to walk away with a pretty sweet video game on the Gamecube!";
            
            vm.user = userService.getUser();
        }
    }

    pro.$inject = ["userService"];
    angular
        .module("profile")
        .component("pro", pro);
}