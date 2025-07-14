import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ticketPath } from "@/paths"
import Link from "next/link"
import { TICKET_ICONS } from "../constraints"
import { Ticket } from "../types"
import { LucideSquareArrowOutUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
type TicketProps = {
    ticket : Ticket;
    isDetail ?: boolean;
}

const TicketItem = ({ticket,isDetail} : TicketProps) => {
    const defaultButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
        </Button>
    )
    return(
        <div className={clsx("w-full flex gap-x-1",{
            "max-w-[580px]" : isDetail,
            "max-w-[480px]" : !isDetail,
        })}>
            <Card key={ticket.id} className="w-full">
                <CardHeader>
                 <CardTitle className="flex gap-x-2">
                    <span>{TICKET_ICONS[ticket.status]}</span>
                    <span className="truncate">{ticket.title}</span>
                 </CardTitle>
                </CardHeader>
                <CardContent>
                 <h2 className="line-clamp-3 whitespace-break-spaces">{ticket.content}</h2>
                </CardContent>
                </Card>
                {isDetail ? null :(
                <div className="flex flex-col gap-y-1">
                    {defaultButton}
                </div>
                )}
        </div>
    )
}


export {TicketItem}