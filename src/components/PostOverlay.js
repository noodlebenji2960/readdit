import React, { useEffect, useState } from "react"

import CommentInput from "./TextEditor"
import CommentItem from "./CommentItem"
import Icon from "./Icon"

import { timePassed } from "../hooks/timestamp"
import Dropdown from "./Dropdown"
import { getComments } from "../hooks/redditApi"
import { Sanitize } from "../hooks/sanitize"

function PostOverlay(props) {
  const [comments, setComments] = useState()

  const PostType = () => {
    if (props.post.post_hint == "image") {
        return (
            <img
                src={props.post.thumbnail}
                style={{
                    width: props.post.thumbnail_width + "px",
                    height: props.post.thumbnail_height + "px"
                }}
            />
        )
    } else if (props.post.post_hint == "hosted:video") {
        return (
            <video preload="auto" autoPlay="autoplay" controls>
                <source src={props.post.media.reddit_video.fallback_url + "#t=0.5"} />
            </video>
        )
    } else if (props.post.post_hint == "rich:video") {
        const src = props.post.media_embed.content.match(/src\="([^\s]*)\s/)[1].slice(0, -1)
        return (
            <iframe src={src} />
        )
    } else if (props.post.post_hint == "link") {
        return (
            <img src={props.post.preview.images[0].url}/>
        )
    } else if (props.post.post_hint == undefined && props.post.selftext !== undefined) {
        return Sanitize(props.post.selftext)
    } else {

    }
}

const RenderComments=(comment)=>{
  let result = []
  let groupStack = []
  function traverse(currentNode, parentID) {
      groupStack.push({id: currentNode["id"], parentID:parentID, body:currentNode["body"]})
      if ("replies" in currentNode && currentNode["replies"] !== "") {
          if (filterOutMore(currentNode.replies.data.children).length > 0) {
              for (let i=0; i<filterOutMore(currentNode.replies.data.children).length;i++) {
                  traverse(filterOutMore(currentNode.replies.data.children)[i].data, currentNode.id)
              }
          }
          let more = checkMore(currentNode.replies.data.children)
          if (more) {
          }
      } else {
      }
      result.push(groupStack.pop())
  }
  
  groupStack.find((comment)=>{if(comment.id==parentID){return true}})

  traverse(comment)
  return (
      <CommentItem key={comment.id} isHidden={false} comment={comment} RenderComments={RenderComments}/>
  )
}

function filterOutMore(children) {
  return children.filter((reply) => {
      if (reply.kind !== "more") {
          return true
      }
  })
}
function checkMore(children) {
  return children.find((reply) => {
      if (reply.kind == "more") {
          return true
      }
  })
}

  const onComment = (newComment) => {
    setComments(prev => [newComment, ...prev]);
  }

  useEffect(()=>{
    getComments(props.post.id).then((data)=>setComments(data))
  },[])

  useEffect(()=>{
    document.body.style.overflowY="hidden"
    return ()=>{
      document.body.style.overflowY="scroll"
    }
  })

  return (
    <>
      <div className="post overlay" >
        <div>
          <Icon iconName="RxThickArrowUp" />
          {props.post.ups > 1000 ? Math.floor(props.post.ups / 100) * 100 / 1000 + "k" : props.post.ups}
          <Icon iconName="RxThickArrowDown" />
          <button onClick={(e)=>{props.setActivePostOverlay()}}>
            close
          </button>
        </div>
        <div>
          <div><span>
            <Icon iconName="ProfilePictureIcon" />
            <a>{props.post.subreddit_name_prefixed}</a>
              <i>
                Posted by u/
                <a>{props.post.author}</a>
              </i>
            <i>{timePassed(props.post.created*1000)}</i>
          </span>
            <button>
              Join
            </button>
          </div>
          <div>
            <h1>{props.post.title}</h1>
            <PostType/>
          </div>
          <div>
            <button>
              <Icon iconName="FaRegCommentAlt" />
              {props.post.num_comments > 1000 ? Math.floor(props.post.num_comments / 100) * 100 / 1000 + "k" : props.post.num_comments}
            </button>
            <button>
              <Icon iconName="GoGift" />
              Award
            </button>
            <Dropdown label={
              <>
                <Icon iconName="TbShare3" />
                Share
              </>
            }>
              <button>
                <Icon iconName="BsLink45Deg" />
                Copy Link
              </button>
              <button>
                <Icon iconName="TbArrowsSplit" />
                Crosspost
              </button>
              <button>
                <Icon iconName="BsCodeSlash" />
                Embed
              </button>
            </Dropdown>

            <Dropdown label={
              <Icon iconName="BsThreeDots" />
            }>
              <button>
                <Icon iconName="AiOutlineEyeInvisible" />
                Hide
              </button>
              <button>
                <Icon iconName="BsFlag" />
                Report
              </button>
            </Dropdown>
          </div>
          <span>
            <i>Comment as <a>noodlebenji</a></i>
          </span>
          <CommentInput onComment={onComment} />
          <span>
            <a>view discussions in 9 other communities</a>
          </span>
          {comments && comments.map((comment)=>"count" in comment==false && RenderComments(comment))}
        </div>
      </div>
    </>
  )
}

export default PostOverlay