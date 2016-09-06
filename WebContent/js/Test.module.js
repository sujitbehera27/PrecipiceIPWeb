/**
 * @param {type} angular
 * @returns {angular.module}
 * @author 
 * @since 6/27/2016
 */

(function () {
    'use strict';

    angular
        .module('app.TestModule', [])
        .config(config)
        .run(runBlock);

        /* @ngInject */
        function config() {
            // Your code here
        }

        /* @ngInject */
        function runBlock() {
            // Your code here
        }
})();
