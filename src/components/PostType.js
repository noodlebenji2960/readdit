import React from "react"
import { Sanitize } from "../functions/sanitize"
import Icon from "./Icon"

const PostType = (props) => {
    if (props.post.post_hint == "image") {
        return (
            <img src={props.post.url} />
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
    } else if (props.post.post_hint == undefined && props.post.selftext.length>1) {
        
        return (
            props.post.selftext.length < 1000 ? props.post.selftext :
                <div className="fade">
                    {Sanitize(props.post.selftext)}
                </div>
        )
    } else {
    }
}

export default PostType