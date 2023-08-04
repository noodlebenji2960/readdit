import React, { useEffect, useState, useRef } from "react"
import "./styles.css"
import "./index.css"
import PostOverlay from "./components/PostOverlay"
import FeedItem from "./components/FeedItem"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import FeedFilter from "./components/FeedFilter"
import { getPopular } from "./hooks/redditApi"
import TrendingGalleryCarousel from "./components/TrendingGalleryCarousel"

function App() {
  const [activePostOverlay, setActivePostOverlay] = useState()
  const [darkModeToggle, setDarkModeToggle] = useState(true)
  const [feedData, setFeedData] = useState()
  const [popular, setPopular] = useState([])

  const toggleDarkMode=(e)=>{
      if(darkModeToggle==true){
          setDarkModeToggle(false)
          darkMode()
      }else{
          setDarkModeToggle(true)
          lightMode()
      }
  }

  function lightMode(e){
      document.documentElement.style.setProperty("--newCommunityTheme-actionIcon","#878A8C")
      document.documentElement.style.setProperty("--newCommunityTheme-body","#1A1A1B")
      document.documentElement.style.setProperty("--newCommunityTheme-bodyText","#D7DADC") //
      document.documentElement.style.setProperty("--newCommunityTheme-button","#d7dadc")
      document.documentElement.style.setProperty("--newCommunityTheme-field","#272729")
      document.documentElement.style.setProperty("--newCommunityTheme-line","#343536")
      document.documentElement.style.setProperty("--newCommunityTheme-linkText","#0079D3")
      document.documentElement.style.setProperty("--newCommunityTheme-postTransparent20","#141414")
      
      document.documentElement.style.setProperty("--newRedditTheme-actionIcon","#878A8C")
      document.documentElement.style.setProperty("--newRedditTheme-body","#1c1c1c")
      document.documentElement.style.setProperty("--newRedditTheme-bodyText","#1c1c1c")
      document.documentElement.style.setProperty("--newRedditTheme-button","#0079D3")
      document.documentElement.style.setProperty("--newRedditTheme-field","#F6F7F8")
      document.documentElement.style.setProperty("--newRedditTheme-line","#EDEFF1")
      document.documentElement.style.setProperty("--newRedditTheme-linkText","#0079D3")
      document.documentElement.style.setProperty("--newRedditTheme-bg", "#000000")
}

  function darkMode(e){
      document.documentElement.style.setProperty("--newCommunityTheme-actionIcon","#878A8C")
      document.documentElement.style.setProperty("--newCommunityTheme-body","#FFFFFF")
      document.documentElement.style.setProperty("--newCommunityTheme-bodyText","#1c1c1c") //
      document.documentElement.style.setProperty("--newCommunityTheme-button","#0079D3")
      document.documentElement.style.setProperty("--newCommunityTheme-field","#F6F7F8")
      document.documentElement.style.setProperty("--newCommunityTheme-line","rgba(26,26,27,0.1)")
      document.documentElement.style.setProperty("--newCommunityTheme-linkText","#0079D3")
      document.documentElement.style.setProperty("--newCommunityTheme-postTransparent20","rgba(255,255,255,0.8)")

      document.documentElement.style.setProperty("--newRedditTheme-actionIcon","#878A8C")
      document.documentElement.style.setProperty("--newRedditTheme-body","#FFFFFF")
      document.documentElement.style.setProperty("--newRedditTheme-bodyText","#1c1c1c")
      document.documentElement.style.setProperty("--newRedditTheme-button","#0079D3")
      document.documentElement.style.setProperty("--newRedditTheme-field","#F6F7F8")
      document.documentElement.style.setProperty("--newRedditTheme-line","#EDEFF1")
      document.documentElement.style.setProperty("--newRedditTheme-linkText","#0079D3")
      document.documentElement.style.setProperty("--newRedditTheme-bg", "#DAE0E6")
  }

  const fetchPopular=(geo_filter)=>{
    let after = feedData!==undefined ? feedData : ""
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

  useEffect(()=>{
      if(darkModeToggle==false){
          setDarkModeToggle(false)
          darkMode()
      }else{
          setDarkModeToggle(true)
          lightMode()
      }
  })

  useEffect(()=>fetchPopular("GLOBAL"),[])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
})

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkModeToggle={darkModeToggle}/>
      {activePostOverlay && 
          <>
              <div className="overlayWrapper" onClick={()=>setActivePostOverlay()}/>
              <PostOverlay post={activePostOverlay} setActivePostOverlay={setActivePostOverlay}/>
          </>
        }
      <div className="feed">
        <TrendingGalleryCarousel popular={popular}/>
        <CreatePost/>
        <FeedFilter fetchPopular={fetchPopular}/>
        {popular.length>0 && popular.map((post)=>{return(
          <FeedItem post={post} onClick={(e)=>setActivePostOverlay(post)}/>
        )})}
      </div>
    </>
  )
}

export default App