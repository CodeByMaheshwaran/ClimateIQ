import React,{useState,useEffect} from 'react' 
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import sun  from '../assets/icons/sun.png'
import windy from '../assets/icons/windy.png'
import { split } from 'postcss/lib/list'

const MiniCard=({time,temp,iconString})=>{
const[icon,seticon]=useState()
useEffect(()=>{
    if(iconString){
        if(iconString.toLowerCase().includes('cloud') || iconString.toLowerCase().includes('overcast')){
            seticon(cloud)
        } else if(iconString.toLowerCase().includes('rain')){
            seticon(rain)
        } else if(iconString.toLowerCase().includes('clear')){
            seticon(sun)
        }else if(iconString.toLowerCase().includes('thunder')){
            seticon(storm)
        }else if(iconString.toLowerCase().includes('fog')){
            seticon(fog)
        }else if(iconString.toLowerCase().includes('snow')){
            seticon(snow)
        }else if(iconString.toLowerCase().includes('wind')){
            seticon(windy)
        }
    }

},[iconString])
 
return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
        <p className='text-center'>
            {new Date(time).toLocaleTimeString('en',{weekday:'long'}).split(" ")[0]}
        </p>
        <hr/>
        <div className='w-full flex justify-center items-center flex-1'>
            <img src={icon} alt="Not Available" className='w-[4rem] h-[4rem]'/>
        </div>
        <p className='text-center font-bold'>{temp} &deg;C</p>
    </div>
) 

}

export default MiniCard