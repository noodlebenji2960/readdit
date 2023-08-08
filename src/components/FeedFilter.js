import React, { useEffect, useState } from "react";

import Dropdown from "./Dropdown"
import Icon from "./Icon";

import { getIP } from "../hooks/getIP";


const FeedFilter = (props) => {
    const [activeButton, setActiveButton] = useState()
    const [topRange, setTopRange] = useState("Today")
    const [location, setLocation] = useState()
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
        ["Everywhere",      "GLOBAL"],
        ["United States",   "US"],
        ["Argentina",       "AR"],
        ["Australia",       "AU"],
        ["Bulgaria",        "BG"],
        ["Canada",          "CA"],
        ["Chile",           "CL"],
        ["Columbia",        "CO"],
        ["Croatia",         "HR"],
        ["Czech Republic",  "CZ"],
        ["Finland",         "FI"],
        ["France",          "FR"],
        ["Germany",         "DE"],
        ["Greece",          "GR"],
        ["Hungary",         "HU"],
        ["Iceland",         "IS"],
        ["India",           "IN"],
        ["Ireland",         "IE"],
        ["Italy",           "IT"],
        ["Japan",           "JP"],
        ["Malaysia",        "MY"],
        ["Mexico",          "MX"],
        ["New Zealand",     "NZ"],
        ["Philippines",     "PH"],
        ["Poland",          "PL"],
        ["Portugal",        "PT"],
        ["Puerto Rico",     "PR"],
        ["Romania",         "RO"],
        ["Serbia",          "RS"],
        ["Singapore",       "SG"],
        ["Spain",           "ES"],
        ["Sweden",          "SE"],
        ["Taiwan",          "TW"],
        ["Thailand",        "TH"],
        ["Turkey",          "TR"],
        ["United Kingdom",  "UK"],
    ]

    const style = {
        fill: "var(--newCommunityTheme-button)",
        color: "var(--newCommunityTheme-button)",
        backgroundColor: "var(--newCommunityTheme-field)"
    }

    useEffect(() => {
        setLocation(getIP().then((data) => setHot(data.country_name)))
    }, [])

    useEffect(() => {

    })

    return (
        <div id="feedFilter" className="feedItem">
            <span>
                <button
                    onClick={() => {
                        setActiveButton("Best")
                    }}
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
                {activeButton == "Hot" &&
                    <Dropdown
                        scrollToIndex={countries.findIndex((e) => e[0] == hot)}
                        label={
                            <>
                                {hot}
                                <Icon iconName="FiChevronDown" />
                            </>
                        }>
                        {countries.map((ele) => {
                            return (
                                <button
                                    key={ele[0]}
                                    onClick={(event) => {
                                        props.fetchPopular(ele[1])
                                        setHot(ele[0])
                                    }}
                                    style={hot == ele[0]? style : {}}>
                                    {ele[0]}
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
                {activeButton == "Top" &&
                    <Dropdown
                        label={
                            <>
                                {topRange}
                                <Icon iconName="FiChevronDown" />
                            </>
                        }>
                        {ranges.map((range) => {
                            return (
                                <button
                                    onClick={() => setTopRange(range)}
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
                    <Icon iconName="AiOutlineRise" />
                    Rising
                </button>
            </span>
            <Dropdown menuPlacement={{ right: 0 }} label={
                <>
                    {view == "Card" && <Icon iconName="RiLayoutRowLine" />}
                    {view == "Classic" && <Icon iconName="ClassicIcon" />}
                    {view == "Compact" && <Icon iconName="CompactIcon" />}
                    <Icon iconName="FiChevronDown" />
                </>
            }>
                <button
                    onClick={() => setView("Card")}
                    style={view == "Card" ? style : {}}>
                    <Icon iconName="CardIcon" />
                    Card
                </button>
                <button
                    onClick={() => setView("Classic")}
                    style={view == "Classic" ? style : {}}>
                    <Icon iconName="ClassicIcon" />
                    Classic
                </button>
                <button
                    onClick={() => setView("Compact")}
                    style={view == "Compact" ? style : {}}>
                    <Icon iconName="CompactIcon" />
                    Compact
                </button>
            </Dropdown>
        </div>
    )
}

export default FeedFilter;