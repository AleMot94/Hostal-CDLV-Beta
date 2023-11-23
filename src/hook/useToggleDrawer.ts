import React from 'react'
import { useEffect, useCallback, useRef, useState } from 'react'

interface ToggleDrawerHook {
  state: boolean
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export const useToggleDrawer = (): ToggleDrawerHook => {
  const [state, setState] = useState(false)
  const scrollY = useRef<number>(0)

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      if (!open) {
        scrollY.current = window.scrollY
      }

      setState(open)
    },
    []
  )

  useEffect(() => {
    if (!state) {
      window.scrollTo(0, scrollY.current)
    }
  }, [state])

  return { state, toggleDrawer }
}
