import { AlertCircleIcon } from "lucide-react"


interface Props {
    title:string,
    description:string,

}

const ErrorState = ({title,description}:Props) => {
  return (
    <div>
        <AlertCircleIcon/>
        <h6>{title}</h6>
        <h6>{description}</h6>
    </div>
  )
}

export default ErrorState