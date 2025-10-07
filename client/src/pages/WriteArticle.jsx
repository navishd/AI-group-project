import { Sparkles, Edit } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: 'Short (500 - 800 words)' },
    { length: 1200, text: 'Medium (800 - 1200 words)' },
    { length: 1600, text: 'Long (1200+ words)' },
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [content,setContent] =useState('')

  const {getToken}= useAuth()

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const prompt =`Write an article about ${input} in ${selectedLength.text}`

      const{data} = await axios.post('/api/ai/generate-article',{prompt,length:selectedLength.length},{headers:{Authorization:`Bearer ${await getToken()}`}})

      if(data.success){
        setContent(data.content)
      }else{
        toast.error(data.message)
      }

    } catch (error) {
        toast.error(error.message)
      }
      setLoading(false)
    }
  

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* left col */}
      <form  onSubmit={onSubmitHandler} className="w-full max-w-lg bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full mt-2 p-2 px-3 border border-gray-300 text-sm rounded-md outline-none"
          placeholder="The future of artificial intelligence is ....."
          required
        />

        <p className="mt-4 text-sm font-medium">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleLength.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? 'bg-blue-50 text-blue-700 border-blue-300'
                  : 'text-gray-500 border-gray-300'
              }`}
            >
              {item.text}
            </span>
          ))}
        </div>
        <br />

<button
  disabled={loading}
  className="w-full mt-6 bg-gradient-to-r from-[#226bff] to-[#65adff] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
>
  {loading ? (
    <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
  ) : (
    <Edit className="w-5" />
  )}
  {loading ? 'Generating...' : 'Generate Article'}
</button>

      </form>
      {/* right col */}
      <div className='w-full max-w-lg bg-white p-4 rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

          <div className='flex items-center gap-3'>
            <Edit className='w-5 h-5 text-[#4A7aff]'/>
            <h1 className='text-xl font-semibold'> Generated Article</h1>
          </div>

          {!content ? (          <div className='flex-1 flex justify-center items-center '> 

            <div className='text-sm flex flex-col items-center text-gray-500'>
              <Edit className='w-9 h-9'/> 
              <p>Enter a topic and click "Generate Article" to get started</p>             
            </div>

          </div>):(
            <div className='mt-3 h-full overflaow-y-scroll text-slate-600'>
              <div className='reset-tw'>
              <Markdown>{content}</Markdown>
                
              </div>
            </div>
          )}


      </div>
    
    
    </div>
  )
}

export default WriteArticle
