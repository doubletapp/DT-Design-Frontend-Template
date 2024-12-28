import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from 'constants/queryKeys';
import { useUserStore } from 'stores/userStore'


const useHeader = () => {
  const user= useUserStore(state => state.user)

  const { isPending: isUserPending } = useQuery({
    queryKey: [QueryKeys.USER]
  })

  return {user, isUserPending}
}

export default useHeader