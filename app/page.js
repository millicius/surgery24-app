import DataList from '@/components/DataList'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
    <main className="">
    <div>
    <div className="flex items-center justify-between">
        <h3 className="mb-1">2024 m. operacijos</h3>
        <div className="bg-blue-500 px-4 py-1 rounded-md hover:bg-blue-400  cursor-pointer duration-300 text-white">
          <Link href='/create'>Create</Link>
        </div>
    </div>
    </div>
    </main>
    <DataList />
</div>
  )
}
