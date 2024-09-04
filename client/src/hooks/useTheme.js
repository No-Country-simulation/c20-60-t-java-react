import { useEffect } from 'react'
import { useState } from 'react'

const LOCAL_STORAGE_KEY = 'pawsome-friends-dark-mode'

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) === 'true')

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(isDarkMode)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')

    setIsDarkMode((prevState) => {
      if (!isDarkMode) {
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY)
      }
      return !prevState
    })
  }

  return {
    isDarkMode,
    toggleTheme
  }
}
