import HappyCustomersIcon from "@/components/icons/home/HappyCustomersIcon";
import ProjectDoneIcon from "@/components/icons/home/ProjectDoneIcon";
import WorkingHours from "@/components/icons/home/WorkingHours";
import AwardsWinningIcon from "@/components/icons/home/AwardsWinningIcon";
import WebDevIcon from "@/components/icons/home/WebDevIcon";
import SeoServices from "@/components/icons/home/SeoServices";
import MediaMarketingIcon from "@/components/icons/home/MediaMarketingIcon";
import GraphicsIcon from "@/components/icons/home/GraphicsIcon";
import ContentWriting from "@/components/icons/home/ContentWriting";
import WebDesignIcon from "@/components/icons/home/WebDesignIcon";
import PhoneNumber from "@/components/icons/home/PhoneNumber";
import EmailIcon from "@/components/icons/home/EmailIcon";
import LocationIcon from "@/components/icons/home/LocationIcon";
import WebsiteIcon from "@/components/icons/home/WebsiteIcon";

import aboutImage from "../../../public/assets/images/20251109_143904.jpg";
import aboutImageDark from "../../../public/assets/images/20251109_143904.jpg";

import blog1Image from "../../../public/assets/images/blogs/blog2.webp";
import blog2Image from "../../../public/assets/images/blogs/blog1.webp";

import skill1Image from "../../../public/assets/images/skills/dev_374933258-icon.jpg";
import skill2Image from "../../../public/assets/images/skills/des_374933258-icon.jpg";
import skill3Image from "../../../public/assets/images/skills/wp_374933258-icon.jpg";
import skill4Image from "../../../public/assets/images/skills/lang_374933258-icon.jpg";

import feedback1Image from "../../../public/assets/images/testimonials/testimonial-thumb1.webp";
import feedback2Image from "../../../public/assets/images/testimonials/testimonial-thumb2.webp";
import feedback3Image from "../../../public/assets/images/testimonials/testimonial-thumb3.webp";
import feedback4Image from "../../../public/assets/images/testimonials/testimonial-thumb4.webp";

export const aboutMe = {
  aboutImage: aboutImage?.src,
  aboutImageDark: aboutImageDark?.src,
  name: "MARCO FERNANDEZ",
  designation: "WEB DESIGNER / DEVELOPER",
  desc: "I have extensive experience in developing websites and web apps, particularly for the new home builder industry. In recent years, I've been building software to ease the process of purchasing new homes within a highly competitive market, while at the same time maintaining existing corporate websites and community microsites (SPAs). "
    + "I started my career as a junior web developer in a small startup company shortly after graduating – while continuing to expand my skillset. Soon after I became lead developer on all web projects, responsible not only for the coding but for the branding and marketing as well. "
	+ "I continue to upgrade my skills. I'm currently studying other frameworks and tools to keep up with all the latest advancements in internet development.",
  aboutInfo: [
    {
      id: 1,
      title: "Brampton, Ontario",
      Icon: <LocationIcon viewBox="0 0 18 24" />,
      link: "",
    },
    {
      id: 2,
      title: "416 - 473 - 6210",
      Icon: (
        <PhoneNumber
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      link: "",
    },
    {
      id: 3,
      title: "marco@mayhemarts.com",
      Icon: (
        <EmailIcon
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      link: "",
    },
    {
      id: 1,
      title: "mayhemarts.com",
      Icon: (
        <WebsiteIcon
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
      ),
      link: "",
    },
  ],
  btnText: "DOWNLOAD RESUME",
};

function yearsWorked() {
	const startDate = new Date('2000-06-01'); // june 6th 2000
	const currentDate = new Date();

	return Math.abs(startDate.getYear() - currentDate.getYear()) ;
}

export const socialMediaLists = [
  {
    id: 1,
    title: "FACEBOOK",
    url: "https://www.facebook.com/wmayhem/",
  },
  {
    id: 2,
    title: "LINKEDIN",
    url: "https://www.linkedin.com/in/marco-fernandez-46113916/",
  }
];

export const funItems = [
  {
    id: 1,
    Svg: <ProjectDoneIcon />,
    startCount: 1,
    endCount: 146,
    title: "ACTIVE SITES",
  },
  {
    id: 2,
    Svg: <HappyCustomersIcon />,
    startCount: 1,
    endCount: 598,
    title: "HAPPY CUSTOMERS",
  },
  {
    id: 3,
    Svg: <WorkingHours />,
    startCount: 1,
    endCount: yearsWorked(),
    title: "YEARS EXPERIENCE",
  },
  {
    id: 4,
    Svg: <AwardsWinningIcon />,
    startCount: 1,
    endCount: 258,
    title: "AWARDS WON",
  },
];

export const expFirstCol = [
  {
    id: 1,
    range: "1995 - 1997",
    title: "Sheridan College",
    description: "Architectural Design",
  },
  {
    id: 2,
    range: "1999",
    title: "Toronto School of Business",
    description: "Application Development Certification",
  },
  {
    id: 3,
    range: "2004",
    title: "Humber College",
    description: "3D Post Production Certification",
  },
  {
    id: 4,
    range: "2009",
    title: "Humber College",
    description: "iOS Development",
  },
  {
    id: 5,
    range: "PRESENT",
    title: "CONTINUED",
    description: "React / NextJS / Typescript, Laravel, C#, Blender, Linux / UbuntuOS",
  },
];

export const expSecondCol = [
  {
    id: 1,
    range: "2005 - Present",
    title: "LEAD / SENIOR WEB DEVELOPER",
    description: "Core developer of new homes selling software, front-end / back-end development of corporate & microsites, database creation / forms & surveys, video & animations, touchscreen developer, website management ",
  },
  {
    id: 2,
    range: "2000 - 2003",
    title: "LEAD WEB DEVELOPER",
    description: "Lead developer of interactive websites, shopping carts, b2b, Windows database developer, interactive media displays, presentation creation",
  },
  {
    id: 3,
    range: "2000 - Present",
    title: "FREELANCE DESIGNER / DEVELOPER",
    description: "Development and maintenance of new and existing websites, UI/UX design, Wordpress editor, video & animations",
  },
];

export const services = [
  {
    id: 1,
    Icon: <WebDevIcon />,
    title: "WEB DEVELOPMENT",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 2,
    Icon: <SeoServices />,
    title: "SEO SERVICES",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 3,
    Icon: <MediaMarketingIcon />,
    title: "MEDIA MARKETING",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 4,
    Icon: <GraphicsIcon />,
    title: "GRAPHICS DESIGN",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 5,
    Icon: <ContentWriting />,
    title: "CONTENT WRITING",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 6,
    Icon: <SeoServices />,
    title: "SEO SERVICES",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
  {
    id: 7,
    Icon: <WebDesignIcon />,
    title: "WEB DESIGN",
    description:
      "Sentence structures, to generate Lorem Ipsum which looks. The generated Lorem Ipsum",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Publishing software like aldus including versions",
    tags: "TECHNOLOGY",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: blog1Image?.src,
    link: "#",
    slug: "publishing-software-like-aldus-including-versions",
  },
  {
    id: 2,
    title: "Learn how to create a business website using WordPress",
    tags: "TRASH",
    date: "18 DEC, 2020",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy...",
    image: blog2Image?.src,
    link: "#",
    slug: "learn-how-to-create-a-business-website-using-wordPress",
  },
];

export const contactInfo = [
  {
    id: 1,
    Icon: <PhoneNumber />,
    title: "PHONE",
    data1: "416-473-6210",
  },
  {
    id: 2,
    Icon: <EmailIcon />,
    title: "EMAIL",
    data1: "marco@mayhemarts.com",
  },
  {
    id: 3,
    Icon: <LocationIcon />,
    title: "LOCATION",
    data1: "Brampton, Ontario",
  },
  {
    id: 4,
    Icon: <WebsiteIcon />,
    title: "PORTFOLIO",
    data1: "mayhemarts.com",
  },
];

export const progresses = [
  {
    id: 1,
    title: "DEVELOPMENT",
    value: 100,
    image: skill1Image?.src,
  },
  {
    id: 2,
    title: "DESIGN",
    value: 85,
    image: skill2Image?.src,
  },
  {
    id: 3,
    title: "WORDPRESS",
    value: 90,
    image: skill3Image?.src,
  },
  {
    id: 4,
    title: "LANGUAGES",
    value: 75,
    image: skill4Image?.src,
  },
];

export const feebackUsers = [
  {
    id: 1,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 2,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 3,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 4,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 5,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 6,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 7,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 8,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 9,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 10,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 11,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 12,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 13,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 14,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 15,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 16,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 17,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 18,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 19,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 20,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 21,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "ESTHER HOWARD",
    designation: "UI DESIGNER",
    image: feedback1Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 22,
    speech:
      "Within the professional sphere, it is customary for both private individuals and corporate entities to formally commission the production of publications to needs.",
    name: "JHONE DOE",
    designation: "GRAPHICS DESIGNER",
    image: feedback2Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 23,
    speech:
      "In professional contexts, it is a standard practice for clients, whether they be private individuals or corporations, to place orders for the development and creation of bespoke.",
    name: "MIKE ANDERSON",
    designation: "WEB DESIGNER",
    image: feedback3Image?.src,
    alt: "Feedback Item Thumbnail",
  },
  {
    id: 24,
    speech:
      "In a professional context it often happens that private or corporate clients corder a publication to be made. In a professional context it often happens that private or corporate clients corder.",
    name: "MARK ANTENIO",
    designation: "WEB DEVELOPER",
    image: feedback4Image?.src,
    alt: "Feedback Item Thumbnail",
  },
];
