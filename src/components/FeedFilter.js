import React, { useState} from "react";

import Icon from "./Icon";


const FeedFilter = () => {
    const [activeButton, setActiveButton] = useState()
    const [topRange, setTopRange] = useState("Today")
    const [view, setView] = useState("Card")

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

    const style = {
        fill: "var(--newCommunityTheme-button)",
        color: "var(--newCommunityTheme-button)",
        backgroundColor: "var(--newCommunityTheme-field)"
    }

    return (
        <div id="feedFilter" className="feedItem">
            <span>
                <button
                    onClick={() => setActiveButton("Best")}
                    style={activeButton == "Best" ? style : {}}>
                    <Icon iconName="IoRocketOutline" />
                    Best
                </button>
                <span>
                    <button
                        onClick={(e) => setActiveButton("Hot")}
                        style={activeButton == "Hot" ? style : {}}>
                        <Icon iconName="BsFire" />
                        Hot
                    </button>
                    {activeButton=="Hot" &&
                        <button onMouseDown={(e)=>toggleMenu(e, countriesRef)}>
                            Everywhere
                            <Icon iconName="FiChevronDown"/>
                        </button>
                    }
                    <div role="menu">
                        {countries.map((e)=>{
                            return (
                                <button key={e}>
                                    {e}
                                </button>
                            )
                        })}
                    </div>
                </span>
                <button
                    onClick={() => setActiveButton("New")}
                    style={activeButton == "New" ? style : {}}>
                    <Icon iconName="TiStarburstOutline" />
                    New
                </button>
                <span>
                    <button
                        onClick={(e) => setActiveButton("Top")}
                        style={activeButton == "Top" ? style : {}}>
                        <Icon iconName="MdBarChart" />
                        Top
                    </button>
                    {activeButton=="Top" &&
                        <button>
                            Today
                            <Icon iconName="FiChevronDown"/>
                        </button>
                    }
                    <div role="menu">
                        <button
                            onClick={()=>setTopRange("Now")}
                            style={topRange == "Now" ? style : {}}>
                            Now
                        </button>
                        <button
                            onClick={()=>setTopRange("Today")}
                            style={topRange == "Today" ? style : {}}>
                            Today
                        </button>
                        <button
                            onClick={()=>setTopRange("This Week")}
                            style={topRange == "This Week" ? style : {}}>
                            This Week
                        </button>
                        <button
                            onClick={()=>setTopRange("This Month")}
                            style={topRange == "This Month" ? style : {}}>
                            This Month
                        </button>
                        <button
                            onClick={()=>setTopRange("This Year")}
                            style={topRange == "This Year" ? style : {}}>
                            This Year
                        </button>
                        <button
                            onClick={()=>setTopRange("All Time")}
                            style={topRange == "All Time" ? style : {}}>
                            All Time
                        </button>
                    </div>
                </span>
                <button
                    onClick={(e) => setActiveButton("Rising")}
                    style={activeButton == "Rising" ? style : {}}>
                    <Icon iconName="AiOutlineRise"/>
                    Rising
                </button>
            </span>
            <span>
                <button>
                    {view=="Card" && <Icon iconName="RiLayoutRowLine"/>}
                    {view=="Classic" && <Icon iconName="ClassicIcon" />}
                    {view=="Compact" && <Icon iconName="CompactIcon" />}
                    <Icon iconName="FiChevronDown" />
                </button>
                <div role="menu">
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
                </div>
            </span>
        </div>
    )
}

export default FeedFilter;