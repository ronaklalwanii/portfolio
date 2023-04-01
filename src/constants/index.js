import {
  git,
  web,
  css,
  mui,
  html,
  redux,
  vuexy,
  sneat,
  nodejs,
  nextjs,
  mobile,
  materio,
  backend,
  creator,
  reactjs,
  bootstrap,
  clevision,
  javascript,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML & CSS Development",
    icon: web,
  },
  {
    title: "React JS Development",
    icon: mobile,
  },
  {
    title: "Admin Template Development",
    icon: backend,
  },
  {
    title: "Custom Web App Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MUI",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior React.js Developer",
    company_name: "Clevision",
    icon: clevision,
    iconBg: "#383E56",
    date: "Oct 2018 - Jan 2023",
    points: [
      "Utilizing React.js, Redux, Next.js, Mui, Bootstrap, and other relevant technologies, developing and maintaining the Admin templates.",
      "Enhancing the functionality of the admin templates by implementing new features and ensuring timely updates.",
      "Conducting rigorous testing to identify and resolve any issues or bugs.",
      "Delivering exceptional customer support to users who have purchased the template.",
      "Collaborating with cross-functional teams, such as design and product management, to ensure the admin templates align with the overall vision and objectives of the organization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I recently had the opportunity to work with the React Admin Template developed by Ronak and I have to say, it's one of the best templates I've used so far.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Ronak has done an amazing job creating a template that is both elegant and easy to use. The attention to detail is impressive, and the layout is intuitive and user-friendly.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "what really sets Ronak's React Admin Template apart is the level of support that he provides. Any time I had a question or needed help, he was always there to offer guidance and assistance.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vuexy Admin Template",
    description:
      "I developed my company's first-ever admin template, called Vuexy. Within a year, it became our company's top-selling template. Vuexy initially started with CRA + Bootstrap and has since expanded to include three variants: CRA + Bootstrap, Vite + Bootstrap, and Nextjs + Mui & Nextjs + TS + Mui. It offers essential functionalities such as Authentication, ACL, and Customizable Layouts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-violet-600",
      },
      {
        name: "nextjs",
        color: "text-fuchsia-600",
      },
      {
        name: "mui",
        color: "text-rose-600	",
      },
    ],
    image: vuexy,
    link: "https://demos.pixinvent.com/vuexy-nextjs-admin-template/demo-1/dashboards/analytics/",
  },
  {
    name: "Materio Admin Template",
    description:
      "Materio is the first admin template I developed using Next.js and TypeScript. This template comes equipped with features that enable you to create high-quality apps just the way you envision them. Additionally, Materio offers a variety of unique and useful tools, including fuzzy search, light, dark, semi-dark & bordered layout options, advanced cards, and charts. Materio also has useful apps like Chat, Email, Invoice, etc",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "text-fuchsia-600",
      },
      {
        name: "mui",
        color: "text-rose-600	",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: materio,
    link: "https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/dashboards/crm/",
  },
  {
    name: "Sneat Admin Template",
    description:
      "Just like Vuexy and Materio, Sneat employs the same advanced tech stack and features. However, it distinguishes itself from the rest with its modern and sleek UI design, which gives it a fresh and clean look. The user interface of Sneat is not only aesthetically pleasing but also highly functional and user-friendly. With its intuitive design, Sneat makes it easy for users to navigate through the application, increasing efficiency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "text-fuchsia-600",
      },
      {
        name: "mui",
        color: "text-rose-600	",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: sneat,
    link: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/dashboards/ecommerce/",
  },
];

export { services, technologies, experiences, testimonials, projects };
