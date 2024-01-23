export interface Element {
  id: string;
  imageSrc: string;
  time: string;
  title: string;
  des: string;
  stack: string;
}

export interface Education {
  id: string;
  imageSrc: string;
  time: string;
  title: string;
  field: string;
}

export interface Nodes {
  Cube008: THREE.Mesh;
  Cube008_1: THREE.Mesh;
  Cube008_2: THREE.Mesh;
  keyboard: THREE.Mesh;
  Cube002: THREE.Mesh;
  Cube002_1: THREE.Mesh;
  touchbar: THREE.Mesh;
}

export interface Materials {
  aluminium: THREE.Material;
  "matte.001": THREE.Material;
  "screen.001": THREE.Material;
  keys: THREE.Material;
  trackpad: THREE.Material;
  touchbar: THREE.Material;
  // Add other materials as needed
}
