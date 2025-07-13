import Link from "next/link"
import { initialTickets } from "../../data"
import { ticketPath } from "@/paths"

const TICKET_ICONS = {
    OPEN : "O",
    DONE : "X",
    IN_PROGRESS : ">",
}

const TicketsPage = () => {
    return(
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <p className="text-3xl font-bold tracking-tight">TicketsPage</p>
                <p className="text-sm text-muted-foreground">all tickets are here</p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-y-4"> 
            {initialTickets.map((ticket) => (
                <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-300 rounded-2xl">
                <div>{TICKET_ICONS[ticket.status]}</div>
                <h2 className="text-lg font-semibold truncate">{ticket.title}</h2>
                <h2 className="text-sm text-slate-400 truncate">{ticket.content}</h2>
                <Link href={ticketPath(ticket.id)}
                      className="text-sm underline">
                    View
                </Link>
                </div>
            ))}
            </div>
        </div>
    )
}


export default TicketsPage