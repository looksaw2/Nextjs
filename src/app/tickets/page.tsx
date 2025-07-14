"use client"
import Link from "next/link"
import { initialTickets } from "../../data"
import { ticketPath } from "@/paths"
import {TICKET_ICONS} from "@/features/ticket/constraints"
import { Ticket } from "@/features/ticket/types"
import { Suspense, useEffect, useState } from "react"
import { getTickets } from "@/features/ticket/queries/get-tickets"
import { Heading } from "@/components/heading"
import { TicketItem } from "@/features/ticket/components/ticket-item"
const TicketsPage = () => {
    const [tickets ,setTickets] = useState<Ticket[]>([])
    useEffect(() => {
        const fetchTickets = async () => {
            const result = await getTickets()
            setTickets(result)
        }
        fetchTickets()
    },[])
    return(
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Tickets" description="All your tickets is here" />
            <Suspense>
            <div className="flex-1 flex flex-col items-center gap-y-4"> 
            {tickets.map((ticket) => (
                <TicketItem  key={ticket.id} ticket={ticket} />
            ))}
            </div>
            </Suspense>
        </div>
    )
}


export default TicketsPage