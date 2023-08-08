import React, { useState, useEffect, useRef } from "react";

import Icon from "./Icon";

const TrendingGalleryCarousel = (props) => {
    const carouselRef = useRef()

    const previousPage=()=>{
        let x = carouselRef.current.scrollLeft
        if(x==0){
            return carouselRef.current.scrollTo(carouselRef.current.scrollWidth,0)
        }else{
            return carouselRef.current.scrollTo(carouselRef.current.scrollLeft-(((282.39*3)+(9*4))),0)
        }
    }

    const nextPage=()=>{
        let x = carouselRef.current.scrollLeft+((277*3)+(5*3))
        if(x<carouselRef.current.scrollWidth){
            return carouselRef.current.scrollTo(x,0)
        }else{
            return carouselRef.current.scrollTo(0,0)
        }
    }
    
    useEffect(() => {
        let interval;

        const setCarouselInterval=()=>{
            interval = setInterval(() => {
            nextPage()
            }, 5000);
        }

        const clearCarouselInterval = ()=>{clearInterval(interval)}

        carouselRef.current.addEventListener("mouseenter", clearCarouselInterval)
        carouselRef.current.addEventListener("mouseover", clearCarouselInterval)
        carouselRef.current.addEventListener("mouseleave", setCarouselInterval)

        setCarouselInterval()

        return () => {
            carouselRef.current.removeEventListener("mouseenter", clearCarouselInterval)
            carouselRef.current.removeEventListener("mouseover", clearCarouselInterval)
            carouselRef.current.removeEventListener("mouseleave", setCarouselInterval)
            clearInterval(interval)
        };
      }, []);

    return (
        <ul className="carousel" ref={carouselRef}>
            <span>
                <button title="previous" onClick={()=>previousPage()}>
                    <Icon iconName="BsArrowLeftCircle"/>
                </button>
                <button title="next" onClick={()=>nextPage()}>
                    <Icon iconName="BsArrowRightCircle"/>
                </button>
            </span>
            {props.popular.map((ele, index)=>{
                return ele.thumbnail.includes("https") && (
                <li key={ele.id} onClick={(e)=>props.setActivePostOverlay(ele)}>
                    <img
                      src={ele.thumbnail}
                      style={{
                        width: ele.thumbnail_width + "px",
                        height: ele.thumbnail_height + "px"
                      }}
                    />
                    <h1>{ele.title}</h1>
                    <p>{ele.selfText && ele.selfText}</p>
                    <span>
                        <Icon iconName="ProfilePictureIcon"/>
                        {`${ele.author} and more`}
                    </span>
                </li>
            )})}
        </ul>
    )
}

export default TrendingGalleryCarousel;