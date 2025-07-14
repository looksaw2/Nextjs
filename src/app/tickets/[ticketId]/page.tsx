import { Placeholder } from "@/components/placeholder"
import { Button } from "@/components/ui/button"
import { initialTickets } from "@/data"
import { TicketItem } from "@/features/ticket/components/ticket-item"
import { getTicket } from "@/features/ticket/queries/get-ticket"
import { ticketsPath } from "@/paths"
import Link from "next/link"


type TicketPage = {
    params : {
        ticketId : string
    }
}


const TicketPage = async ({params} : TicketPage) => {
    const ticketId  = params.ticketId; 
    const ticket =  await getTicket(ticketId)
    if(!ticket){
        return(
            <Placeholder 
                label="ticket not find"
                button = {
                    <Button asChild variant="outline">
                        <Link href={ticketsPath()}>Go to the tickets</Link>
                    </Button>
                }
                />
        )
    }
    return(
        <div className="flex justify-center">
            <TicketItem ticket={ticket} isDetail />
        </div>
    )
}


export default TicketPage