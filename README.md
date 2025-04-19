# Vue 3 + TypeScript + Three.js + Vite

## Building a Solar System Scene with TypeScript and Three.js

### (_Learning Path_)

- [ ] Building a 3D scene
  - [ ] Create needed TS types
  - [ ] Create needed elements config file
  - [ ] Create a global container to encapsulate elements
    - [ ] --> container's state
    - [ ] --> container's config
  - [ ] Create Vue component to handle **LifeCycles**
  - [ ] Design background and stars _programmatically_
  - [ ] Add **ambient** light
  - [ ] Add spherical celestial bodies to the scene
    - [ ] Building Sun together with **Sun's** light
    - [ ] Mercury
    - [ ] Venus
    - [ ] Earth
      - [ ] _edge-case_: Moon's **orbit**
    - [ ] Mars
    - [ ] Jupiter
    - [ ] Saturn
      - [ ] _edge-case_ : Saturn's **rings**
    - [ ] Uranus
    - [ ] Neptune
    - [ ] Pluto
  - [ ] Building orbit lines for each planets (except moon ?)
- [ ] Animate the scene
  - [ ] Adding an helper to see axis and grids (from Three.js)
  - [ ] Create self-rotation animation for each celestial
  - [ ] Create orbital-rotation animation for each planet
    - [ ] _edge-case_ : Sun doesn't have **orbit** !
    - [ ] _edge-case_ : Moon's **orbit**
