import { AlertCircleIcon } from "lucide-react"


interface Props {
    title:string,
    description:string,

}

const ErrorState = ({title,description}:Props) => {
  return (
    <div className="px-4 py-8 flex flex-1 justify-center items-center inset-0">
       <div className="bg-auto shadow-sm p-6 gap-y-6 flex flex-col items-center justify-center">
         <AlertCircleIcon className="size-4 text-red-500"/>
       <div className="flex flex-col text-center">
         <h6 className="font-medium text-lg">{title}</h6>
        <p className="text-sm">{description}</p>
       </div>
       </div>
    </div>
  )
}

export default ErrorState