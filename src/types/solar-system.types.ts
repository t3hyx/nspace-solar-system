import type * as THREE from 'three'

export interface ISolarSystemConfig {
  cameraPosition: THREE.Vector3
  fov: number
  near: number
  far: number
  backgroundColor: number
  lightColor: number
  lightIntensity: number
  ambientLightColor: number
  ambientLightIntensity: number
}

export interface ISolarSystemState {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  objects: THREE.Object3D[]
  animationFrameId: number
}

export interface IStarsBackgroundConfig {
  color: number
  count: number
  size: number
  sizeAttenuation: boolean
}
