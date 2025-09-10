import { cubeGroup } from "./gameObjects.js";
import { camera, renderer } from "./gameCore.js";
import { addScore, freezeTime } from "./gameLogic.js";
import { playSound } from "./audio.js";

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function setupControls() {
  renderer.domElement.addEventListener("click", onClick);
}

function onClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cubeGroup.children);

  if (intersects.length > 0) {
    const cube = intersects[0].object;
    const type = cube.userData.type;

    switch (type) {
      case "green":
        cubeGroup.remove(cube);
        addScore(2);
        playSound("green");
        break;
      case "black":
        cubeGroup.remove(cube);
        addScore(-1);
        playSound("black");
        break;
      case "blue":
        cubeGroup.remove(cube);
        freezeTime(3000);
        playSound("blue");
        break;
      case "red":
        explodeCube(cube);
        addScore(10);
        playSound("red");
        break;
    }
  }
}

function explodeCube(cube) {
  const radius = 2;
  const toRemove = [];
  cubeGroup.children.forEach(c => {
    if (cube.position.distanceTo(c.position) <= radius) {
      toRemove.push(c);
    }
  });
  toRemove.forEach(c => cubeGroup.remove(c));
}
