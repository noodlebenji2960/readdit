import React, {useState, useEffect} from "react"

const Slider = (props) => {
    const [state, setState] = useState(props.state)
  
    return (
        <label className="switch">
            <input type="checkbox" checked={props.state}/>
            <span className="slider round"/>
        </label>
    )
  }

export default Slider