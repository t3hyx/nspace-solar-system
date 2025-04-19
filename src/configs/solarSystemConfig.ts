import type { ISolarSystemConfig } from '@/types/solar-system.types'
import { colors } from '@/configs/colorConfig'
import * as THREE from 'three'

export const solarSystemConfig: ISolarSystemConfig = {
  fov: 75,
  near: 0.1,
  far: 1000,
  lightIntensity: 3,
  ambientLightIntensity: 1,
  cameraPosition: new THREE.Vector3(
    0, // x
    20, // y
    40, // z
  ),
  backgroundColor: colors.pureBlack,
  lightColor: colors.pureWhite,
  ambientLightColor: colors.pureWhite,
}
