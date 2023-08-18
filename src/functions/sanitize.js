import React from "react"

export const Sanitize=(string) =>{
  let htmlString = string

  htmlString.replace(/\n/g, "<br />")

  const urlRegex1 = /\!\[gif\]\(giphy\|.+\)/g
  const urlRegex2 = /(?<=giphy\|).+?(?=\)|\|)/g
    htmlString.replace(urlRegex1, (gif)=>{
        let href = gif.match(urlRegex2)[0]
        return href ? `<iframe src="https://giphy.com/embed/`+ href +`"/>` : text
    })
       
  const urlRegex3 = /\[.+\]\(https?:\/\/[^\s].+\)/g;
  const urlRegex4 = /https?:\/\/[^\s].+?(?=\))/g;
  const urlRegex5 = /\[.+\]/g
  htmlString.replace(urlRegex3, (url)=>{
      let href = url.match(urlRegex4)
      let label = url.match(urlRegex5)
    return (href && label) && '<a href="' + href + '" target=”_blank”>' + label + '</a>';
  })

    return <p dangerouslySetInnerHTML={{ __html: htmlString }} />
}