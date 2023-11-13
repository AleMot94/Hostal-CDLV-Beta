interface ListMenuInter {
  text: string
  path: string
}

type ListMenuType = ListMenuInter[]

export const listMenu: ListMenuType = [
  {
    text: 'Inicio',
    path: '#'
  },
  {
    text: 'Habitaciones',
    path: '#'
  },
  {
    text: 'Galeria',
    path: '#'
  },
  {
    text: 'Ubicación',
    path: '#'
  },
  {
    text: 'Contacto',
    path: '#'
  }
]
