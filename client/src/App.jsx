import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/DashBoard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

const App = () => {

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
        <Route index element={<Dashboard />}/>
        <Route path='write-article' element={<WriteArticle />}/>
        <Route path='blog-titles' element={<BlogTitles />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App