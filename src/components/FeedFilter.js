import React, { useEffect, useState} from "react";

import Dropdown from "./Dropdown"

import Icon from "./Icon";


const FeedFilter = () => {
    const [activeButton, setActiveButton] = useState()
    const [topRange, setTopRange] = useState("Today")
    const [location, setLocation] = useState(()=>getIP())
    const [hot, setHot] = useState("Everywhere")
    const [view, setView] = useState("Card")

    const ranges = [
        "Now",
        "Today",
        "This Week",
        "This Month",
        "this Year"
    ]

    const countries = [
        "Everwhere",
        "United States",
        "Argentina",
        "Australia",
        "Bulgaria",
        "Canada",
        "Chile",
        "Columbia",
        "Croatia",
        "Czech Republic",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "India",
        "Ireland",
        "Italy",
        "Japan",
        "Malaysia",
        "Mexico",
        "New Zealand",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Romania",
        "Serbia",
        "Singapore",
        "Spain",
        "Sweden",
        "Taiwan",
        "Thailand",
        "Turkey",
        "United Kingdom",
    ]

    async function getIP(){
        return await fetch('http://ip-api.com/json/')
        .then(response => response.json())
    }

    const style = {
        fill: "var(--newCommunityTheme-button)",
        color: "var(--newCommunityTheme-button)",
        backgroundColor: "var(--newCommunityTheme-field)"
    }

    useEffect(()=>{
        location.then((data)=>setHot(data.country))
    },[])

    return (
        <div id="feedFilter" className="feedItem">
            <span>
                <button
                    onClick={() => setActiveButton("Best")}
                    style={activeButton == "Best" ? style : {}}>
                    <Icon iconName="IoRocketOutline" />
                    Best
                </button>
                <button
                    onClick={() => {
                        setActiveButton("Hot")
                    }}
                    style={activeButton == "Hot" ? style : {}}>
                    <Icon iconName="BsFire" />
                    Hot
                </button>
                {activeButton =="Hot" &&
                    <Dropdown
                        scrollToIndex={countries.findIndex((e)=>e==hot)}
                        label={
                        <>
                            {hot}
                            <Icon iconName="FiChevronDown"/>
                        </>
                    }>
                        {countries.map((e)=>{
                            return (
                                <button 
                                    key={e} 
                                    onClick={()=>setHot(e)}
                                    style={hot== e ? style : {}}>
                                    {e}
                                </button>
                            )
                        })}
                    </Dropdown>
                }
                <button
                    onClick={() => setActiveButton("New")}
                    style={activeButton == "New" ? style : {}}>
                    <Icon iconName="TiStarburstOutline" />
                    New
                </button>       
                 <button
                        onClick={(e) => setActiveButton("Top")}
                        style={activeButton == "Top" ? style : {}}>
                        <Icon iconName="MdBarChart" />
                        Top
                    </button>
                    {activeButton=="Top" &&
                        <Dropdown 
                            label={
                            <>
                                {topRange}
                                <Icon iconName="FiChevronDown"/>
                            </>
                        }>
                            {ranges.map((range)=>{
                                return (
                                    <button
                                        onClick={()=>setTopRange(range)}
                                        style={topRange == range ? style : {}}
                                    >
                                        {range}
                                    </button>
                                )
                            })}
                        </Dropdown>
                    }
                <button
                    onClick={(e) => setActiveButton("Rising")}
                    style={activeButton == "Rising" ? style : {}}>
                    <Icon iconName="AiOutlineRise"/>
                    Rising
                </button>
            </span>
           <Dropdown menuPlacement={{ right: 0 }} label={
                <>
                    {view=="Card" && <Icon iconName="RiLayoutRowLine"/>}
                    {view=="Classic" && <Icon iconName="ClassicIcon" />}
                    {view=="Compact" && <Icon iconName="CompactIcon" />}
                    <Icon iconName="FiChevronDown" />
                </>
           }>
                <button 
                    onClick={()=>setView("Card")}
                    style={view == "Card" ? style : {}}>
                    <Icon iconName="CardIcon"/>
                    Card
                </button>
                <button 
                    onClick={()=>setView("Classic")}
                    style={view == "Classic" ? style : {}}>
                    <Icon iconName="ClassicIcon"/>
                    Classic
                </button>
                <button 
                    onClick={()=>setView("Compact")}
                    style={view == "Compact" ? style : {}}>
                    <Icon iconName="CompactIcon"/>
                    Compact
                </button>
            </Dropdown> 
        </div>
    )
}

export default FeedFilter;