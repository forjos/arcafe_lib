// Three.js - Load .OBJ and .MTL file
// from https://threejsfundamentals.org/threejs/threejs-load-obj-materials.html

  'use strict';

/* global THREE */

function main() {
  const canvas = document.querySelector('#c2');
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
  
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(15, 22, 0);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.autoRotate = true;
  controls.target.set(0, 2, 0);
  controls.minDistance = 10;
  controls.maxDistance = 250;
  controls.minPolarAngle = - 3; // radians
  controls.minPolarAngle = Math.PI/2.9;
controls.maxPolarAngle = Math.PI/2.9; // radians
  controls.enablePan = false;
  controls.enableZoom = false;

  //controls.minAzimuthAngle = - 2; // radians
  //controls.maxAzimuthAngle = 2; // radians
  controls.update();
  
  
  const scene = new THREE.Scene();
  
 

  

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = .8;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, 1.2);
    light.position.set(5, 20, 0);
    scene.add(light);
    scene.add(light.target);
  }

  {
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('https://forjos.github.io/arcafe_lib/model/21.mtl', null, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load('https://forjos.github.io/arcafe_lib/model/21.obj', (event) => {
        const root = event.detail.loaderRootNode;
        scene.add(root);
      });
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    renderer.setClearColor(0x000000, 0);
    
    scene.rotation.y += 0.0015;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();




function cake_model() {

  const canvas = document.querySelector('#cake_model');
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});
  
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(20, 15, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.autoRotate = true;
  controls.target.set(0, 2, 0);
  controls.minDistance = 10;
  controls.maxDistance = 250;
  controls.minPolarAngle = - 3; // radians
  controls.maxPolarAngle = 1.2; // radians
  controls.enablePan = false;
  controls.enableZoom = false;

  //controls.minAzimuthAngle = - 2; // radians
  //controls.maxAzimuthAngle = 2; // radians
  controls.update();
  
  
  const scene = new THREE.Scene();
  
 


  

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1.2;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, 1.2);
    light.position.set(5, 8, 7);
    scene.add(light);
    scene.add(light.target);
  }

  {
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('https://forjos.github.io/arcafe_lib/model/pizza3.mtl', null, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load('https://forjos.github.io/arcafe_lib/model/pizza3.obj', (event) => {
        const root = event.detail.loaderRootNode;
        scene.add(root);
      });
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    renderer.setClearColor(0x000000, 0);
    
    scene.rotation.y += 0.0015;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}


cake_model();


$(document).ready(function() {
    $('.close_box_model').click(function(event){
	$('.box_model').fadeOut('');
});

$('.btn_box_model').click(function(event){
	$('.box_model').fadeIn('');
});
});
