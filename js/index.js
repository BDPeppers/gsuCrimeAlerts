var view;
require([
    "esri/Map",
    "esri/views/MapView",
    "dojo/domReady!"
], function (Map, MapView) {

    var map = new Map({
        basemap: "streets-navigation-vector"
    });
    view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-84.3853, 33.7531],
        zoom: 30
    });

});




