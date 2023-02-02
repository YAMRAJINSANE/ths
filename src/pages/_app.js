import '@/styles/globals.css'
import { createContext, useState } from 'react'
import Nav from "./components/Nav"

export const GlobalData = createContext()

export default function App({ Component, pageProps }) {
const [FeaturedPost, setFeaturedPost] = useState('')
const [Article, setArticle] = useState('')
const [CateGory, setCateGory] = useState('')
const [CateGoryToggle, setCateGoryToggle] = useState(false)




  return (
    <>
    <GlobalData.Provider value={{CateGoryToggle, setCateGoryToggle,CateGory, setCateGory,FeaturedPost, setFeaturedPost,Article, setArticle}}>

  <Nav/>
  <Component {...pageProps} />
    </GlobalData.Provider>
  
  </>
  )
}
