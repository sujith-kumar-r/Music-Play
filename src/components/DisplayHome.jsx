import React from 'react'
import Navbar from './Navbar'
import { albumsData,songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className=' mt-2 mb-4'>
        <h1 className='font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
         </div>
      </div> <div className=' mt-2 mb-4'>
        <h1 className='font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
         </div>
         
      </div>
    </>
  )
}

export default DisplayHome
