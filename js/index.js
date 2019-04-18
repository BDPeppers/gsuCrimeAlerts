var map; //basemap
var view; //2D Map
var scene; //3D Map


//2D Map
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/symbols/SimpleMarkerSymbol"
], function (Map, MapView, Graphic, Point, SimpleMarkerSymbol) {
  map = new Map({
    basemap: "streets-navigation-vector"
  });
  view = new MapView({
    container: "2Div",
    map: map,
    center: [-84.3853, 33.7531],
    zoom: 12
  });

  var point = new Point({
    longitude: -84.3853,
    latitude: 33.7531
  });
  var markerSymbol = new SimpleMarkerSymbol({
    color: [255, 0, 0],
    outline: {
      color: [255, 255, 255],
      width: 1
    }
  });
  var pointGraphic = new Graphic({
    geometry: point,
    symbol: markerSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate
  });
  var attributes = {
    Name: "I am a point",
    Park: "Griffith Park",
    City: "Los Angeles"
  };

  // Create pop-up template
  var popupTemplate = {
    title: "{Name}",
    content: "I am located in <b>{Park}</b> in the city of <b>{City}</b>."
  };
  view.graphics.add(pointGraphic);

});


//3D Map
require([
  "esri/Map",
  "esri/views/SceneView"
], function (Map, SceneView) {
  map = new Map({
    basemap: "streets-navigation-vector"
  });
  scene = new SceneView({
    container: '3Div', //3D mode is initially set to null
    map: map,
    center: [-84.3853, 33.7531],
    zoom: 30,
    camera: {
      tilt: 30,
      position: {
        x: -84.3853,
        y: 33.7531,
        z: 1000 // meters
      }
    }
  });
});

//View Buutons
var TwoD = document.getElementById('2d');
var ThreeD = document.getElementById('3d');
$('#2d').click(function () {
  switchView($(this));
});
$('#3d').click(function () {
  switchView($(this));
});

var v2D = document.getElementById('2Div');
var v3D = document.getElementById('3Div');

//function switchtes the view between 2D and 3D
function switchView(view) {

  let mode = view.val();
  //if 3D mode is selected
  if (mode == '3D') {
    //show
    $('#3Div').css('display', 'flex');
    $('#3Div').css('height', '80vh');
    //hide
    $('#2Div').css('display', 'hidden');
    $('#2Div').css('height', '0');
    

  }
  //if 2D mode is selected
  if (mode == '2D') {
    //show
    $('#2Div').css('display', 'flex');
    $('#2Div').css('height', '80vh');
    //hide
    $('#3Div').css('display', 'hidden');
    $('#3Div').css('height', '0');
    
  }
}

// //Switching Between Views
// require([
//   "esri/views/MapView",
//   "esri/views/SceneView",
//   "esri/WebMap",
//   "esri/WebScene"
// ], function (MapView, SceneView) {
//   //View Buutons
//   var TwoD = document.getElementById('2d');
//   var ThreeD = document.getElementById('3d');
//   $('#2d').click(function () {
//     switchView($(this));
//   });
//   $('#3d').click(function () {
//     switchView($(this));
//   });

//   //function switchtes the view between 2D and 3D
//   function switchView(view) {

//     let mode = view.val();
//     //if 3D mode is selected
//     if (mode == '3D') {
//       scene.container = 'viewDiv';
//       view.container = '';
//     }
//     //if 2D mode is selected
//     if (mode == '2D') {
//       scene.container = '';
//       view.container = 'viewDiv';
//     }
//   }

// });