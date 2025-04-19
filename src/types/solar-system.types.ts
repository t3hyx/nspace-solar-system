import type * as THREE from 'three'

export interface ISolarSystemConfig {
  fov: number
  near: number
  far: number
  cameraPosition: THREE.Vector3
  backgroundColor: number
  lightColor: number
  lightIntensity: number
  ambientLightColor: number
}

export interface ISolarSystemState {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  objects: THREE.Object3D[]
  animationFrameId: number
}
