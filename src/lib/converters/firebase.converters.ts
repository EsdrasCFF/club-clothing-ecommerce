import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore'

import { CategoryProps } from '@/components/categories-area'

export const categoryConverter = {
  toFirestore(category: CategoryProps): DocumentData {
    return { ...category }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): CategoryProps {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products,
    }
  },
}
