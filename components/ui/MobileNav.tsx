'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const MobileNav = ( {user}: MobileNavProps ) => {
  return (
    <section>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Are you sure?
                </SheetTitle>
                <SheetDescription>
                    This action cannot be undone. 
                    This will be permanently delete tour account
                     and remove data from our servers.
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </section>

  )
}

export default MobileNav