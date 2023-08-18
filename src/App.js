import React, { useEffect, useState } from "react"

import "./styles.css"
import "./index.css"
import Header from "./components/Header"

import Feed from "./pages/Feed"
import { Route, Routes,useNavigate } from "react-router-dom"
import { AccountManager } from "./pages/accountmanager"
import NoMatch from "./pages/NotFound"
import PostOverlay from "./components/PostOverlay"

function App() {
  const [darkModeToggle, setDarkModeToggle] = useState(false)
  const [user, setUser] = useState(false)
  const navigate = useNavigate();

  const toggleDarkMode = (e) => {
    if (darkModeToggle == true) {
      setDarkModeToggle(false)
      darkMode()
    } else {
      setDarkModeToggle(true)
      lightMode()
    }
  }

  function lightMode(e) {
    document.documentElement.style.setProperty("--newCommunityTheme-actionIcon", "#878A8C")
    document.documentElement.style.setProperty("--newCommunityTheme-body", "#1A1A1B")
    document.documentElement.style.setProperty("--newCommunityTheme-bodyText", "#D7DADC") //
    document.documentElement.style.setProperty("--newCommunityTheme-button", "#d7dadc")
    document.documentElement.style.setProperty("--newCommunityTheme-field", "#272729")
    document.documentElement.style.setProperty("--newCommunityTheme-line", "#343536")
    document.documentElement.style.setProperty("--newCommunityTheme-linkText", "#0079D3")
    document.documentElement.style.setProperty("--newCommunityTheme-postTransparent20", "#141414")

    document.documentElement.style.setProperty("--newRedditTheme-actionIcon", "#878A8C")
    document.documentElement.style.setProperty("--newRedditTheme-body", "#1c1c1c")
    document.documentElement.style.setProperty("--newRedditTheme-bodyText", "#1c1c1c")
    document.documentElement.style.setProperty("--newRedditTheme-button", "#0079D3")
    document.documentElement.style.setProperty("--newRedditTheme-field", "#F6F7F8")
    document.documentElement.style.setProperty("--newRedditTheme-line", "#EDEFF1")
    document.documentElement.style.setProperty("--newRedditTheme-linkText", "#0079D3")
    document.documentElement.style.setProperty("--newRedditTheme-bg", "#000000")
  }

  function darkMode(e) {
    document.documentElement.style.setProperty("--newCommunityTheme-actionIcon", "#878A8C")
    document.documentElement.style.setProperty("--newCommunityTheme-body", "#FFFFFF")
    document.documentElement.style.setProperty("--newCommunityTheme-bodyText", "#1c1c1c") //
    document.documentElement.style.setProperty("--newCommunityTheme-button", "#0079D3")
    document.documentElement.style.setProperty("--newCommunityTheme-field", "#F6F7F8")
    document.documentElement.style.setProperty("--newCommunityTheme-line", "rgba(26,26,27,0.1)")
    document.documentElement.style.setProperty("--newCommunityTheme-linkText", "#0079D3")
    document.documentElement.style.setProperty("--newCommunityTheme-postTransparent20", "rgba(255,255,255,0.8)")

    document.documentElement.style.setProperty("--newRedditTheme-actionIcon", "#878A8C")
    document.documentElement.style.setProperty("--newRedditTheme-body", "#FFFFFF")
    document.documentElement.style.setProperty("--newRedditTheme-bodyText", "#1c1c1c")
    document.documentElement.style.setProperty("--newRedditTheme-button", "#0079D3")
    document.documentElement.style.setProperty("--newRedditTheme-field", "#F6F7F8")
    document.documentElement.style.setProperty("--newRedditTheme-line", "#EDEFF1")
    document.documentElement.style.setProperty("--newRedditTheme-linkText", "#0079D3")
    document.documentElement.style.setProperty("--newRedditTheme-bg", "#DAE0E6")
  }

  useEffect(() => {
    if (darkModeToggle == false) {
      setDarkModeToggle(false)
      darkMode()
    } else {
      setDarkModeToggle(true)
      lightMode()
    }
  })

  return (
    <>
      <Header user={user} toggleDarkMode={toggleDarkMode} darkModeToggle={darkModeToggle} />
      <Routes>
        <Route path={`/`} element={<Feed/>}/>
        <Route path={`account_manager`} element={<AccountManager/>}/>
        <Route path={`*`} element={<NoMatch/>}/>
      </Routes>
    </>
  )
}

export default App