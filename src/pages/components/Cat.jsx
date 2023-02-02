import client from '../../Sanity/sanity'
import React, { useContext ,useState ,useEffect} from 'react'
import { GlobalData } from '../_app'

function Cat() {
  const {CateGory, setCateGory,CateGoryToggle, setCateGoryToggle} = useContext(GlobalData)
    const [News, setNews] = useState([])
    const [Selected, setSelected] = useState(false)


  useEffect(() => {
    client.fetch(`
    *[_type == 'category']{
     _id,
      
       title
     
     }
    `).then((data)=>{
     console.log(data)
     setNews(data)
    })
   }, [])

const HamndleClick =()=>{
  
  
  setSelected(!Selected)
}

  return (
      <>
        <div className='flex flex-row gap-4 mt-4 overflow-x-scroll scrollbar-hide  h-[70px] w-full px-2  '>
        <button onClick={()=>{
                setCateGoryToggle(false)}}>
                  <h1 onClick={HamndleClick} className={`${Selected==false?"Laato outline-blue-300 outline px-3 py-1 bg-blue-300  rounded-full":"Laato outline-blue-300 outline px-3 py-1 hover:bg-blue-300  rounded-full"}`}>All</h1>
                  </button>
    {News.map((f)=>{
        return(
            <>

         <button onClick={()=>{setCateGory(f._id)
                setCateGoryToggle(true)}}>
                  <h1 onClick={HamndleClick} className={`${Selected==true?"Laato outline-blue-300 outline px-3 py-1 w-[130px] bg-blue-300  rounded-full":"Laato outline-blue-300 w-[130px] outline px-3 py-1 hover:bg-blue-300  rounded-full"}`}>{f.title}</h1>
                  </button>
             
       
                </>
                
                )
            })}
            </div>
    </>
  )
}

export default Cat