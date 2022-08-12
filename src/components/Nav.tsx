import { useState } from "react"
import NavOptionsInterface from "../interfaces/navoptionsinterface"
const Nav = ()=>{
  const [navOptions, setNavOptions] = useState<NavOptionsInterface[]>(
    [{title:'Print', color: '#000000', destination:''},
    {title:'Digital', color: '#F58514', destination:''},
    {title:'Spaces', color: '#31A00F', destination:''},
    {title:'Illustration', color: '#E6BE38', destination:''},
    {title:'About', color: '#0A70D5', destination:''}]
    )
  return(
    <nav className='navigation'>
    <div className='navrainbows'>
      <div className='leftnavrainbow'>
      </div>
      <div className='rightnavrainbow'>
      </div>
    </div>
    <div className='navoptions'>
      {navOptions.map((option)=>(
        <a href={option.destination}><div style={{backgroundColor:option.color}} className='option title'>{option.title}</div></a>
      ))}
    </div>
  </nav>
)}

export default Nav