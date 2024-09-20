import { authAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { createContext, useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEYS } from '@/config/keys'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.SHELTER)
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const loginAction = (data, navigateCallback) => {
    authAPI
      .login(data)
      .then((response) => {
        setUser(() => {
          localStorage.setItem(LOCAL_STORAGE_KEYS.SHELTER, JSON.stringify(response.shelter))
          navigateCallback({ pathname: '/' })
          toast({ title: '¡Sesión iniciada!' })
          return response.shelter
        })
      })
      .catch((err) => toast({ title: err.message }))
  }

  const logOut = async (navigateCallback) => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.SHELTER)
    await authAPI.logout()
    setUser(null)
    navigateCallback({ pathname: '/' })
  }

  return <AuthContext.Provider value={{ user, loginAction, logOut }}>{children}</AuthContext.Provider>
}

export default AuthProvider
