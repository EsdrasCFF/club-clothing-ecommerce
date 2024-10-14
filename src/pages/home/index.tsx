import { LoadingGlobal } from '@/components/loading-global'
import { useAppSelector } from '@/hooks/redux.hooks'

import { CategoriesArea } from '../../components/categories-area'

export default function Home() {
  const { isLoading } = useAppSelector((rootReducer) => rootReducer.userReducer)

  if (isLoading) {
    return <LoadingGlobal />
  }

  return (
    <div className="h-full w-full py-3">
      <CategoriesArea />
    </div>
  )
}
