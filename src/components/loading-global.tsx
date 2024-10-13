import { Loader } from 'lucide-react'

interface LoadingProps {
  message?: string
}

export function LoadingGlobal({ message }: LoadingProps) {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-4 px-5">
      {message && <p className="w-96 text-base font-medium text-gray4">{message}</p>}
      <Loader className="animate-spin" size={30} />
    </main>
  )
}
