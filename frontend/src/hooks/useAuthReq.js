import { SignIn, useAuth } from '@clerk/react'
import { useEffect } from 'react'
import api from '../lib/axios'

let isInterceptorRegistered = false

function useAutReq () {
  const { isSignedIn, getToken, isLoaded } = useAuth()

  useEffect(() => {
    if (isInterceptorRegistered) return
    isInterceptorRegistered = true
    const interceptor = api.interceptors.request.use(async config => {
      if (SignIn) {
        const token = await getToken()
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    })

    return () => {
      api.interceptors.request.eject(interceptor)
      isInterceptorRegistered = false
    }
  }, [isSignedIn, getToken])

  return { isSignedIn, isClerkLoaded: isLoaded }
}

export default useAutReq
