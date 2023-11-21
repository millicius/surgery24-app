import { getXataClient } from "@/src/xata"
const xata = getXataClient()

const DataList = async () => {
    const data = await xata.db.Operacijos.getMany()
    //console.log(data)
  return (
    <div>
      <div className="grid grid-cols-2 my-4 font-bold text-zinc-900 border-y py-1">
        <div>Diagnozė</div>
        <div>Operacija</div>
      </div>
        {data.map((o, index) => (
          <div className="grid grid-cols-2" key={index}>
            <div className="mb-3 text-sm text-neutral-800">{o.diagnoze}{o.planas === true ? <span className="text-green-500 pl-2">planas</span> : ""}{o.ekstra === true ? <span className="text-red-500 pl-2">ekstra</span> : ""}{o.protezas === true ? <span className="text-blue-500 pl-2">protezas</span> : ""}</div>
            <div className="text-sm text-zinc-800">{o.operacija}</div>
          </div>

        ))}
    </div>
  )
}

export default DataList