import { useContext } from 'react'

import { LoadingGlobal } from '@/components/loading-global'
import { UserContext } from '@/contexts/user-context'

import { CategoriesArea } from '../../components/categories-area'

export default function Home() {
  const { isLoading } = useContext(UserContext)

  if (isLoading) {
    return <LoadingGlobal />
  }

  return (
    <div className="h-full w-full py-3">
      <CategoriesArea />
    </div>
  )
}
