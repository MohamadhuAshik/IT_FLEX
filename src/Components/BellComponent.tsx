import type { FC } from "react"


type content ={
  content:string
}

const BellComponent:FC<content> = ({content}) => {
  return (
    <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-700 bg-purple-100 rounded-full shadow-sm">
        🔔 {content}
      </div>
  )
}

export default BellComponent