import { title } from "process";

export const navItems = [
  { name: "About", link: "./#about" },
  { name: "Projects", link: "./#projects" },
  { name: "Testimonials", link: "./#testimonials" },
  { name: "Contact", link: "./#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "h-full w-full absolute -right-0 opacity-60",
    titleClassName: "justify-end",
    img: "/Frame 1261153040.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My design up to date.",
    description: "I always keep ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech-driven designer with a focus on creativity.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently designing an E-com Product.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 ",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/qq.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s work on a project together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Food2Go Case Study",
    des: "Food2Go makes your favorite meals accessible with ease and speed. Order what makes you happy with just a tap!",
    img: "/image1.png",
    iconLists: ["/figma.svg", "/adobeXD.svg", "/adobePhoto.svg", "/capcut.svg"],
    link: "./Food2Go",
  },
  {
    id: 2,
    title: "Stitch Game Review Platform",
    des: "A combination of Steam & Twitch. Stitch not only lets users view and review games but also gives a platform for streamers to stream their favourite games!",
    img: "/image2.png",
    iconLists: ["/figma.svg", "/adobeXD.svg", "/adobePhoto.svg", "/capcut.svg"],
    link: "./Stitch",
  },
  {
    id: 3,
    title: "Ardonyx Brand Identity Kit",
    des: "ARDONYX is an anime store born from a love of nostalgia and self-expression.",
    img: "/image3.png",
    iconLists: ["/figma.svg", "/adobeXD.svg", "/adobePhoto.svg", "/capcut.svg"],
    link: "./Ardonyx",
  },
  {
    id: 4,
    title: "Ardonyx Ecommerce Platform",
    des: "ARDONYX is an anime born store which lets you carry your favorite anime moments with you, blending the past and present in a way that’s personal, stylish, and timeless.",
    img: "/image4.png",
    iconLists: ["/figma.svg", "/adobeXD.svg", "/adobePhoto.svg", "/capcut.svg"],
    link: "https://www.figma.com/proto/RAWnKOnCO6uxxqX1ugyfMc/Ardonyx?page-id=0%3A1&node-id=337-5480&node-type=frame&viewport=770%2C1975%2C0.13&t=7sByqbhd4gHEteRM-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=337%3A5480",
    target: "_blank",
  },
];

export const testimonials = [
  {
    quote: `Ayema has shown strong performance in designing and optimizing digital experiences. She has created user-friendly interfaces, improving user experience and positively impacting our digital presence. Her logo and identity work contributed effectively to our branding. Ayema’s collaboration with cross-functional teams has supported successful project completion. She is a skilled and dependable designer, recommended for any project or senior UI/UX role.`,
    name: "Adam Oliver Kollar",
    title: "CEO Of Grew Studio",
    image: "./imageR.png",
  },
  {
    quote: `Ayema did a great job. She got it over in half the time I was expecting. I asked about a small revisions and it was completed the same day. The quality and communication was all 5 star. I will use again!`,
    name: "Jason Cossetti",
    title: "CEO of Colfax Group Real Estate Services",
    image: "./imageR2.png",
  },
  {
    quote: `My team and I worked with Ayema on our website, and her communication was excellent from start to finish. She was attentive, quick to respond, and always kept us in the loop. Her commitment to delivering exactly what we needed was evident in every step of the process. She’s passionate about her work and dedicated to creating a final product that meets expectations. I highly recommend Ayema for anyone looking for a reliable and talented designer!`,
    name: "Sporisi Alexandru",
    title: "CEO of Ardonyx",
    image: "./imageR3.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "Ardonyx",
    img: "/ardd.png",
    // nameImg: "/ARDONYX.png",
  },
  {
    id: 2,
    name: "Colaris",
    img: "/collaris logo.png",
    // nameImg: "",
  },
  {
    id: 3,
    name: "Food2Go",
    img: "/f2g logo.svg",
    // nameImg: "/food2go.png",
  },
  {
    id: 4,
    name: "Stitch",
    img: "/logo2.png",
    // nameImg: "/Stitch.png",
  },
  {
    id: 5,
    name: "Stressless Nights",
    img: "/stressless logo.svg",
    // nameImg: "/StresslessNL.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior UIUX Designer – Grew Studio",
    desc: "I Designed products for clients keeping special focus on CRO and Implemented UX Research in products, Showed Proficiency in Wireframing, prototyping and building Case Studies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Product Design Projects",
    desc: "I have handled multiple freelance product and web design projects. Leading the design and development of full products from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UIUX Design Apprentice – Shispare",
    desc: "I designed websites, mobile apps, social media posts, and products, using UX research, personas, and user stories while also collaborating with diverse teams to deliver user-focused solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Junior Graphic Designer – The Cotton London",
    desc: "I Provided campaign and content ideas and made strategic business plans. Lifted team capabilities, personally lead team to carry out business plan all while managing and executing graphical work for the company.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Ayemafx",
  },
  {
    id: 2,
    img: "/be.svg",
    href: "https://www.behance.net/ayemafaisaluiux",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/aaima-faisal-808052233/",
  },
];

export const Food2GoProblems = [
  "Delays in deliveries can be highly frustrating, causing significant inconvenience and disappointment for customers.",
  "Errors in orders can lead to dissatisfaction and additional inconvenience for users.",
  "Some areas may not be serviced, restricting access to the app's benefits.",
];

export const Food2GoSolutions = [
  "Food2Go provides real-time updates to ensure timely deliveries, minimizing customer frustration.",
  "The app features a robust order confirmation system to reduce mistakes and improve satisfaction.",
  " Efforts are continuously made to increase coverage, making the service accessible to more users.",
];

export const Food2GoOtherScreens = [
  {
    title: "Onboarding Screens",
    screens: [
      "./4.1 Onboarding.png",
      "./4.2 Onboarding.png",
      "./4.3 Onboarding.png",
    ],
  },
  {
    title: "Forgot Password Screens",
    screens: [
      "./5.1 forgot pass.png",
      "./5.3 forgot pass.png",
      "./5.5 forgot pass.png",
      "./5.7 forgot pass.png",
    ],
  },
  {
    title: "Cart and Checkout Screens",
    screens: [
      "./6.1.1 Cart (1).png",
      "./6.1.2 Cart (2).png",
      "./6.1.3 Checkout (4).png",
    ],
  },
  {
    title: "Payment Screens",
    screens: ["./6.1.4 Checkout (1).png", "./6.1.5 Checkout (1).png"],
  },
  {
    title: "Restaurant Screens",
    screens: ["./7.3 Shop detail.png", "./7.4 Shop detail.png"],
  },
  {
    title: "Location Screens",
    screens: ["./6.0 Location screen.png", "./6.1.8 Checkout (1).png"],
  },
  {
    title: "Location Screens",
    screens: ["./7.1 Search screen (1).png", "./6.1.9 Checkout (2).png"],
  },
];
