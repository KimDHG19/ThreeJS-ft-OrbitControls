import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
let camera, scene, renderer, controls;
let geometry, material, mesh;

init();
animate();
function init() {

	// renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
	document.body.appendChild( renderer.domElement );

	// scene
	scene = new THREE.Scene();

	// camera
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 1, 2, 1 );

	// controls
	controls = new OrbitControls( camera, renderer.domElement );

	let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	let material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	// geometry
	geometry = new THREE.SphereGeometry(0.3, 5.0, 5.5);

	// material
	material = new THREE.MeshNormalMaterial({
		color: 0x00ffff,
		flatShading: true,
		transparent: true,
		opacity: 0.7,
	});

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

}

function animate( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
