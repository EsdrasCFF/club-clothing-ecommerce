import { collection, getDocs, query, where } from 'firebase/firestore'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CategoryProps } from '@/components/categories-area'
import { CategoryProducts } from '@/components/category-products'
import { LoadingGlobal } from '@/components/loading-global'
import { Title } from '@/components/title'
import { db } from '@/config/db/firebase.config'

export default function CategoryDetailsPage() {
  const { id } = useParams()
  const [category, setCategory] = useState<CategoryProps>()
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'categories'), where('id', '==', id)))

        const category = querySnapshot.docs[0]?.data()

        setCategory(category as CategoryProps)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [id])

  function handleBackClick() {
    navigate(-1)
  }

  if (isLoading) {
    return <LoadingGlobal />
  }

  if (!id || !category) return null

  return (
    <main className="flex h-full w-full flex-col px-5 pb-5">
      <div className="mb-3 mt-5 flex items-center gap-3 leading-none hover:cursor-pointer" onClick={handleBackClick}>
        <ArrowLeft size={22} strokeWidth={3} /> <Title text={`Explorar ${category.name}`} />
      </div>

      <CategoryProducts products={category?.products} />
    </main>
  )
}
