import React, { useState } from "react"

import CommentInput from "./TextEditor"
import CommentItem from "./CommentItem"
import Icon from "./Icon"

import { timePassed } from "../hooks/timestamp"
import Dropdown from "./Dropdown"

const dummyComments = []
const postItemData = {
  author: "slimBradey6",
  ups: 689932,
  subreddit_name_prefixed: "r/cafeCorner123",
  created: 1174652632,
  title: "big boy eaten by blimp",
  num_comments: 9654,

}
for (let i = 0; i < 8; i++) {
  let date = new Date(Math.random() * (1e+12).toString()).toString()
  date = Date.parse(date) / 1000
  const dummyComment = (
    {
      id: crypto.randomUUID(),
      body: "this is comment",
      comments: [],
      created: date
    }
  )
  for (let ind = 0; ind < 15; ind++) {
    if (ind % 2 == 0) {
      let date = new Date(Math.random() * (1e+12).toString()).toString()
      date = Date.parse(date) / 1000
      dummyComment.comments.push(
        {
          id: crypto.randomUUID(),
          body: "this is sub comment",
          comments: [],
          created: date
        }
      )
    }
  }
  dummyComments.push(dummyComment)
}

function PostItem(props) {
  const [comments, setComments] = useState(dummyComments)

  const onComment = (newComment) => {
    setComments(prev => [newComment, ...prev]);
  }

  return (
    <>
      <div id="postOverlay" >
        <div>
          <Icon iconName="RxThickArrowUp" />
          {postItemData.ups > 1000 ? Math.floor(postItemData.ups / 100) * 100 / 1000 + "k" : postItemData.ups}
          <Icon iconName="RxThickArrowDown" />
        </div>
        <div>
          <div><span>
            <Icon iconName="ProfilePictureIcon" />
            <a>{postItemData.subreddit_name_prefixed}</a>
              <i>
                Posted by u/
                <a>{postItemData.author}</a>
              </i>
            <i>{timePassed(postItemData.created)}</i>
          </span>
            <button>
              Join
            </button>
          </div>
          <div>
            <h1>{postItemData.title}</h1>
          </div>
          <div>
            <button>
              <Icon iconName="FaRegCommentAlt" />
              {postItemData.num_comments > 1000 ? Math.floor(postItemData.num_comments / 100) * 100 / 1000 + "k" : postItemData.num_comments}
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
          {comments.map((comment, i) => (
            <CommentItem key={comment.id} isHidden={false} comment={comment} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PostItem