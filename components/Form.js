import { postData } from "@/actions/postData"

export const FormBox = () => {
    return (
    <>
        <form className="mt-6" action={postData}>
            <div className="flex flex-col gap-3 mb-4">
                <input className="border text-sm p-1" type="text" name="diagnoze" placeholder="Diagnozė" />
                <input className="border text-sm p-1" type="text" name="operacija" placeholder="Operacija" />
            </div>
            

            <div className="bg-zinc-50 flex p-1 gap-5">
                <div className="flex gap-2">
                    <label>Planine</label>
                    <input type="checkbox" name="planas" />
                </div>
                <div className="flex gap-2"> 
                    <label>Ekstra</label>
                    <input type="checkbox" name="ekstra" />
                </div>
                <div className="flex gap-2">
                    <label>Protezas</label>
                    <input type="checkbox" name="protezas" />
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 py-2 px-5 rounded-md text-white mt-4 hover:bg-blue-400 duration-300">Sukurti</button>
            </div>
        </form>
    </>
    )
}