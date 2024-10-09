import { Loader2 } from 'lucide-react'

export function LoadingGlobal() {
  return (
    <main className="flex h-full w-full items-center justify-center px-5">
      <Loader2 className="animate-spin" />
    </main>
  )
}
