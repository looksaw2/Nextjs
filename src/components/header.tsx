import { HomePath, ticketsPath } from "@/paths"
import { Button, buttonVariants } from "./ui/button"
import { LucideKanban } from "lucide-react"
import Link from "next/link"

const Header = () => {
    return(
         <nav className="supports-backdrop-blur:bg-background/60
                        fixed left-0 right-0 top-0 z-20
                        border-b background/95 backdrop-blur
                        w-full flex py-2.5 px-5 justify-between">
          <Button asChild variant="ghost">
          <Link href={HomePath()}>
            <LucideKanban />
            <h2 className="ml-2 text-lg font-semibold">TicketsBounty</h2>
          </Link>
          </Button>
          <Link href={ticketsPath()} 
                className={buttonVariants({variant : "default"})}>
            Tickets
          </Link>
        </nav>
    )
}


export {Header}