import { FormBox } from "@/components/Form"
import Link from "next/link"
const Create = () => {
  return (
    <div>
      <div className="mb-5">
        <Link className="text-red-400" href='/'>home</Link>
      </div>
      <h1 className="text-lg font-medium">Operacija</h1>
      <FormBox />
    </div>
  )
}

export default Create