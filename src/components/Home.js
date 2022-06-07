
import React from "react"
import { ClickMe } from "../ClickMe"

export const Home = () => {
  return (
    <div>
      <h2> Welcome to Women's Fantasy Soccer League!</h2>
      <img src={window.location.origin + '/images/nwslBackground.jpeg'} alt='NWSL Background'/>
    </div>
  )
}
