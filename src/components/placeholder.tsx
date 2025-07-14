import {LucideIcon, LucideOctagonAlert} from "lucide-react"
import { cloneElement } from "react"

type PlaceholderProps = {
    label : string
    icon ?: React.ReactElement<React.ComponentProps<LucideIcon>>,
    button ?: React.ReactNode
}

const Placeholder = (
    {
        label,
        icon = <LucideOctagonAlert />,
        button = null
    } 
    
    : PlaceholderProps) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon,{
                className: "w-16 h-16",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {button}
        </div>
    )
}

export {Placeholder}