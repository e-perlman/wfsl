import { Button,TextField,InputAdornment,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import React,{useState} from 'react'

export const PlayerFilter = ({teams,search,onSearchChange,onTeamSelect,onPositionChange}) => {
    const [selectedTeam,setSelectedTeam]=useState('')

    function handleTeamClick(team){
        setSelectedTeam(team)
        onTeamSelect(team)
    }

    const teamList=teams.map(team=>team.strTeam)
    const buttonList=teamList.map((team)=>(
        <Button key={team} className={selectedTeam===team?'selected':null} onClick={()=>handleTeamClick(team)}>{team}</Button>
    ))
  return (
    <div>
      <FormControl>
        <TextField 
          id='standard-search' 
          focused
          label='Search Player Name'
          name="search"  
          value={search} 
          onChange={onSearchChange} 
          placeholder='Player Name' 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <FormControl sx={{minWidth:150}}>
          <InputLabel id="select-position">Filter By Player Position</InputLabel>
          <Select
            autoWidth={true}
            labelId="select-position"
            id="demo-simple-select"
            label="Filter By Player Position"
            defaultValue='All'
            onChange={onPositionChange}
          >
            <MenuItem value='All'><em>All</em></MenuItem>
            <MenuItem value='Forward'>Forward</MenuItem>
            <MenuItem value='Midfielder'>Midfielder</MenuItem>
            <MenuItem value='Defender'>Defender</MenuItem>
            <MenuItem value='Goalkeeper'>Goalkeepr</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <label>
            <Button className={selectedTeam==='All'?'selected':null} onClick={()=>handleTeamClick('All')}><em>Show All</em></Button>
            {buttonList}
        </label>
    </div>
  )
}
