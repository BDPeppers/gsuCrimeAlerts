var map; //basemap
var view; //2D Map
var scene; //3D Map


//2D Map
require([
  "esri/Map",
  "esri/views/MapView"
], function (Map, MapView) {
  map = new Map({
    basemap: "streets-navigation-vector"
  });
  view = new MapView({
    container: "2Div",
    map: map,
    center: [-84.3853, 33.7531],
    zoom: 40
  });
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