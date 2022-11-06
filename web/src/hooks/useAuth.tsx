import { useContext } from "react"
import { AuthContext, AuthContextProps } from "../contexts/AuthContext"

export function useAuth () {
    const value: AuthContextProps = useContext(AuthContext)
    
    return value
}