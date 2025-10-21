import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1)
const geometry_two = new THREE.BoxGeometry(3,2,3)
const material = new THREE.MeshBasicMaterial({color: 0x503091});
const cube = new THREE.Mesh(geometry, material)
const platform = new THREE.Mesh(geometry_two, material);
scene.add(cube, platform);
scene.background = new THREE.Color(0xffffff)
scene.backgroundBlurriness = 1

camera.position.z = 5;
platform.position.y -= 4;
const light = new THREE.DirectionalLight(0xf5f5f5, 1);
scene.add( light.cube );

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

document.body.addEventListener('keydown', e =>{
    if (e.key === 'w' || e.key === 'ArrowUp') {
        camera.position.z -= 0.02;
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        camera.position.z += 0.02;
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        camera.position.x += 0.02;
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        camera.position.x -= 0.02;
    }

})

