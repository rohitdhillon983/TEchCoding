'use client'
import { FaAngleDoubleRight } from "react-icons/fa";
import Image from 'next/image'
import React, { useEffect } from 'react'
import ContactImage from '@/public/Images/contact.png'
import icon1 from '@/public/Images/icon-1.png'
import icon2 from '@/public/Images/icon-2.png'
import { FaSearch,FaCalendarAlt  } from "react-icons/fa";
import CreateBlog from "@/Components/CreateBlog";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Blog = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const[openCreateBlog,setOpenCreateBlog] = React.useState(false)
  const [Blogs, setBlogs] = React.useState([]);

  const fetchBlogs = async () => {
    const response = await fetch('/api/blogs/blogs');
    const data = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs()
    }, []);

  const handleCreateBlog = () => {
    if (!session) {
        router.push('/login')
      return
    }
    else{
    setOpenCreateBlog(true)
    }
  }

  const handleOpenBlog = (id) => {
    router.push(`/blog/${id}`)
  }
  return (
    <div>
      <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#171616e3]'>
        <Image src={icon1} alt="blogs left" className="absolute left-0 z-0" />
        <Image src={ContactImage} alt="blogs main" className="w-full max-h-[100%] -z-10 scaleAnimate" />
        <Image src={icon2} alt="blogs right" className="absolute right-0 bottom-0 z-10" />
      
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
          <h2 className="text-7xl font-bold border-b-4 border-[#b91202] w-fit mx-auto">Blogs</h2>
            <p className="text-2xl mt-2 flex items-center gap-2">Home <FaAngleDoubleRight className='text-[#b91202]'/> Blogs</p>
        </div>
      </section>

      <section className="flex min-h-screen justify-between px-6 md:px-16 py-12">
        <div className=" flex flex-wrap gap-7 w-[70%]">
          {Blogs.map((blog) => (
            <div key={blog._id} className="mb-8 shadow-xl max-w-[400px] rounded-3xl ">
              <Image src={'https://vatech-html-demo.vercel.app/assets/imgs/pages/blog/blog5.png' || blog.image} alt={blog.title} width={400} height={400} className="mb-4" />
              
              <div className="p-4 relative">
                <h3 className="text-3xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.subtitle}</p>
                <p className="text-gray-600 mb-4">Author: {blog.author}</p>
                <button className="text-[#b91202] font-bold flex items-center cursor-pointer" onClick={() => handleOpenBlog(blog._id)}>Read more <FaAngleDoubleRight className='text-[#b91202]'/></button>
                <div className="absolute text-center -top-14 right-4 bg-[#b91202] text-white px-4 py-1 rounded-3xl flex items-center"> 
                  <p>{new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short' }).format(new Date(blog.createdAt))}
                    <br /><span className="text-2xl font-bold Rajdhani">{new Date(blog.createdAt).getFullYear()}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[30%] min-h-screen">
          <div className="w-full  pl-4 border border-gray-300 rounded-3xl mb-4 flex items-center justify-between">
            <input type="text" placeholder="Search" className="border-none focus:outline-none w-full py-2" />
            <FaSearch className="bg-[#b91202] text-white min-h-[40px] p-2 min-w-12 rounded-[0_24px_24px_0]"/>
          </div>

          <div className="w-full  p-3 border border-gray-300 rounded-3xl mb-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#b91202] mb-4">Recent post</h2>
            <div className="">
              {Blogs.slice(0, 3).map((blog) => (
                <div key={blog._id} className="mb-4 flex items-center justify-center cursor-pointer" onClick={() => handleOpenBlog(blog._id)}>
                  <Image src={'https://vatech-html-demo.vercel.app/assets/imgs/pages/blog/blog5.png' || blog.image} alt={blog.title} width={100} height={100} className="mb-4" />
                  <div className="ml-4">
                    <p className="text-gray-600 flex items-center gap-2"><FaCalendarAlt />{new Date(blog.createdAt).toDateString()}</p>
                    <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.author}</p>
                  </div>  
                  
                </div>
              ))}
            </div>
          </div>

          <div className="w-full  p-3 border border-gray-300 rounded-3xl mb-4 flex flex-col justify-center">
            <button onClick={handleCreateBlog} className="text-2xl font-bold bg-[#b91202] text-white p-3 rounded-3xl text-center cursor-pointer">Create blog</button>
          </div>
        </div>
      </section>
      {
        openCreateBlog && (
          <CreateBlog setOpenCreateBlog={setOpenCreateBlog} />
        )
      }
    </div>
  )
}

export default Blog
