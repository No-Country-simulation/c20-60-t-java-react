import { authAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_KEYS } from '@/config/keys'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.SHELTER)
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const loginAction = async (data) => {
    authAPI
      .login(data)
      .then((response) => {
        setUser(() => {
          localStorage.setItem(LOCAL_STORAGE_KEYS.SHELTER, JSON.stringify(response.shelter))
          navigate({ pathname: '/' })
          toast({ title: 'Logged in!' })
          return response.shelter
        })
      })
      .catch((err) => toast({ title: err.message }))
  }

  const logOut = async () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.SHELTER)
    await authAPI.logout()
    setUser(null)
    navigate('/')
  }

  return <AuthContext.Provider value={{ user, loginAction, logOut }}>{children}</AuthContext.Provider>
}

export default AuthProvider
