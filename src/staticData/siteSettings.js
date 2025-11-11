import LogoIcon from "@/components/icons/siteIcons/LogoIcon";
import AboutMeIcon from "@/components/icons/siteIcons/AboutMeIcon";
import BlogsIcon from "@/components/icons/siteIcons/BlogsIcon";
import ElementsIcon from "@/components/icons/siteIcons/ElementsIcon";
import FeedbackIcon from "@/components/icons/siteIcons/FeedbackIcon";
import HomeIcon from "@/components/icons/siteIcons/HomeIcon";
import PortfolioIcon from "@/components/icons/siteIcons/PortfolioIcon";
import ResumeIcon from "@/components/icons/siteIcons/ResumeIcon";
import ServicesIcon from "@/components/icons/siteIcons/ServicesIcon";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export const siteSettings = {
  logo: <LogoIcon />,
  headerMenus: [
    {
      id: 1,
      title: "HOME",
      selector: "#home",
      url: "/",
      Icon: <HomeIcon />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "ABOUT ME",
      selector: "#about",
      url: "/about",
      Icon: <AboutMeIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 3,
      title: "RESUME",
      selector: "#resume",
      url: "/resume",
      Icon: <ResumeIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 4,
      title: "PORTFOLIO",
      selector: "#portfolio",
      url: "/portfolio",
      Icon: <PortfolioIcon />,
      notVisibleRoutes: ["/blog", "/elements"],
    },
    {
      id: 5,
      title: "Elements",
      selector: "#elements",
      url: "/elements",
      Icon: <ElementsIcon />,
      notVisibleRoutes: ["/"],
    },
  ],
  headerBottom: {
    title: "CONTACT ME",
    url: "#contact",
  },
  
  footerItems: [
    {
      id: 1,
      Icon: <FaFacebookF />,
      url: "https://www.facebook.com/wmayhem/",
      tooltip: "Facebook",
    },
    {
      id: 2,
      Icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/marco-fernandez-46113916/",
      tooltip: "Linkedin",
    },
  ],
  themeData: {
    mode: "light",
    dir: "ltr",
  },
};
