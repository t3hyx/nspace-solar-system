import type { ISolarSystemConfig, ISolarSystemState } from '@/types/solar-system.types'
import { createStarsBackground } from '@/utils/createStarsBackground'
import * as THREE from 'three'

export class SolarSystemService {
  private config: ISolarSystemConfig
  private state: ISolarSystemState | null = null

  constructor(container: HTMLElement, config: ISolarSystemConfig) {
    this.config = config
    this.state = null
  }

  private createCamera(container: HTMLElement): THREE.PerspectiveCamera {
    const aspect = container.clientWidth / container.clientHeight
    const camera = new THREE.PerspectiveCamera(
      this.config.fov,
      this.config.near,
      this.config.far,
      aspect,
    )
    camera.position.copy(this.config.cameraPosition)
    camera.lookAt(0, 0, 0)

    return camera
  }

  private createScene(): THREE.Scene {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(this.config.backgroundColor)
    // Fill background with random-positioned stars
    scene.add(createStarsBackground())

    return scene
  }
}
