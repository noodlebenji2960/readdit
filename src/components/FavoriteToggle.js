import React, {useState, useEffect} from "react"

import Icon from "./Icon"

const FavoriteToggle = (props) => {
    const [active, setActive] = useState(props.state)
    return (
        <button onClick={(e)=>setActive(prev=>!prev)} className={active==true && "toggleFav"}>
            {active ? <Icon iconName="TiStarFullOutline" /> : <Icon iconName="TiStarOutline" />}
        </button>
        
    )
  }

export default FavoriteToggle