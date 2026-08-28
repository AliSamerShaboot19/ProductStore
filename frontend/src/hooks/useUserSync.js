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
    if (isSignedIn && user && !isPending && !isSuccess) {
      syncUserMutation({
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName || user.firstName,
        imageUrl: user.imageUrl
      })
    }
  }, [isPending, isSignedIn, user, syncUserMutation, isSuccess])
  return {
    isSynced: isSuccess
  }
}
export default useUserSync
