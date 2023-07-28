import React, {useState, useEffect} from "react"

const SubMenu = (props) => {
    const [expanded, setExpanded] = useState(false)
  
    return (
      <>
        <button
            title={props.title}
            onClick={(e) => {
              e.preventDefault()
              setExpanded(prev=>!prev)
            }}>
          {props.label}
        </button>
        {expanded == true && props.children.map((child) => child)}
      </>
    )
  }

export default SubMenu