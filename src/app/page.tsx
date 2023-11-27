import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Tagbar from '@/components/Tagbar'
import VideoGrid from '@/components/VideoGrid'

export default function Home() {
  return (
    <div className='grid grid-cols-12'>
      <Header />
      <Sidebar />
      <div className='col-span-12 md:col-span-9 lg:col-span-10 mx-2 md:m-0'>
        <Tagbar />
        <VideoGrid />
      </div>
    </div>
  )
}
