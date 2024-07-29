import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4 gap-2 p-4 rounded bg-[#192324]'> 
      <div className="text-[3rem]"> <span className='text-red-900'>404</span> Not Found</div>
       <Link to="/" className=' rounded border-2 text-white border-red-50 p-2 px-4'>Home</Link>
    </div>
  )
}

export default NotFoundPage