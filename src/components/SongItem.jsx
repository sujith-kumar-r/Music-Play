import React, { useContext } from 'react'
import { Playercontext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {

   const {playWithId} = useContext(Playercontext) 

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold my-2'>{name}</p>
      <p className='text-slate-200 text-sm my-2'>{desc}</p>
    </div>
  )
}

export default SongItem
