import React,{useState,useEffect} from "react"
import { EventCard } from "../components/blog/EventCard"
import { BlogForm } from "../components/blog/BlogForm"
import { BlogCard } from "../components/blog/BlogCard"
export const BlogPage = () => {
  const [upcomingGames,setUpcomingGames]=useState([])
  const [posts,setPosts]=useState([])
  const fetchGames=async ()=>{
    try{
      const resp= await fetch('https://www.thesportsdb.com/api/v1/json/50130162/eventsnextleague.php?id=4521')
      const data= await resp.json()
      setUpcomingGames(data.events)
    }catch(error){
      alert(error)
    }
  }
  const fetchPosts=async ()=>{
    try{
      const resp= await fetch('http://localhost:3001/blog')
      const data= await resp.json()
      setPosts(data)
    }catch(error){
      alert(error)
    }
  }
  useEffect(()=>{
    fetchGames()
    fetchPosts()
  },[]);
  function handleNewPost(newPost){
    setPosts([...posts,newPost])
  }
  const gamesList=upcomingGames.map(game=> <EventCard key={game.idEvent} game={game}/>)
  const blogList=posts.map(post=><BlogCard key={post.title} post={post}/>)
  return (
    <div style={{display:'flex'}}>
      <div>
        <h1>Upcoming Games</h1>
        {gamesList}
      </div>
      <BlogForm onAddPost={handleNewPost}/>
      <div>
        {blogList}
      </div>
    </div>
  )
}
