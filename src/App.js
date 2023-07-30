import React, { useEffect, useState } from "react"
import "./styles.css"
import "./index.css"
import PostItem from "./components/PostItem"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import FeedFilter from "./components/FeedFilter"

function App() {
  const [darkModeToggle, setDarkModeToggle] = useState(true)

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

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkModeToggle={darkModeToggle}/>
      <CreatePost/>
      <FeedFilter/>
      <PostItem/>
    </>
  )
}

export default App