'use client'

import { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { createNewDocuement } from '@/actions/action'

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleCreateNewDocument = async() => {
    startTransition(async () => {
      const {docId} = await createNewDocuement();
      router.push(`/doc/${docId}`)
    })
    
  }

  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  )
}

export default NewDocumentButton