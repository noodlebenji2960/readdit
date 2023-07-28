import React, { useEffect, useState } from "react"
import "./styles.css"
import "./index.css"
import PostItem from "./components/PostItem"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import FeedFilter from "./components/FeedFilter"

function App() {

  return (
    <>
      <Header/>
      <CreatePost/>
      <FeedFilter/>
      <PostItem/>
    </>
  )
}

export default App