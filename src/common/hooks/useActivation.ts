import { useState } from 'react'

export const useActivation = (initialState: boolean = false) => {
  const [isActivated, setIsActivated] = useState(initialState)

  const toggleActivated = () => {
    setIsActivated((prev) => !prev)
  }

  return { isActivated, toggleActivated }
}
