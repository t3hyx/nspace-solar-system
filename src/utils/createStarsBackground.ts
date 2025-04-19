import { starsBackgroundConfig } from '@/configs/solarSystemConfig'
import * as THREE from 'three'

export function createStarsBackground() {
  const config = starsBackgroundConfig
  const starsGeometry = new THREE.BufferGeometry()
  const starsMaterial = new THREE.PointsMaterial({
    color: config.color,
    size: config.size,
    sizeAttenuation: config.sizeAttenuation,
  })

  const starsVertices = []
  for (let i = 0; i < config.count; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    starsVertices.push(x, y, z)
  }

  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))
  const stars = new THREE.Points(starsGeometry, starsMaterial)

  return stars
}
