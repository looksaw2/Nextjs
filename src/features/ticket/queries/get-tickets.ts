import { initialTickets } from "@/data"
import { resolve } from "path"
import { Ticket } from "../types"


export const getTickets = async () : Promise<Ticket[]> => {
    await new Promise((resolve) => setTimeout(resolve , 2000))
    return new Promise((resolve) => (
        resolve(initialTickets)
    ))
}


