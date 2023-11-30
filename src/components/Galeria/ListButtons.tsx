import React from 'react'
import Button from '@mui/material/Button/Button'

interface Category {
  categorys: string[]
  filterCategory: (category: string) => void
}

export const ListButtons: React.FC<Category> = ({
  categorys,
  filterCategory
}) => {
  return (
    <ul className='ul-filter'>
      {categorys.map((category) => (
        <li key={category}>
          <Button
            onClick={() => {
              filterCategory(category)
            }}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  )
}
