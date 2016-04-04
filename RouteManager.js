//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
var RouteManager = (function () {
    "use strict";

    // Instance stores a reference to the Singleton
    var route_manager_instance;

    function route_manager_init(app) {
        // Private variables
        var _appContainer = app.AppContainer();
        var _elementFactory = app.ElementFactory();

        var _loadAppHeaderBoundFx;
        var _loadAppLeftFrameBoundFx;
        var _loadAppCenterFrameBoundFx;
        var _loadAppRightFrameBoundFx;
        var _loadAppFooterBoundFx;

        // Private methods
        function _loadAppHeader(elementName) {

            return new Promise(function (resolve, reject) {
                _elementFactory.createElement(elementName).then(function (element) {
                    _appContainer.setAppHeaderContents(element);

                    resolve(element);
                }, function (error) {
                    reject(error);
                });
            });
        }

        function _loadAppLeftFrame(elementName) {

            return new Promise(function (resolve, reject) {
                _elementFactory.createElement(elementName).then(function (element) {
                    _appContainer.setAppLeftFrameContents(element);

                    resolve(element);
                }, function (error) {
                    reject(error);
                });
            });
        }

        function _loadAppCenterFrame(elementName) {

            return new Promise(function (resolve, reject) {
                _elementFactory.createElement(elementName).then(function (element) {
                    _appContainer.setAppCenterFrameContents(element);

                    resolve(element);
                }, function (error) {
                    reject(error);
                });
            });
        }

        function _loadAppRightFrame(elementName) {

            return new Promise(function (resolve, reject) {
                _elementFactory.createElement(elementName).then(function (element) {
                    _appContainer.setAppRightFrameContents(element);

                    resolve(element);
                }, function (error) {
                    reject(error);
                });
            });
        }

        function _loadAppFooter(elementName) {

            return new Promise(function (resolve, reject) {
                _elementFactory.createElement(elementName).then(function (element) {
                    _appContainer.setAppFooterContents(element);

                    resolve(element);
                }, function (error) {
                    reject(error);
                });
            });
        }


        return {
            // Public variables
            registerRoute: page,

            // Public methods 

            loadAppHeader: function (elementName) {
                if (_loadAppHeaderBoundFx)
                    return _loadAppHeaderBoundFx(elementName);
                else {
                    _loadAppHeaderBoundFx = _loadAppHeader.bind(app);
                    return _loadAppHeaderBoundFx(elementName);
                }
            },

            loadAppLeftFrame: function (elementName) {
                if (_loadAppLeftFrameBoundFx)
                    return _loadAppLeftFrameBoundFx(elementName);
                else {
                    _loadAppLeftFrameBoundFx = _loadAppLeftFrame.bind(app);
                    return _loadAppLeftFrameBoundFx(elementName);
                }
            },

            loadAppCenterFrame: function (elementName) {

                if (_loadAppCenterFrameBoundFx)
                    return _loadAppCenterFrameBoundFx(elementName);
                else {
                    _loadAppCenterFrameBoundFx = _loadAppCenterFrame.bind(app);
                    return _loadAppCenterFrameBoundFx(elementName);
                }
            },

            loadAppRightFrame: function (elementName) {
                if (_loadAppRightFrameBoundFx)
                    return _loadAppRightFrameBoundFx(elementName);
                else {
                    _loadAppRightFrameBoundFx = _loadAppRightFrame.bind(app);
                    return _loadAppRightFrameBoundFx(elementName);
                }
            },

            loadAppFooter: function (elementName) {
                if (_loadAppFooterBoundFx)
                    return _loadAppFooterBoundFx(elementName);
                else {
                    _loadAppFooterBoundFx = _loadAppFooter.bind(app);
                    return _loadAppFooterBoundFx(elementName);
                }
            }

        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't  
        getInstance: function (app) {
            if (!route_manager_instance)
                route_manager_instance = route_manager_init(app);

            return route_manager_instance;
        }

    }
}());