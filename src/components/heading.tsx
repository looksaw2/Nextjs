import { Separator } from "@radix-ui/react-separator"

type HeadingProp = {
    title : string,
    description? : string
}


const Heading = ({title , description} : HeadingProp) => {
    return(
        <>
        <div className="px-8">
            <p className="text-3xl font-bold tracking-tight">{title}</p>
            {description && (<p className="text-sm text-muted-foreground">
                {description}
            </p>)}
        </div>
        <Separator />
        </>
    )
}


export {Heading}