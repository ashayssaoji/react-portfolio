import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With more than a year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Java, SpringBoot, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With more than a year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new food dishes, and playing badminton.`;

export const EXPERIENCES = [
  {
    year: "June 2022 - June 2023",
    role: "Software Engineer",
    company: "Capgemini",
    description: `Assisted in migrating and enhancing a legacy approval system based on PTC Windchill for a major automotive client. Utilized Java and RESTful APIs for back-end development, and JavaScript for front-end improvements, resulting in a more responsive and user-friendly interface and a 30% increase in system efficiency compared to the old system`,
    technologies: ["Java", "SpringBoot", "MySQL", "PostgreSQL"],
  },
  {
    year: "January 2022 - July 2022",
    role: "Software Engineer Intern",
    company: "Capgemini",
    description: `Coordinated a full-stack Hospital Management System project from inception through completion, ensuring adherence to high-quality coding standards and implementing strategic innovations that reduced debugging time by 40%, thereby enhancing delivery timelines`,
    technologies: ["Java", "SpringBoot", "HTML", "CSS", "JavaScript" , "ReactJS", "mySQL"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Boston, Massachusetts",
  phoneNo: "+1 857-576-9785",
  email: "ashayssaoji@gmail.com, saoji.a@northeastern.edu",
};
