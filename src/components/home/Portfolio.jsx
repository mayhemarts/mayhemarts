import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import CustomModal from "../shared/CustomModal";
import {
	FaYoutube,
	FaImage,
	FaSoundcloud,
	FaVimeoSquare,
	FaImages,
	FaFingerprint,
	FaWordpress,
	FaCode,
	FaTablet,
	FaTabletAlt
} from "react-icons/fa";
import useThemeContext from "@/hooks/useThemeContext";

import Image from "next/image";

// Simplii
import imageSimplii_1 from "../../../public/assets/images/portfolio/simplii/simplii-splash.jpg";
import imageSimplii_2 from "../../../public/assets/images/portfolio/simplii/simplii-web.jpg";
import imageSimplii_3 from "../../../public/assets/images/portfolio/simplii/simplii-front.jpg";
import imageSimplii_4 from "../../../public/assets/images/portfolio/simplii/simplii-admin.jpg";

// Mosaik
import imageMosaik_1 from "../../../public/assets/images/portfolio/mosaik/mosaik-splash.jpg";
import imageMosaik_2 from "../../../public/assets/images/portfolio/mosaik/mosaik-web1.jpg";
import imageMosaik_3 from "../../../public/assets/images/portfolio/mosaik/mosaik-web2.jpg";
import imageMosaik_4 from "../../../public/assets/images/portfolio/mosaik/mosaik-portal.jpg";

// Caliber
import imageCaliber_1 from "../../../public/assets/images/portfolio/caliber/caliber-splash.jpg";
import imageCaliber_2 from "../../../public/assets/images/portfolio/caliber/caliber-web1.jpg";
import imageCaliber_3 from "../../../public/assets/images/portfolio/caliber/caliber-web2.jpg";


// Quadcam Christmas
import videoQuadcam from "../../../public/assets/images/portfolio/video-quadcam/quadcam-christmas.jpg";
// SG7 Christmas
import videoSg7 from "../../../public/assets/images/portfolio/video-sg7/video-sg7-splash.jpg";

// Lou Grossi
import imageLouGrossi_1 from "../../../public/assets/images/portfolio/lougrossi/lougrossi-splash.jpg";
import imageLouGrossi_2 from "../../../public/assets/images/portfolio/lougrossi/lougrossi-web1.jpg";
import imageLouGrossi_3 from "../../../public/assets/images/portfolio/lougrossi/lougrossi-web2.jpg";


// BWHomes
import imageBWHomes_1 from "../../../public/assets/images/portfolio/bwhomes/bwhomes-splash.jpg";
import imageBWHomes_2 from "../../../public/assets/images/portfolio/bwhomes/bwhomes-web1.jpg";
import imageBWHomes_3 from "../../../public/assets/images/portfolio/bwhomes/bwhomes-web2.jpg";
import imageBWHomes_4 from "../../../public/assets/images/portfolio/bwhomes/bwhomes-web3.jpg";

// Royalpark
import imageRoyalpark_1 from "../../../public/assets/images/portfolio/royalpark/royalpark-splash.jpg";
import imageRoyalpark_2 from "../../../public/assets/images/portfolio/royalpark/royalpark-web1.jpg";
import imageRoyalpark_3 from "../../../public/assets/images/portfolio/royalpark/royalpark-web2.jpg";

// Foremont Drywall
import imageForemont_1 from "../../../public/assets/images/portfolio/foremontdrywall/foremontdrywall-splash.jpg";
import imageForemont_2 from "../../../public/assets/images/portfolio/foremontdrywall/foremontdrywall-web1.jpg";

// Shane Baghai
import imageShaneBaghai_1 from "../../../public/assets/images/portfolio/shanebaghai/shanebaghai-splash.jpg";
import imageShaneBaghai_2 from "../../../public/assets/images/portfolio/shanebaghai/shanebaghai-web1.jpg";
import imageShaneBaghai_3 from "../../../public/assets/images/portfolio/shanebaghai/shanebaghai-web2.jpg";

// Royal Vintage - Aurora Valley
import imageRoyalVintage_1 from "../../../public/assets/images/portfolio/royalvintage-aurora-valley/touchscreen-aurora-valley-splash.jpg";
import imageRoyalVintage_2 from "../../../public/assets/images/portfolio/royalvintage-aurora-valley/touchscreen-aurora-valley-siteplan.jpg";
import imageRoyalVintage_3 from "../../../public/assets/images/portfolio/royalvintage-aurora-valley/touchscreen-aurora-valley-pages.jpg";

// The Cooperhaus
import imageCooperhaus_1 from "../../../public/assets/images/portfolio/thecooperhaus/thecooperhaus-splash.jpg";
import imageCooperhaus_2 from "../../../public/assets/images/portfolio/thecooperhaus/thecooperhaus-web1.jpg";


const Portfolio = () => {
	const { rtl } = useThemeContext();
	const [_marginTop, setMarginTop] = useState("60px");
	const isMobile = useMediaQuery("(max-width: 592px)");
	const [active, setActive] = useState("all");

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState('');
	const [selectedTitle, setSelectedTitle] = useState('');
	const [selectedCopy, setSelectedCopy] = useState('');
	const [selectedClient, setSelectedClient] = useState('');
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedUrl, setSelectedUrl] = useState('');
	const [selectedVideo, setSelectedVideo] = useState('');

	const openModal = (portfolio) => {
		setSelectedImage(portfolio.featuredImage);
		setSelectedTitle(portfolio.title);
		setSelectedCopy(portfolio.copy);
		setSelectedClient(portfolio.client);
		setSelectedDate(portfolio.dateCompleted);
		setSelectedUrl(portfolio.url);
		setSelectedVideo(portfolio.video);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setSelectedImage(null);
		setSelectedTitle(null);
		setSelectedCopy(null);
		setSelectedClient(null);
		setSelectedDate(null);
		setSelectedUrl(null);
		setSelectedVideo(null);
	};

	useEffect(() => {
		if (isMobile) {
			setMarginTop("0px");
		} else {
			setMarginTop("60px");
		}
	}, [isMobile]);

	const menuLists = [
		{
			label: "All",
			value: "all",
		},
		{
			label: "Web",
			value: "portfolio_web",
		},
		{
			label: "App/Touchscreen",
			value: "portfolio_app",
		},
		{
			label: "Wordpress",
			value: "portfolio_wp",
		},
		{
			label: "Media",
			value: "portfolio_media",
		},
	];

	const portfolios = [
		{
			id: 1,
			hasSlides: true,
			types: ["portfolio_web", "portfolio_app", "portfolio_media"],

			featuredImage: "/assets/images/portfolio/simplii/simplii-modal.jpg",
			title: "Simplii Sold",
			client: "Maverick Graphics Inc.",
			copy: "A sales tool created for new home builders and realtors to simplify the buying process of new homes. The application ties in the 3rd party signing tools including Docusign to legitimize the purchase process and preps documents for lawyer reviews. This project also included a customer website, video promo, video guides and tours as well as the frontend touch display and backend administrative access.",
			url: "https://simpliisold.com/",
			dateCompleted: "Completed: March 2024",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageSimplii_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageSimplii_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageSimplii_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageSimplii_4?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>App / Web / Touchscreen</p>
						</div>
					</Link>
					<div className="type">
						<FaTabletAlt size={35} />
					</div>
				</>
			)
		},
		{
			id: 2,
			hasSlides: true,
			types: ["portfolio_web", "portfolio_app"],

			featuredImage: "/assets/images/portfolio/mosaik/mosaik-modal.jpg",
			title: "Mosaik Homes Corporate Website",
			client: "Mosaik Homes",
			copy: "An innovative new homes builder committed to the traditions of excellence in timeless architecture and construction quality. Website also has connectivity to 3rd party CRMs via APIs, internal databases, and mass email marketing campaigns.",
			url: "https://mosaikhomes.com/",
			dateCompleted: "Completed: September 2023",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageMosaik_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageMosaik_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageMosaik_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageMosaik_4?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web / App</p>
						</div>
					</Link>
					<div className="type">
						<FaCode size={35} />
					</div>
				</>
			)
		},
		{
			id: 3,
			hasSlides: true,
			types: ["portfolio_web"],

			featuredImage: "/assets/images/portfolio/caliber/caliber-modal.jpg",
			title: "Caliber Homes Corporate Website",
			client: "Caliber Homes",
			copy: "Caliber Homes is a new home builder comprised of hand-picked professionals who are committed not to being the biggest but to being the very best at what they do. ",
			url: "https://caliberhomes.ca/",
			dateCompleted: "Completed: January 2024",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageCaliber_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageCaliber_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageCaliber_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web</p>
						</div>
					</Link>
					<div className="type">
						<FaCode size={35} />
					</div>
				</>
			)
		},
		{
			id:4,
			types: ["portfolio_media"],
			video: "https://www.youtube.com/watch?v=-VdgC-D12Y0",
			image: videoQuadcam?.src,
			tags: "Video & Audio / Eblast",

			title: "Christmas Video Card",
			client: "Quadcam Developments",
			copy: "A beautifully nostalgic video Christmas card sent to all registrants and purchasers of Quadcam Developments by email campaign.",
			dateCompleted: "Completed: December 2024",

			IconType: <FaYoutube size={35} />,
		},
		{
			id:5,
			types: ["portfolio_media"],
			video: "https://www.youtube.com/shorts/ZWIj7kIMN2E",
			image: videoSg7?.src,
			tags: "Video / Social Media",

			title: "Video for Social Media",
			client: "Mosaik Homes",
			copy: "Drone footage over Woodbridge Ontario with animated hotspots used for social media campaigns.",
			dateCompleted: "Completed: January 2023",

			IconType: <FaYoutube size={35} />,
		},
		{
			id: 6,
			hasSlides: true,
			types: ["portfolio_web", "portfolio_wp"],

			featuredImage: "/assets/images/portfolio/lougrossi/lougrossi-modal.jpg",
			title: "Professional Website of Lou Grossi",
			client: "Lou Grossi",
			copy: "Lou Grossi is an accomplished business leader with nearly 40 years of experience in the real estate industry. Owner and Broker of Record, Intercity Realty Inc.",
			url: "https://www.lougrossi.com/",
			dateCompleted: "Completed: April 2025",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageLouGrossi_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageLouGrossi_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageLouGrossi_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web / WordPress</p>
						</div>
					</Link>
					<div className="type">
						<FaWordpress size={35} />
					</div>
				</>
			),
			// marginTop: marginTop
		},
		{
			id: 7,
			hasSlides: true,
			types: ["portfolio_web"],

			featuredImage: "/assets/images/portfolio/bwhomes/bwhomes-modal.jpg",
			title: "Bayview Wellington Corporate Website",
			client: "Bayview Wellington Homes",
			copy: "Throughout Southern Ontario, the Bayview-Wellington team has been instrumental in high rise, townhome, bungalow, semi-detached and estate home development and construction.",
			url: "https://bwhomes.ca/",
			dateCompleted: "Completed: April 2024",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageBWHomes_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageBWHomes_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageBWHomes_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageBWHomes_4?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web</p>
						</div>
					</Link>
					<div className="type">
						<FaCode size={35} />
					</div>
				</>
			),
		},
		{
			id: 8,
			hasSlides: true,
			types: ["portfolio_web", "portfolio_wp"],

			featuredImage: "/assets/images/portfolio/royalpark/royalpark-modal.jpg",
			title: "Royalpark Corporate Website",
			client: "Royalpark Homes",
			copy: "For over 40 years Royalpark Homes has been dedicated to providing every homeowner with a pleasurable home buying experience while providing a quality product in Ontario.",
			url: "https://royalpark.com/",
			dateCompleted: "Completed: September 2020",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageRoyalpark_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageRoyalpark_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageRoyalpark_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web / WordPress</p>
						</div>
					</Link>
					<div className="type">
						<FaWordpress size={35} />
					</div>
				</>
			),
		},
		{
			id: 9,
			hasSlides: true,
			types: ["portfolio_web"],

			featuredImage: "/assets/images/portfolio/foremontdrywall/foremontdrywall-modal.jpg",
			title: "Foremont Drywall",
			client: "Foremont Drywall Contracting",
			copy: "Drywall contracting company with over 30 years experience servicing Ontario. From large-scale residential communities to commercial and institutional developments.",
			dateCompleted: "In Development",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageForemont_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageForemont_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web / In Development</p>
						</div>
					</Link>
					<div className="type">
						<FaCode size={35} />
					</div>
				</>
			),
		},
		{
			id: 10,
			hasSlides: true,
			types: ["portfolio_web"],

			featuredImage: "/assets/images/portfolio/shanebaghai/shanebaghai-modal.jpg",
			title: "Shane Baghai",
			client: "Shane Baghai Group of Companies ",
			copy: "Award winning luxury home developer with over 50 years experience. Transformed Toronto's landscape delivering bespoke custom homes, luxury condominiums, and vibrant communities.",
			url: "https://shanebaghai.ca",
			dateCompleted: "Completed: February 2025",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageShaneBaghai_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageShaneBaghai_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageShaneBaghai_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web</p>
						</div>
					</Link>
					<div className="type">
						<FaCode size={35} />
					</div>
				</>
			),
		},
		{
			id: 11,
			hasSlides: true,
			types: ["portfolio_app"],

			featuredImage: "/assets/images/portfolio/royalvintage-aurora-valley/aurora-valley-modal.jpg",
			title: "Aurora Valley Estates",
			client: "Royal Vintage Homes",
			copy: "Currently in development. Microsite for a new community being developed in Downtown Grimsby.",
			dateCompleted: "Completed: May 2025",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageRoyalVintage_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageRoyalVintage_2?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src={imageRoyalVintage_3?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Touchscreen</p>
						</div>
					</Link>
					<div className="type">
						<FaTabletAlt size={35} />
					</div>
				</>
			),
		},
		{
			id: 12,
			hasSlides: true,
			types: ["portfolio_web"],

			featuredImage: "/assets/images/portfolio/thecooperhaus/thecooperhaus-modal.jpg",
			title: "The Cooperhaus",
			client: "Innovo Matrix Inc.",
			copy: "Currently in development. Microsite for a new community being developed in Downtown Grimsby.",
			url: "https://thecooperhaus.ca",
			dateCompleted: "Completed: October 2025",

			Section: (
				<>
					<div className="item-slider">
						<Swiper
							dir={rtl ? "ltr" : "ltr"}
							grabCursor={true}
							effect={"creative"}
							creativeEffect={{
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							}}
							pagination={{
								clickable: true,
							}}
							freeMode={true}
							modules={[EffectCreative, Pagination, Autoplay]}
							className="mySwiper3"
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
								stopOnLastSlide: false,
								waitForTransition: false,
							}}
							loop={true}
						>
							<SwiperSlide>
								<Image
									src={imageCooperhaus_1?.src}
									alt="Portfolio Item"
									width={380}
									height={510}
									className="img-fluid w-100"
								/>
							</SwiperSlide>
							<SwiperSlide>
				<Image
					src={imageCooperhaus_2?.src}
					alt="Portfolio Item"
					width={380}
					height={510}
					className="img-fluid w-100"
				/>
							</SwiperSlide>
						</Swiper>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Web</p>
						</div>
					</Link>
					<div className="type">
						<FaCode size={35} />
					</div>
				</>
			),
		},

	];



	const imageExtensions = [
		"jpg",
		"jpeg",
		"png",
		"gif",
		"bmp",
		"tiff",
		"webp",
		"svg",
		"ico",
		"jfif",
	];

	const containsImageExtension = imageExtensions.some((extension) =>
		selectedImage?.endsWith(`.${extension}`)
	);

	const filteredPortfolios = portfolios.filter((portfolio) => {
		return active === "all" || portfolio.types.includes(active);
	});

	return (
		<div className="portfolio" data-title="Portfolio" id="portfolio">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>Portfolio</span>
					</h2>
				</div>

				<div className="portfolio-wrapper">
					<ul className="filter-button">
						{menuLists?.map((item, i) => (
							<li
								key={i}
								className={active === item.value ? "active" : ""}
								onClick={() => setActive(item.value)}
							>
								{item?.label}
							</li>
						))}
					</ul>
					<div className="portfolio-inner row gallery_zoom">
						<AnimatePresence>
							{filteredPortfolios?.map((portfolio) =>
								// portfolio?.id !== 5 ? (
								!portfolio?.hasSlides ? (
									<motion.div
										key={portfolio?.id}
										style={{ transformOrigin: "left bottom" }}
										className="col-6 col-md-4 portfolio-item design_portfolio brand_portfolio"
										layout
										initial={{ opacity: 0, rotate: -20 }}
										animate={{ opacity: 1, rotate: 0 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.4 }}
									>
										<div
											className="item"
											// style={{ marginTop: (portfolio?.marginTop && active === "all") ? portfolio?.marginTop : "" }}
										>
											<div
												onClick={() => openModal(portfolio)}
												className="full_link popup-vimeo"
											>

												<Image
													src={portfolio.image}
													alt="Portfolio Item"
													width={380}
													height={510}
													className="img-fluid"
												/>
											</div>
											<Link href="#">
												<div className="item-label">
													<p> {portfolio.tags} </p>
												</div>
											</Link>
											<div className="type">{portfolio.IconType}</div>
										</div>
									</motion.div>
								) : (
									<motion.div
										style={{ transformOrigin: "left bottom" }}
										className="col-6 col-md-4 portfolio-item html_portfolio graphics_portfolio brand_portfolio"
										key={portfolio?.id}
										layout
										initial={{ opacity: 0, rotate: -20 }}
										animate={{ opacity: 1, rotate: 0 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.4 }}
									>
										<div
											className="item"
											// style={{ marginTop: (portfolio?.marginTop && active === "all") ? portfolio?.marginTop : "" }}
										>
											<div
												onClick={() => openModal(portfolio)}
												className="full_link"
											>

												{portfolio?.Section}
											</div>
										</div>
									</motion.div>
								)
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>

			<CustomModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				containsImageExtension={containsImageExtension}
			>
				{selectedVideo && (
					<div className="h-100 text-center">

						{ selectedVideo && <iframe
							style={{ position: "relative" }}
							title="Vimeo Video"
							src={selectedVideo}
							width="100%"
							height="100%"
							allowFullScreen
						></iframe> }

						<div className="text-white" style={{ padding:'20px' }}>
							<h1 className="text-white mb-4">{selectedTitle}</h1>
							<p style={{ color:"#dfdfdf" }}>{selectedCopy}</p>
							{ selectedDate && <p style={{ color:"#a0a0a0", fontSize:"80%" }}>{selectedDate}</p> }
							{ selectedClient && <p style={{ color:"#adadad", fontSize:"80%" }}>Client: {selectedClient}</p> }
						</div>
						
						<button
							className="mfp-close"
							onClick={closeModal}
							style={{ position: "absolute" }}
						>
							&times;
						</button>
					</div>
				)}

				{selectedImage && containsImageExtension && (
					<div>
						<div className="d-flex justify-content-center">
							<div style={{ position: "relative", textAlign:"center", maxWidth:"800px" }}>
								<Image
									src={selectedImage}
									alt="Modal image"
									width={800}
									height={417}
									className="img-fluid"
									style={{ padding:'20px' }}
								></Image>
								
								<div className="text-white" style={{ padding:'20px' }}>
									<h1 className="text-white mb-4">{selectedTitle}</h1>
									<p style={{ color:"#dfdfdf" }}>{selectedCopy}</p>
									{ selectedDate && <p style={{ color:"#a0a0a0", fontSize:"80%" }}>{selectedDate}</p> }
									{ selectedClient && <p style={{ color:"#adadad", fontSize:"80%" }}>Client: {selectedClient}</p> }
									{ selectedUrl && <Link target="_blank" href={selectedUrl} style={{ color:"#adfdad", fontSize:"80%" }}>{selectedUrl}</Link> }
								</div>
				
								<button
									className="mfp-close"
									onClick={closeModal}
									style={{ position: "absolute" }}
								>
									&times;
								</button>
							</div>
						</div>
					</div>
				)}


			</CustomModal>
		</div>
	);
};

export default Portfolio;
