import { useEffect, useState } from 'react'
import localforage from 'localforage'

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const getLocalStorage = async () => {
      const theme = await localforage.getItem('theme')

      if (!theme) {
        setIsDark(false)
        return
      }

      setIsDark(true)
    }

    getLocalStorage()
  }, [])

  const handleChangeTheme = () => {
    setIsDark(!isDark)
    localforage.setItem('theme', !isDark)
  }

  return {
    handleChangeTheme,
    isDark,
  }
}
