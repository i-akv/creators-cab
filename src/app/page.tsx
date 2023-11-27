import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='grid grid-cols-12'>
      <Header />
      <Sidebar />
    </div>
  )
}
