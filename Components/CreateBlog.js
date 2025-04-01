'use client'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

const CreateBlog = (setOpenCreateBlog) => {
    const [data, setData] = useState({
        title: '',
        subtitle: '',
        content: '',
        tags: '',
        image: '',
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/blogs/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const responsedata = await res.json();
            setData({title: '', subtitle: '', content: '', tags: '', image: ''});
            console.log(responsedata);
            setLoading(false);
        }catch (error) {
            console.log(error);
        }
    };

  return (
    <div className='fixed items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 min-w-full min-h-screen bg-[#171616e0]'>
       <div className='bg-white p-4 max-w-[600px] mx-auto rounded-3xl max-h-screen overflow-auto'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>Create Blog</h2>
                <button onClick={() => setOpenCreateBlog} className='text-3xl rotate-45 cursor-pointer'><FaPlus /></button>
            </div>
            <input placeholder='Enter Title' type='text' value={data.title} onChange={(e) => setData({...data, title: e.target.value})} className='w-full outline-none border-2 rounded-3xl border-[#888] p-2 mt-4'/>
            <input placeholder='Enter Subtitle' type='text' value={data.subtitle} onChange={(e) => setData({...data, subtitle: e.target.value})} className='w-full outline-none border-2 rounded-3xl border-[#888] p-2 mt-4'/>
            <div contentEditable="true" suppressContentEditableWarning={true} className='w-full outline-none border-2 rounded-3xl border-[#888] p-2 mt-4' placeholder='Enter Content Here' value={data.content} onInput={(e) => setData({...data, content: e.currentTarget.innerHTML})}></div>
            <input placeholder='Enter tags' type='text' value={data.tags} onChange={(e) => setData({...data, tags: e.target.value})} className='w-full outline-none border-2 rounded-3xl border-[#888] p-2 mt-4'/>
            <input placeholder='Enter Image URL' type='file' onChange={(e) => setData({...data, image: e.target.value})} className='w-1/2 border-2 rounded-xl border-[#888] p-8 cursor-pointer mt-4'/>
            <div className='flex flex-wrap gap-2 mt-4'>
                <button onClick={() => document.execCommand('bold')} className={`border-2 rounded-lg px-3 py-1 `}>Bold</button>
                <button onClick={() => document.execCommand('underline')} className={`border-2 rounded-lg px-3 py-1 `}>Underline</button>
                <button onClick={() => document.execCommand('italic')} className={`border-2 rounded-lg px-3 py-1 `}>Italic</button>
                <button onClick={() => document.execCommand('increaseFontSize')} className={`border-2 rounded-lg px-3 py-1`}>Increase Font Size</button>
                <button onClick={() => document.execCommand('decreaseFontSize')} className={`border-2 rounded-lg px-3 py-1`}>Decrease Font Size</button>
                <button onClick={() => document.execCommand('insertLineBreak')} className={`border-2 rounded-lg px-3 py-1`}>Next Line</button>
            </div>
            <div>
                <button onClick={handleSubmit} className='bg-[#b91202] text-white px-4 py-2 rounded-3xl mt-4'>{loading ? 'Submitting...' : 'Submit'}</button>
            </div>
           

       </div>
    </div>
  )
}

export default CreateBlog
