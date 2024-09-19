import { authAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('pawsome-friends-user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const loginAction = async (data) => {
    authAPI
      .login(data)
      .then((response) => {
        setUser(() => {
          localStorage.setItem('pawsome-friends-user', JSON.stringify(response.shelter))
          navigate({ pathname: '/' })
          return response.shelter
        })
      })
      .catch((err) => toast({ title: err.message }))
  }

  const logOut = async () => {
    localStorage.removeItem('pawsome-friends-user')
    await authAPI.logout()
    setUser(null)
    navigate('/')
  }

  return <AuthContext.Provider value={{ user, loginAction, logOut }}>{children}</AuthContext.Provider>
}

export default AuthProvider
