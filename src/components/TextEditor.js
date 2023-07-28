import React, { useState, useEffect, useRef } from "react"
import Icon from "./Icon"
import Dropdown from "./Dropdown"

const CommentInput = (props) => {
  const [commentBody, setCommentBody] = useState("")
  const [toolbarOverflow, setToolbarOverflow] = useState(0)
  const textAreaRef = useRef()
  const toolbarRef = useRef()

  function isOverflown() {
    if (toolbarRef.current !== null) {
      setToolbarOverflow(toolbarRef.current.scrollWidth - toolbarRef.current.clientWidth)
    }
  }

  useEffect(() => {
    isOverflown()
    window.addEventListener("resize", isOverflown);
    return () => {
      window.removeEventListener("resize", isOverflown)
    }
  }, [])

  return (
    <div className="textEditor">
      <textarea ref={textAreaRef}
        rows={5}
        placeholder="what are your thoughts?"
        onChange={(event) => setCommentBody(event.target.value)} />
      <div>
        <span className="toolbar" ref={toolbarRef}>
          <button title="Bold">{toolbarOverflow < 361 && <Icon iconName="ImBold" />}</button>
          <button title="Italic">{toolbarOverflow < 331 && <Icon iconName="ImItalic" />}</button>
          <button title="Link">{toolbarOverflow < 301 && <Icon iconName="BsLink45Deg" />}</button>
          <button title="Strikethrough">{toolbarOverflow < 271 && <Icon iconName="AiOutlineStrikethrough" />}</button>
          <button title="Inline Code">{toolbarOverflow < 241 && <Icon iconName="BsCodeSlash" />}</button>
          <button title="Superscript">{toolbarOverflow < 211 && <Icon iconName="BsSuperscript" />}</button>
          <button title="Spoiler">{toolbarOverflow < 180 && <Icon iconName="BsExclamationDiamond" />}</button>

          {toolbarOverflow < 161 && <div tabIndex={-1} className="divider" />}

          <button title="Heading">{toolbarOverflow < 151 && <Icon iconName="BiHeading" />}</button>
          <button title="Bulleted List">{toolbarOverflow < 121 && <Icon iconName="MdFormatListBulleted" />}</button>
          <button title="Numbered List">{toolbarOverflow < 91 && <Icon iconName="MdFormatListNumbered" />}</button>
          <button title="Quote Block">{toolbarOverflow < 61 && <Icon iconName="ImQuotesRight" />}</button>

          {toolbarOverflow < 31 && <div tabIndex={-1} className="divider" />}

          <button title="Table">{toolbarOverflow < 31 && <Icon iconName="VscTable" />}</button>
          <button title="Video">{toolbarOverflow < 7 && <Icon iconName="RxVideo" />}</button>
        </span>
        {toolbarOverflow > 6 && <Dropdown title="More Options" label={<Icon iconName="BsThreeDots"/>}>
            {toolbarOverflow > 361 && <button> <Icon iconName="ImBold" /></button>}
            {toolbarOverflow > 331 && <button> <Icon iconName="ImItalic" /></button>}
            {toolbarOverflow > 301 && <button> <Icon iconName="BsLink45Deg" /></button>}
            {toolbarOverflow > 271 && <button> <Icon iconName="AiOutlineStrikethrough" /></button>}
            {toolbarOverflow > 241 && <button> <Icon iconName="BsCodeSlash" /></button>}
            {toolbarOverflow > 211 && <button> <Icon iconName="BsSuperscript" /></button>}
            {toolbarOverflow > 180 && <button> <Icon iconName="BsExclamationDiamond" /></button>}
            {toolbarOverflow > 151 && <button><Icon iconName="BiHeading" /></button>}
            {toolbarOverflow > 121 && <button><Icon iconName="MdFormatListBulleted" /></button>}
            {toolbarOverflow > 91 && <button><Icon iconName="MdFormatListNumbered" /></button>}
            {toolbarOverflow > 61 && <button><Icon iconName="ImQuotesRight" /></button>}
            {toolbarOverflow > 31 && <button><Icon iconName="VscTable" /></button>}
            {toolbarOverflow > 7 && <button><Icon iconName="RxVideo" /></button>}
        </Dropdown>}
        <span>
          <button>
            Markdown mode
          </button>
          {props.setIsReplying && 
          <button 
            onClick={(e) => {
              e.preventDefault()
              if(textAreaRef.current.value){
                if(confirm("You have a comment in progress, are you sure you want to discard it?")==true){
                  props.setIsReplying(false)
                }
              }else{
                props.setIsReplying(false) 
              }
            }}>
            Cancel
          </button>}
          <button onClick={(e) => {
            e.preventDefault()
            props.onComment({ id: crypto.randomUUID(), body: commentBody, comments: [] })
            setCommentBody("");
          }}>
            Comment
          </button>
        </span>
      </div>
    </div>
  )
}

export default CommentInput