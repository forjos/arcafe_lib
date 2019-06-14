// Three.js - Load .OBJ and .MTL file
// from https://threejsfundamentals.org/threejs/threejs-load-obj-materials.html

  'use strict';

/* global THREE */

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
  
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(10, 10, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.autoRotate = true;
  controls.target.set(0, 0, 0);
  controls.minDistance = 10;
  controls.maxDistance = 250;
  controls.minPolarAngle = - 5;
  controls.maxPolarAngle = 1.5;
  controls.update();
  
  
  const scene = new THREE.Scene();
  
 

  

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 1, 2);
    scene.add(light);
    scene.add(light.target);
  }

  {
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('https://forjos.github.io/arcafe_lib/model/BunWithCottageCheese/BunWithCottageCheese.mtl', null, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load('https://forjos.github.io/arcafe_lib/model/BunWithCottageCheese/BunWithCottageCheese.obj', (event) => {
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
    
    scene.rotation.y += 0.003;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
