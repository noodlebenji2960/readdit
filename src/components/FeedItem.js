import React from "react"

import Icon from "./Icon"

import { timePassed } from "../functions/timestamp"

import Dropdown from "./Dropdown"

import humanizeNumber from "../functions/humanizeNumber"

import PostType from "./PostType"

function FeedItem(props) {

  return (
      <div className="post" onClick={() => props.onClick()} style={{cursor:"pointer"}}>
        <div>
          <Icon iconName="RxThickArrowUp" />
          {humanizeNumber(props.post.ups)}
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
            <PostType post={props.post}/>
          </div>
          <div>
            <button>
              <Icon iconName="FaRegCommentAlt" />
              {humanizeNumber(props.post.num_comments)}
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