import React, {useEffect, useState} from "react"
import Icon from "./Icon"
import Dropdown from "./Dropdown"
import CommentInput from "./TextEditor"
import { timePassed } from "../hooks/timestamp"
import { Sanitize } from "../hooks/sanitize"

const CommentItem = (props) => {
    const [isReplying, setIsReplying] = useState(false);
    const [isHidden, setIsHidden] = useState(props.isHidden)

    const onComment = (newComment) => {
        setComments(prev => [newComment, ...prev]);
        setIsReplying(false);
    }

    const RenderComments=()=>{
        return props.comment.replies && props.comment.replies.data.children.map((reply)=>{
            return reply.kind!=="more" ? (
                <CommentItem key={reply.data.id} isHidden={false} comment={reply.data}/>
            ) : (
                `${reply.data.count} more repl${reply.data.count>1 ? "ies" : "y"}`
            )
        })
    }

    return (
        <div className="commentItem" id={props.comment.id}>
            <button
                className="toggleCommentStack"
                onClick={() => setIsHidden(prev => !prev)}
            >
                <span style={{
                    width: (isHidden ? "40px" : "20px"),
                }}>
                    <Icon iconName="CgArrowsExpandLeft" />
                    <Icon iconName="ProfilePictureIcon" />
                </span>
                {isHidden == false && <div className="toggleHide" />}
            </button>
            <span>
                <div className="commentInfo">
                    {props.comment.author}
                    <i>
                        {` • ${timePassed(props.comment.created*1000)}`}
                    </i>
                </div>
                {isHidden == false &&
                    <div className="commentItemContent">
                        <p>{Sanitize(props.comment.body)}</p>
                        <form className="commentItemForm">
                            <span>
                                <button>
                                    <Icon iconName="RxThickArrowUp" />
                                </button>
                                <button>
                                    <Icon iconName="RxThickArrowDown" />
                                </button>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setIsReplying(true);
                                }}>
                                    <Icon iconName="IoChatbubbleEllipsesOutline" />
                                    Reply
                                </button>
                                <Dropdown label="Share">
                                    <button onClick={(e) => e.preventDefault()}>
                                        <Icon iconName="BsLink45Deg" />
                                        Copy Link
                                    </button>
                                    <button onClick={(e) => e.preventDefault()}>
                                        <Icon iconName="ImEmbed" />
                                        Embed
                                    </button>
                                </Dropdown>
                                <Dropdown label={<Icon iconName="BsThreeDots" />}>
                                    <button onClick={(e) => e.preventDefault()}>
                                        <Icon iconName="GoGift" />
                                        Give Award
                                    </button>
                                    <button onClick={(e) => e.preventDefault()}>
                                        <Icon iconName="BsFlag" />
                                        Report
                                    </button>
                                    <button onClick={(e) => e.preventDefault()}>
                                        <Icon iconName="BsBookmark" />
                                        Save
                                    </button>
                                    <button onClick={(e) => e.preventDefault()}>
                                        <Icon iconName="IoNotificationsOutline" />
                                        Follow
                                    </button>
                                </Dropdown>
                            </span>
                            {isReplying && (
                                <>
                                    <CommentInput onComment={onComment} setIsReplying={setIsReplying} />
                                </>
                            )}
                        </form>
                        {RenderComments()}
                    </div>
                }
            </span>
        </div>
    )
}

export default CommentItem