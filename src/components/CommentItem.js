import React, {useState} from "react"
import Icon from "./Icon"
import Dropdown from "./Dropdown"
import CommentInput from "./TextEditor"
import { timePassed } from "../hooks/timestamp"

const CommentItem = (props) => {
    const [isReplying, setIsReplying] = useState(false);
    const [comments, setComments] = useState(props.comment.comments)
    const [isHidden, setIsHidden] = useState(props.isHidden)

    const onComment = (newComment) => {
        setComments(prev => [newComment, ...prev]);
        setIsReplying(false);
    }

    return (
        <div className="commentItem">
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
                    {`User123`}
                    <i>
                        {` • ${timePassed(props.comment.created)}`}
                    </i>
                </div>
                {isHidden == false &&
                    <div className="commentItemContent">
                        {props.comment.body}
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
                        {comments.map((comment, i) => (
                            <CommentItem key={comment.id} isHidden={i < 4 ? false : true} comment={comment} />
                        ))}
                    </div>
                }
            </span>
        </div>
    )
}

export default CommentItem