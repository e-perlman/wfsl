import React from "react"
export const BlogPage = () => {
  const fetchGames=async ()=>{
    try{
      const resp= await fetch('https://www.thesportsdb.com/api/v1/json/50130162/eventsnextleague.php?id=4521')
      const data= await resp.json()
      setTeams(data.events)
    }catch(error){
      alert(error)
    }
  }
  useEffect(()=>{
    fetchGames()
  },[]);
  return (
    <div>
      
    </div>
  )
}
