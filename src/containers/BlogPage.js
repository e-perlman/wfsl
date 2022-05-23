import React,{useState,useEffect} from "react"
import { EventCard } from "../components/blog/EventCard"
import { BlogForm } from "../components/blog/BlogForm"
export const BlogPage = () => {
  const [upcomingGames,setUpcomingGames]=useState([])
  const fetchGames=async ()=>{
    try{
      const resp= await fetch('https://www.thesportsdb.com/api/v1/json/50130162/eventsnextleague.php?id=4521')
      const data= await resp.json()
      setUpcomingGames(data.events)
    }catch(error){
      alert(error)
    }
  }
  useEffect(()=>{
    fetchGames()
  },[]);
  return (
    <div>
      <div>
        {upcomingGames.map(game=> <EventCard key={game.idEvent} game={game}/>)}
      </div>
      <BlogForm/>
      
    </div>
  )
}
