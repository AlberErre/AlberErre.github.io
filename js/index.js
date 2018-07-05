var Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    pink:0xF5986E,
    brown:0x59332e,
    brownDark:0x23190f,
    blue:0x68c3c0,
    grey: 0x3a3a3a,
    yellow: 0xecd900,
    offWhite: 0xf0f0f0,
    brightBlue: 0x007fe3,
    black: 0x000000,
    coolyellow: 0xFFBF00,
};

var scene,
    camera, fieldOfView, aspectRatio, nearObject, farObject,
    renderer, container;

var HEIGHT, WIDTH;

function createScene() {

  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  scene = new THREE.Scene();
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearObject = 100;
  farObject = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearObject,
    farObject
    );
  scene.fog = new THREE.Fog(0xf7d9aa, 100,950);
  camera.position.x = 0;
  camera.position.z = 200;
  camera.position.y = 100;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', handleWindowResize, false);
}

// HANDLE SCREEN EVENTS

function handleWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}


// LIGHTS

var ambientLight, hemisphereLight, shadowLight;

function createLights() {

  hemisphereLight = new THREE.HemisphereLight(0xc82626,0x000000, .9);

  ambientLight = new THREE.AmbientLight(0xf8d17f, .75);

  shadowLight = new THREE.DirectionalLight(0xffffff, .9);
  shadowLight.position.set(150, 350, 350);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  shadowLight.shadow.mapSize.width = 2048;
  shadowLight.shadow.mapSize.height = 2048;

  scene.add(hemisphereLight);
  scene.add(shadowLight);
  scene.add(ambientLight);
}

var MagicCube = function(){
  this.mesh = new THREE.Object3D();
  this.mesh.name = "MagicCube";

  var geomBody = new THREE.BoxGeometry(75,75,75,1,1,1);
  var matBody = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});

  var geomBody = new THREE.Mesh(geomBody, matBody);
  geomBody.castShadow = true;
  geomBody.receiveShadow = true;
  this.mesh.add(geomBody);

  var geomREye = new THREE.BoxGeometry(5,5,5,1,1,1);
  var matREye = new THREE.MeshPhongMaterial({color:Colors.black, shading:THREE.FlatShading});
  var rEye = new THREE.Mesh(geomREye, matREye);
  rEye.position.set(25,2,35);
  rEye.castShadow = true;
  rEye.receiveShadow = true;
  this.mesh.add(rEye);

  var geomLEye = new THREE.BoxGeometry(5,5,5,1,1,1);
  var matLEye = new THREE.MeshPhongMaterial({color:Colors.black, shading:THREE.FlatShading});
  var lEye = new THREE.Mesh(geomLEye, matLEye);
  lEye.position.set(0,2,35);
  lEye.castShadow = true;
  lEye.receiveShadow = true;
  this.mesh.add(lEye);

  var geomPropeller = new THREE.BoxGeometry(40,50,8,1,1,1);
  var matPropeller = new THREE.MeshPhongMaterial({color:Colors.coolyellow, shading:THREE.FlatShading});
  this.propeller = new THREE.Mesh(geomPropeller, matPropeller);

  this.propeller.castShadow = true;
  this.propeller.receiveShadow = true;

  var geomBlade = new THREE.CylinderGeometry(1,15,80,4,1,false);
  var matBlade = new THREE.MeshPhongMaterial({color:Colors.coolyellow, shading:THREE.FlatShading});
  var blade1 = new THREE.Mesh(geomBlade, matBlade);
  blade1.position.set(-5,0,5);
  blade1.rotation.z = .7;

  blade1.castShadow = true;
  blade1.receiveShadow = true;

  var spinRotate = 360;

  var blade2 = blade1.clone();
  blade2.rotation.x = spinRotate / 2;

  blade2.castShadow = true;
  blade2.receiveShadow = true;

  var blade3 = blade1.clone();
  blade3.rotation.x = spinRotate / 3;

  blade3.castShadow = true;
  blade3.receiveShadow = true;

  var blade4 = blade1.clone();
  blade4.rotation.x = spinRotate / 4;

  blade4.castShadow = true;
  blade4.receiveShadow = true;

  var blade5 = blade1.clone();
  blade5.rotation.x = spinRotate / 5;

  blade5.castShadow = true;
  blade5.receiveShadow = true;

  this.propeller.add(blade1);
  this.propeller.add(blade2);
  this.propeller.add(blade3);
  this.propeller.add(blade4);
  this.propeller.add(blade5);
  this.propeller.position.set(-60,0,0);
  this.mesh.add(this.propeller);

  var frontLegGeom = new THREE.TorusGeometry(15, 3, 16, 50, 3 );

  var frontLegMat = new THREE.MeshPhongMaterial({color:Colors.black, shading:THREE.FlatShading});
  var frontLeg = new THREE.Mesh(frontLegGeom,frontLegMat);
  frontLeg.position.set(25,-50,25);
  frontLeg.rotation.z = -1.5;

  this.mesh.add(frontLeg);

  var backLegGeom = new THREE.TorusGeometry(15, 3, 16, 50, 3 );

  var backLegMat = new THREE.MeshPhongMaterial({color:Colors.black, shading:THREE.FlatShading});
  var backLeg = new THREE.Mesh(backLegGeom,backLegMat);
  backLeg.position.set(-35,-38,-20);
  backLeg.rotation.z = -2.9;

  this.mesh.add(backLeg);

  var suspensionGeom = new THREE.BoxGeometry(4,20,4);
  suspensionGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0,10,0))
  var suspensionMat = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
  var suspension = new THREE.Mesh(suspensionGeom,suspensionMat);
  suspension.position.set(-35,-5,0);
  suspension.rotation.z = -.3;
  this.mesh.add(suspension);

  this.mesh.castShadow = true;
  this.mesh.receiveShadow = true;

};

Sky = function(){
  this.mesh = new THREE.Object3D();
  this.nClouds = 20;
  this.clouds = [];
  var stepAngle = Math.PI*2 / this.nClouds;
  for(var i=0; i<this.nClouds; i++){
    var c = new Cloud();
    this.clouds.push(c);
    var a = stepAngle*i;
    var h = 750 + Math.random()*200;
    c.mesh.position.y = Math.sin(a)*h;
    c.mesh.position.x = Math.cos(a)*h;
    c.mesh.position.z = -400-Math.random()*400;
    c.mesh.rotation.z = a + Math.PI/2;
    var s = 1+Math.random()*2;
    c.mesh.scale.set(s,s,s);
    this.mesh.add(c.mesh);
  }
}

Earth = function(){
  var geom = new THREE.CylinderGeometry(600,600,800,40,10);
  geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
  geom.mergeVertices();
  var l = geom.vertices.length;

  this.ground = [];

  for (var i=0;i<l;i++){
    var v = geom.vertices[i];
    this.ground.push({y:v.y,
                     x:v.x,
                     z:v.z,
                     ang:Math.random()*Math.PI*2,
                     amp:5 + Math.random()*15,
                     speed:0.016 + Math.random()*0.032
                    });
  };
  var mat = new THREE.MeshPhongMaterial({
    color:Colors.grey,
    shading:THREE.FlatShading,

  });

  this.mesh = new THREE.Mesh(geom, mat);
  this.mesh.receiveShadow = true;

}

Earth.prototype.moveGround = function (){
  var verts = this.mesh.geometry.vertices;
  var l = verts.length;
  for (var i=0; i<l; i++){
    var v = verts[i];
    var vprops = this.ground[i];
    v.x =  vprops.x + Math.cos(vprops.ang)*vprops.amp;
    v.y = vprops.y + Math.sin(vprops.ang)*vprops.amp;
    vprops.ang += vprops.speed;
  }
  this.mesh.geometry.verticesNeedUpdate=true;
  earth.mesh.rotation.z += .005;
}

Cloud = function(){
  this.mesh = new THREE.Object3D();
  this.mesh.name = "cloud";
  var geom = new THREE.IcosahedronGeometry(20, 0 );
  var mat = new THREE.MeshPhongMaterial({
    color:Colors.white,
    shading:THREE.FlatShading,
  });

  var nBlocs = 3+Math.floor(Math.random()*3);
  for (var i=0; i<nBlocs; i++ ){
    var m = new THREE.Mesh(geom.clone(), mat);
    m.position.x = i*15;
    m.position.y = Math.random()*10;
    m.position.z = Math.random()*10;
    m.rotation.z = Math.random()*Math.PI*2;
    m.rotation.y = Math.random()*Math.PI*2;
    var s = .1 + Math.random()*.9;
    m.scale.set(s,s,s);
    m.castShadow = true;
    m.receiveShadow = true;
    this.mesh.add(m);
  }
}

var earth;
var flyingCube;

function createFlyingCube(){
  flyingCube = new MagicCube();
  flyingCube.mesh.scale.set(.25,.25,.25);
  flyingCube.mesh.position.y = 100;
  scene.add(flyingCube.mesh);
}

function createEarth(){
  earth = new Earth();
  earth.mesh.position.y = -600;
  scene.add(earth.mesh);
}

function createSky(){
  sky = new Sky();
  sky.mesh.position.y = -600;
  scene.add(sky.mesh);
}

function loop(){
  updateFlyingCube();
  updateCameraFov();
  earth.moveGround();
  sky.mesh.rotation.z += .01;
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

function updateFlyingCube(){
  var targetY = normalize(mousePos.y,-.75,.75,25, 175);
  var targetX = normalize(mousePos.x,-.75,.75,-100, 100);
  flyingCube.mesh.position.y += (targetY-flyingCube.mesh.position.y)*0.1;
  flyingCube.mesh.rotation.z = (targetY-flyingCube.mesh.position.y)*0.0128;
  flyingCube.mesh.rotation.x = (flyingCube.mesh.position.y-targetY)*0.0064;
  flyingCube.propeller.rotation.x += 0.25;
}

function updateCameraFov(){
  camera.fov = normalize(mousePos.x,-1,1,40, 80);
  camera.updateProjectionMatrix();
}

function normalize(v,vmin,vmax,tmin, tmax){
  var nv = Math.max(Math.min(v,vmax), vmin);
  var dv = vmax-vmin;
  var pc = (nv-vmin)/dv;
  var dt = tmax-tmin;
  var tv = tmin + (pc*dt);
  return tv;
}

function init(event){
  document.addEventListener('mousemove', handleMouseMove, false);
  createScene();
  createLights();
  createFlyingCube();
  createEarth();
  createSky();
  loop();
}

// HANDLE MOUSE EVENTS

var mousePos = { x: 0, y: 0 };

function handleMouseMove(event) {
  var tx = -1 + (event.clientX / WIDTH)*2;
  var ty = 1 - (event.clientY / HEIGHT)*2;
  mousePos = {x:tx, y:ty};
}

window.addEventListener('load', init, false);
