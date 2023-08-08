import React from "react"

import Icon from "./Icon"

import { timePassed } from "../hooks/timestamp"

import Dropdown from "./Dropdown"

function FeedItem(props) {

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
        <video preload="auto" controls>
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
        <a href={props.post.url} target="Blank">
          <div style={{ maxWidth: "300px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <Icon iconName="FiExternalLink" />
            {props.post.url}
          </div>
        </a>
      )
    } else if (props.post.post_hint == undefined && props.post.selftext !== undefined) {
      return props.post.selftext
    } else {

    }
  }

  return (
      <div className="post" onClick={() => props.onClick()} style={{cursor:"pointer"}}>
        <div>
          <Icon iconName="RxThickArrowUp" />
          {props.post.ups > 1000 ? Math.floor(props.post.ups / 100) * 100 / 1000 + "k" : props.post.ups}
          <Icon iconName="RxThickArrowDown" />
        </div>
        <div>
          <div><span>
            <Icon iconName="ProfilePictureIcon" />
            <a>{props.post.subreddit_name_prefixed}</a>
            <i>
              Posted by u/
              <a>{props.post.author}</a>
            </i>
            <i>{timePassed(props.post.created * 1000)}</i>
          </span>
            <button>
              Join
            </button>
          </div>
          <div>
            <h1>{props.post.title}</h1>
            <PostType />
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
        </div>
      </div>
  )
}

export default FeedItem