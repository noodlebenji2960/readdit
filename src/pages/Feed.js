import React, { useEffect, useState } from "react"

import PostOverlay from "../components/PostOverlay"
import FeedItem from "../components/FeedItem"
import CreatePost from "../components/CreatePost"
import FeedFilter from "../components/FeedFilter"
import TrendingGalleryCarousel from "../components/TrendingGalleryCarousel"

import { getPopular } from "../hooks/redditApi"

function Feed() {
  const [activePostOverlay, setActivePostOverlay] = useState()
  const [feedData, setFeedData] = useState()
  const [popular, setPopular] = useState([])
  const [user, setUser] = useState(false)

  const fetchPopular = (geo_filter) => {
    let after = feedData !== undefined ? feedData : "GLOBAL"
    getPopular(geo_filter, after).then((data) => {
      setFeedData(data.data.after)
      setPopular(popular.concat(data.data.children.map((data) => data.data)))
    })
  }

  const handleScroll = (e) => {
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight <= 50) {
      fetchPopular("GLOBAL")
    }
  }

  useEffect(() => fetchPopular("GLOBAL"), [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <>
      {activePostOverlay &&
        <>
          <div className="overlayWrapper" onClick={() => setActivePostOverlay()} />
          <PostOverlay post={activePostOverlay} setActivePostOverlay={setActivePostOverlay} />
        </>
      }
      <div className="feed">
        {user == true ? (<>
          <CreatePost />
        </>) : (<>
          <TrendingGalleryCarousel popular={popular} setActivePostOverlay={setActivePostOverlay} />
        </>)}
        <FeedFilter fetchPopular={fetchPopular} />
        {popular.map((post) => {
          return (
            <FeedItem key={crypto.randomUUID()} post={post} onClick={(e) => setActivePostOverlay(post)} />
          )
        })}
      </div>
    </>
  )
}

export default Feed