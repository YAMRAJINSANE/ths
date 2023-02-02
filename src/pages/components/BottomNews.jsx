import React,{useContext, useEffect,useState} from 'react'
import client from '../../Sanity/sanity';
import moment from 'moment';
import Link from 'next/link';
import { GlobalData } from '../_app';

const BottomNews = () => {
    const [News, setNews] = useState([])
    const {Article, setArticle,CateGory, setCateGory,CateGoryToggle} = useContext(GlobalData)


    console.log(CateGory)
    useEffect(() => {
        client.fetch(`
        *[_type == 'news']{
          _id,
            excerpt,
            "catId":categories[0]._ref,
            "imageUrl": mainImage.asset->url,
            
            publishedAt,
           author,
            title,
            slug
          }
        `).then((data)=>{
         console.log(data)
         setNews(data)
        })
       }, [])


      //  const filteredData =()=>{
      //   if(News.categories[0]._ref==CateGory){
    

      //     News.filter(item => News.categories[0]._ref == CateGory)
   
      //  }else{
       
      //     News
   
      //  } }


  return (
    <>
    <div className='  flex flex-col gap-2 mt-2 w-full mb-3 lg:w-[500px]  '>
 
{CateGoryToggle==true?

<>
{/* const filteredData = News.filter(item => item._id == FeaturedPost) */}
{News.filter(item => item.catId==CateGory).map((f)=>{
 
 const displayText = f.title.substring(0, 90) + "...";

 const ElId = f._id
      return(
        <div className='h-auto '>
        
        <Link onClick={()=>{setArticle(f._id)}}  href="/cnews" as={`/cnews/${ElId}`} >

 
        <div className=' h-[120px] bg-white relative shadow-md hover:shadow-xl hover:transform hover:scale-100 duration-300 rounded-md w-full px-2 flex justify-between flex-row md:px-8 py-4'>
 <h1 className='text-[#212121]   Hd sm:text-[15px] md:text-lg  md:Laato'>{displayText}</h1>
 <img className='h-[84px] w-[113px] rounded-md' src={f.imageUrl} />
 
      
       <p className=" text-[10px] lg:px-8 lg:text-[14px]  w-full     font-semibold  text-gray-400  absolute bottom-1 left-1  ">Updated on {moment(f.publishedAt).format('dddd, MMMM Do YYYY')}</p>

 

       </div>
    </Link>
    </div>
     )
   })}
</>:<>
  {News.slice(5,200).map((f)=>{
 
 const displayText = f.title.substring(0, 90) + "...";
 const ElId = f._id
      return(
        <div className='h-auto '>  
    <Link onClick={()=>{setArticle(f._id)}}  href="/cnews" as={`/cnews/${ElId}`} >
 
        <div className=' h-[120px] bg-white relative shadow-md hover:shadow-xl hover:transform hover:scale-100 duration-300 rounded-md w-full px-2 flex justify-between flex-row md:px-8 py-4'>
 <h1 className='text-[#212121]   Hd sm:text-[15px] md:text-lg  md:Laato'>{displayText}</h1>
 <img className='h-[84px] w-[113px] rounded-md' src={f.imageUrl} />
 
      
 <p className=" text-[10px] lg:text-[14px]  w-full  lg:px-8   font-semibold  text-gray-400  absolute bottom-1 left-1  ">Updated on {moment(f.publishedAt).format('dddd, MMMM Do YYYY')}</p>
 
 
       </div>
    </Link>
    </div>
     )
   })}
   
</>
}


  
   </div>
     </>
  )
}

export default BottomNews