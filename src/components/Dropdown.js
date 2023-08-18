import React, {useState, useEffect, useRef} from "react"

const Dropdown = (props) => {
    const [expanded, setExpanded] = useState(false)
    const buttonRef = useRef()
    const dropdownRef = useRef()

    const handleDocClick = (e) =>{
      e.target!==buttonRef.current && setExpanded(false)
    }

    const handleKeyboard = (e)=>{
        //escape key = 27
        e.keyCode == 27 && setExpanded(false)
    }
  
    useEffect(() => {
      window.addEventListener("mousedown", handleDocClick)
      return ()=>{
        window.removeEventListener("mousedown", handleDocClick)
      }
    })

    useEffect(()=>{
      window.addEventListener("keydown", handleKeyboard)
      return ()=>{
          window.removeEventListener("keydown", handleKeyboard)
      }
    })

    useEffect(()=>{
      if(expanded==true && props.scrollToIndex!==undefined){
        dropdownRef.current.scroll(0, dropdownRef.current.children[props.scrollToIndex].offsetTop)
      }
    })

    return (
      <span>
        <button
          ref={buttonRef}
          title={props.title}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setExpanded(prev=>!prev)
          }}>
          {props.label}
        </button>
        <ul 
            className={`dropdown ${expanded == true && "dropdownExpanded"}`}
            role="list"
            ref={dropdownRef}
            aria-expanded={expanded}
            style={props.menuPlacement}
            onMouseDown={(e)=>e.stopPropagation()}
        >
          {props.children.map((child,i) => {
            return (
                <li
                  key={`dropdownOption${i}`}
                  role="listitem"
                  tabIndex={i+1}
                >
                    {child}
                </li>
            )
          })}
        </ul>
      </span>
    )
  }

export default Dropdown