import { NavLink } from "react-router-dom";

const style= {
  width: '60%',
  margin: '5% 0 1%',
  padding: '1em',
  textDecoration:'none',
  color: 'black',
  fontWeigth: 'bold',
  verticalAlign: 'center'
}
export const Navbar = () => {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: 'red'
        }}
        exact
        style={style}
        to='/'
      >Home</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: 'red'
        }}
        exact
        style={style}
        to='/about'
      >About</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: 'red'
        }}
        exact
        style={style}
        to='/leagueplayers'
      >Teams and Players</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: 'red'
        }}
        exact
        style={style}
        to='/choosemyteam'
      >Choose My Team</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: 'red'
        }}
        exact
        style={style}
        to='/blog'
      >Blog</NavLink>

    </div>
  )
}
