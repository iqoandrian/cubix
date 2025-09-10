export let cubeGroup;

export function createRubikCube(size = 3) {
  cubeGroup = new THREE.Group();
  const spacing = 1.2;
  const offset = (size - 1) * spacing / 2;
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        const material = new THREE.MeshStandardMaterial({ color: 0x22c55e });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(i * spacing - offset, j * spacing - offset, k * spacing - offset);

        const rand = Math.random();
        if (rand < 0.1) {
          cube.material.color.set(0xef4444);
          cube.userData.type = "red";
        } else if (rand < 0.2) {
          cube.material.color.set(0x3b82f6);
          cube.userData.type = "blue";
        } else if (rand < 0.3) {
          cube.material.color.set(0x111827);
          cube.userData.type = "black";
        } else {
          cube.userData.type = "green";
        }

        cubeGroup.add(cube);
      }
    }
  }
}
