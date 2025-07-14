import { initialTickets } from "@/data"
import { resolve } from "path"
import { Ticket } from "../types"

export const getTicket = async (ticketId : string) : Promise<Ticket | null> => {
    //await new Promise((resolve) => setTimeout(resolve,1000))
    const maybeTicket = initialTickets.find((ticket) => (ticket.id === ticketId))

    return new Promise((resolve) => {
        return resolve(maybeTicket ||  null)
    })
} 