'use strict'
{
    function userService() {
        let user = {
            name: "Jang",
            contact: "bountyhunter@geonosis.com",
            bio: "I'm deaaaaaaaadddddddd"
        }
        const getUser = function () {
            return user;
        };

        const setUser = function (newUser) {
            user = newUser;
        }
        return{
            getUser,
            setUser
        }
    }

    angular
        .module("profile")
        .factory("userService", userService);
}