import { useAuth, useUser } from '@clerk/react'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { syncUser } from '../lib/api'

const useUserSync = () => {
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  const {
    mutate: syncUserMutation,
    isPending,
    isSuccess
  } = useMutation({ mutationFn: syncUser })

  useEffect(() => {
    const email = user?.primaryEmailAddress?.emailAddress
    const name = user?.fullName || user?.firstName || 'User'
    const imageUrl = user?.imageUrl || 'https://example.com'

    if (isSignedIn && user?.id && email && !isPending && !isSuccess) {
      syncUserMutation({
        email: email,
        name: name,
        imageUrl: imageUrl
      })
    }
  }, [isSignedIn, user, isPending, isSuccess, syncUserMutation])

  return {
    isSynced: isSuccess
  }
}
export default useUserSync
