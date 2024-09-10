import { authAPI } from '@/api'
import { toast } from '@/components/ui/use-toast'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const loginAction = (data) => {
    authAPI.login(data).then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          setUser(res.user)
        })
        toast({ title: 'Logged in!' })
        navigate({ pathname: '/' })
      } else {
        toast({ title: 'Invalid credentials' })
      }
    })
  }

  const logOut = async () => {
    setUser(null)
    await authAPI.logout()
    navigate('/')
  }

  return <AuthContext.Provider value={{ user, loginAction, logOut }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
  const values = useContext(AuthContext)

  if (values === undefined) {
    throw new Error('Ensure using useAuth within AuthProvider')
  }

  return values
}
