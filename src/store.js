import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: [
    '#9f9f9f',
    '#01cc10',
    '#10202f',
    '#10C2c0',
    '#726DE8',
    '#EF674E',
    '#020201'
  ],
  decals: ['react', 'three2', 'pmndrs'],
  selectedColor: '#EFBD4E',
  selectedDecal: 'three2'
})

export { state }
