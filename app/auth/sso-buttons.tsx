'use client'

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export function SSOButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" onClick={() => {}}>
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button variant="outline" onClick={() => {}}>
        <Icons.facebook className="mr-2 h-4 w-4" />
        Facebook
      </Button>
    </div>
  )
}

