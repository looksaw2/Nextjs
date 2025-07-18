import { ticketsPath } from "@/paths";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return(
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <p className="text-3xl font-bold tracking-tight">Home Page</p>
        <p className="text-sm text-muted-foreground">Your home to start</p>
      </div> 
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">Go to tickets</Link>
      </div>
    </div>
  )
}


export default HomePage