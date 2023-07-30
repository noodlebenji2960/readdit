import React, { useState, useEffect, useRef } from "react";

import Icon from "./Icon";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import SubMenu from "./SubMenu";
import FavoriteToggle from "./FavoriteToggle";

const Header = (props) => {


    return (
        <header>
            <button href="/">
                <Icon iconName="LogoIcon" />
                <div className="redditLogoText" />
            </button>
            <span id="mainNav">
                <Dropdown label={
                    <>
                        <Icon iconName="HiHome" />
                        <i>Home</i>
                        <Icon iconName="FiChevronDown" />
                    </>
                }>
                    <input id="header-subreddit-filter" placeholder="Filter" />
                    <div role="heading">Favorites</div>
                    <div role="heading">Your Communities</div>
                    <button>
                        <Icon iconName="IoAddSharp" />
                        Create Community
                    </button>
                    <div>
                        <button>
                            <Icon iconName="RSlashIcon" />
                            r/examplecommunity
                        </button>
                        <FavoriteToggle state={true} />
                    </div>
                    <div role="heading">Following</div>
                    <div>
                        <button>
                            <Icon iconName="RSlashIcon" />
                            r/examplefollow
                        </button>
                        <FavoriteToggle state={true} />
                    </div>
                    <div role="heading">Feeds</div>
                    <button>
                        <Icon iconName="HiHome" />
                        Home
                    </button>
                    <button>
                        <Icon iconName="BsArrowUpRightCircle" />
                        Popular
                    </button>
                    <button>
                        <Icon iconName="IoAddSharp" />
                        All
                    </button>
                    <div role="heading">Other</div>
                    <button>
                        <Icon iconName="ProfilePictureIcon" />
                        User Settings
                    </button>
                    <button>
                        <Icon iconName="ProfilePictureIcon" />
                        Messages
                    </button>
                    <button>
                        <Icon iconName="IoAddSharp" />
                        Create Post
                    </button>
                    <button>
                        <Icon iconName="IoNotificationsOutline" />
                        Notifications
                    </button>
                    <button>
                        <Icon iconName="CoinIcon" />
                        Coins
                    </button>
                    <button>
                        <Icon iconName="BiShieldQuarter" />
                        Premium
                    </button>
                    <button>
                        <Icon iconName="IoShirtOutline" />
                        Avatar
                    </button>
                </Dropdown>
            </span>
            <div id="search-container">
                <form autoComplete="off" role="search" method="get">
                    <label htmlFor="header-search-bar">
                        <Icon iconName="BsSearch" />
                    </label>
                    <input
                        type="search"
                        id="header-search-bar"
                        placeholder="Search Reddit"
                    />
                    <button>
                        <Icon iconName="AiOutlineCloseCircle" />
                    </button>
                </form>
            </div>
            <div>
                <button>
                    <Icon iconName="BsArrowUpRightCircle" />
                </button>
                <button>
                    <Icon iconName="IoChatbubbleEllipsesOutline" />
                </button>
                <button>
                    <Icon iconName="IoNotificationsOutline" />
                </button>
                <button>
                    <Icon iconName="IoAddSharp" />
                </button>
                <button>
                    <Icon iconName="IoMegaphoneOutline" />
                </button>
                <Dropdown
                    menuPlacement={{ right: 0 }}
                    label={<>
                        <Icon iconName="ProfilePictureIcon" />
                        <div className="user">
                            <i>noodlebenji</i>
                            <span>
                                <Icon iconName="KarmaIcon" />
                                <i>1.2k karma</i>
                            </span>
                        </div>
                        <Icon iconName="FiChevronDown" />
                    </>}>
                    <span>
                        <div role="heading">
                            <Icon iconName="CgProfile" />
                            My Stuff
                        </div>
                        <button>
                            Online Status
                            <Slider />
                        </button>
                        <button>
                            Profile
                        </button>
                        <button>
                            Create Avatar
                        </button>
                        <button>
                            User Settings
                        </button>
                    </span>
                    <span>
                        <div role="heading">
                            <Icon iconName="ViewOptionsIcon" />
                            View Options
                        </div>
                        <button onClick={(e)=>{
                            props.toggleDarkMode(e);
                        }}>
                            Dark Mode
                            <Slider state={props.darkModeToggle}/>
                        </button>
                    </span>
                    <button>
                        <Icon iconName="RSlashIcon" />
                        Create a Community
                    </button>
                    <button>
                        <Icon iconName="IoMegaphoneOutline" />
                        Adverise on Reddit
                    </button>
                    <button>
                        <Icon iconName="CoinIcon" />
                        Coins
                    </button>
                    <button>
                        <Icon iconName="BiShieldQuarter" />
                        Premium
                    </button>
                    <SubMenu label={<>
                        <span>
                            <Icon iconName="TbTelescope" />
                            Explore
                        </span>
                        <Icon iconName="FiChevronDown" />
                    </>}>
                        <SubMenu label={<>
                            Gaming
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>Valheim</button>
                            <button>Genshin Impact</button>
                            <button>Minecraft</button>
                            <button>Pokimane</button>
                            <button>Halo Infinite</button>
                            <button>Call of Duty:Warzone</button>
                            <button>Path of Exile</button>
                            <button>Hollow Knight Silks...</button>
                            <button>Escape from Tarkov</button>
                            <button>Watch Dogs:Legion</button>
                        </SubMenu>
                        <SubMenu label={<>
                            Sports
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>NFL</button>
                            <button>NBA</button>
                            <button>Megan Anderson</button>
                            <button>Atlanta Hawks</button>
                            <button>Los Angeles Lakers</button>
                            <button>Boston Celtics</button>
                            <button>Arsenal F.C.</button>
                            <button>Philadelphia 79ers</button>
                            <button>Premier League</button>
                            <button>UFC</button>
                        </SubMenu>
                        <SubMenu label={<>
                            Business, Economic...
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>GameStop</button>
                            <button>Moderna</button>
                            <button>Pfizer</button>
                            <button>Johnson & Johnson</button>
                            <button>AstraZeneca</button>
                            <button>Walgreens</button>
                            <button>Best Buy</button>
                            <button>Novavax</button>
                            <button>SpaceX</button>
                            <button>Tesla</button>
                        </SubMenu>
                        <SubMenu label={<>
                            Crypto
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>Cardano</button>
                            <button>Dogecoin</button>
                            <button>Algorand</button>
                            <button>Bitcoin</button>
                            <button>Litecoin</button>
                            <button>Basic Attention Token</button>
                            <button>Bitcoin Cash</button>
                        </SubMenu>
                        <SubMenu label={<>
                            Television
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>The Real Housewive...</button>
                            <button>The Bachelor</button>
                            <button>Sister Wives</button>
                            <button>90 Day Fiance</button>
                            <button>Wife Swap</button>
                            <button>The Amazing Race...</button>
                            <button>Married at First Sight</button>
                            <button>The Real Housewive...</button>
                            <button>My 600-lb Life</button>
                            <button>Last Week Tonight ...</button>
                        </SubMenu>
                        <SubMenu label={<>
                            Celebrity
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>Kim Kardashian</button>
                            <button>Doja Cat</button>
                            <button>Iggy Azalea</button>
                            <button>Anya Taylor-Joy</button>
                            <button>Jamie Lee Curtis</button>
                            <button>Natalie Portman</button>
                            <button>Henry Cavill</button>
                            <button>Millie Bobby Brown</button>
                            <button>Tom Hiddleston</button>
                            <button>Keanu Reeves</button>
                        </SubMenu>
                        <SubMenu label={<>
                            More Topics
                            <Icon iconName="FiChevronDown" />
                        </>}>
                            <button>Animals and Pets</button>
                            <button>Art</button>
                            <button>Cars and Motor Vehi...</button>
                            <button>Crafts and DIY</button>
                            <button>Culture, Race and E...</button>
                            <button>Ethics and Philosophy</button>
                            <button>Fashion</button>
                            <button>Food and Drink</button>
                            <button>History</button>
                            <button>Hobbies</button>
                            <button>Law</button>
                            <button>Learning and Educa...</button>
                            <button>Military</button>
                            <button>Movies</button>
                            <button>Music</button>
                            <button>Place</button>
                            <button>Podcasts and Strea...</button>
                            <button>Politics</button>
                            <button>Programming</button>
                            <button>Reading, Writing, a...</button>
                            <button>Religon and Spiritu...</button>
                            <button>Science</button>
                            <button>Science</button>
                            <button>Tabletop Games</button>
                            <button>Technology</button>
                            <button>Travel</button>
                        </SubMenu>
                    </SubMenu>
                    <button>
                        <Icon iconName="TbHelp" />
                        Help Center
                    </button>
                    <SubMenu label={<>
                        <span>
                            <Icon iconName="AiOutlineInfoCircle" />
                            More
                        </span>
                        <Icon iconName="FiChevronDown" />
                    </>}>
                        <button>Reddit iOS</button>
                        <button>Reddit Android</button>
                        <button>Rereddit</button>
                        <button>Best Communities</button>
                        <button>Communities</button>
                        <button>About Reddit</button>
                        <button>Blog</button>
                        <button>Careers</button>
                        <button>Press</button>
                        <button>Visit Old Reddit</button>
                    </SubMenu>
                    <SubMenu label={<>
                        <span>
                            <Icon iconName="TermsAndConditionsIcon" />
                            Terms & Policies
                        </span>
                        <Icon iconName="FiChevronDown" />
                    </>}>
                        <button>User Agreement</button>
                        <button>Privacy Policy</button>
                        <button>Content Policy</button>
                        <button>Moderator Code of Conduct</button>
                    </SubMenu>
                    <button>
                        <Icon iconName="IoLogOutOutline" />
                        Log Out
                    </button>
                </Dropdown>
            </div>
        </header>
    )
}

export default Header;