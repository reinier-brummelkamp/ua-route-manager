//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
var RouteManager = (function () {
    "use strict";

    // Instance stores a reference to the Singleton
    var route_manager_instance;

    function route_manager_init(appContainer, elementFactory) {
        // Private variables
        var _appContainer = appContainer;
        var _elementFactory = elementFactory;

        // Private methods

        return {
            // Public variables
            pageJs: page,

            // Public methods 
            loadAppHeader: function (elementName) {

                return new Promise(function (resolve, reject) {
                    _elementFactory.createElement(elementName).then(function (element) {
                        _appContainer.setAppHeaderContents(element);

                        resolve(element);
                    }, function (error) {
                        reject(error);
                    });
                });
            },

            loadAppLeftFrame: function (elementName) {

                return new Promise(function (resolve, reject) {
                    _elementFactory.createElement(elementName).then(function (element) {
                        _appContainer.setAppLeftFrameContents(element);

                        resolve(element);
                    }, function (error) {
                        reject(error);
                    });
                });
            },

            loadAppCenterFrame: function (elementName) {

                return new Promise(function (resolve, reject) {
                    _elementFactory.createElement(elementName).then(function (element) {
                        _appContainer.setAppCenterFrameContents(element);

                        resolve(element);
                    }, function (error) {
                        reject(error);
                    });
                });
            },

            loadAppRightFrame: function (elementName) {

                return new Promise(function (resolve, reject) {
                    _elementFactory.createElement(elementName).then(function (element) {
                        _appContainer.setAppRightFrameContents(element);

                        resolve(element);
                    }, function (error) {
                        reject(error);
                    });
                });
            },

            loadAppFooter: function (elementName) {

                return new Promise(function (resolve, reject) {
                    _elementFactory.createElement(elementName).then(function (element) {
                        _appContainer.setAppFooterContents(element);

                        resolve(element);
                    }, function (error) {
                        reject(error);
                    });
                });
            },
            
            registerRoute: function (url, callback) {
                page(url, callback);
            },

            navigateTo: function (url) {
                page(url);
            }

        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't  
        getInstance: function (appContainer, elementFactory) {
            if (!route_manager_instance)
                route_manager_instance = route_manager_init(appContainer, elementFactory);

            return route_manager_instance;
        }

    }
}());