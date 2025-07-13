import { initialTickets } from "@/data"


type TicketPage = {
    params : {
        ticketId : string
    }
}


const TicketPage = ({params} : TicketPage) => {
    const tickets = initialTickets.find((ticket) => (ticket.id === params.ticketId))
    return(
        <div>
            <p className="text-lg">{tickets?.title}</p>
            <p className="text-sm">{tickets?.content}</p>
        </div>
    )
}


export default TicketPage