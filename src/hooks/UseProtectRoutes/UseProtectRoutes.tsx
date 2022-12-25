import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

const useProtectRoutes = (routes: string[]) => {
  const isAuhtenticated = useSelector((state: RootState) => state.authStore.isAuthenticated)
  const location = window.location.pathname
  
  useEffect(() => {
    const thisIsProtected = routes.includes(location)

    if(thisIsProtected && !isAuhtenticated) {
      window.location.replace('/')
    }
    
  }, [isAuhtenticated, location, routes])
}

export default useProtectRoutes