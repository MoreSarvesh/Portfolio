const months = {
  jan: "January",
  feb: "Feburary",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December",
};

const createDate = (startMonth, startYear, endMonth, endYear) => {
  return `${startMonth} ${startYear} - ${endMonth} ${endYear ? endYear : ""}`;
};

const cact = {
  id: 1,
  date: createDate(months.aug, "2022", months.dec, "2022"),
  title: "Programing Tutor",
  org: "CACT",
  description:
    "Instructed students in Java, C, C++, and OOP concepts, while also teaching HTML, CSS, and JavaScript for web development. Created engaging lessons, emphasizing practical application and industry relevance.",
  skills: [
    "Technical Knowledge",
    "Creativity",
    "Presentation",
    "Team work",
    "Figma",
    "Leadership skills",
  ],
};

const cascode = {
  id: 2,
  date: createDate(months.jan, "2023", months.feb, "2023"),
  title: "Front-End Intern",
  org: "CasCode",
  description:
    "Used ReactJS to develop individual website components. Crafted and implemented responsive design for optimal multi-device functionality. Enhanced my skills in ReactJS development. Strengthened proficiency in creating user- friendly, responsive web interfaces.",
  skills: [
    "React.Js",
    "JavaScript",
    "HTML + CSS",
    "Git + Github",
    "Figma",
    "Team work",
    "Communication",
  ],
};

const globalstep = {
  id: 3,
  date: createDate(months.mar, "2024", months.jul, "2024"),
  title: "Game Test Enginner",
  org: "Globalstep",
  description:
    "Responsible for ensuring the quality and performance of games by executing thorough smoke testing, ad-hoc testing, and scripted testing. Also identify and report bugs using Jira communicate with team of testers and manage daily tasks. Enhanced my ability to communicate effectively with team members, and gained valuable experience in task management and coordination within a fast-paced environment.",
  skills: [
    "Jira",
    "Unit testing",
    "Ad-Hoc testing",
    "Integration Testing",
    "Bug Reporting",
    "Agile",
  ],
};

const barclays = {
  id: 4,
  date: createDate(months.jan, "2025", "Present"),
  title: "Full Stack developer: BA3",
  org: "Barclays",
  description:
    "As a Full Stack Developer at Barclays, I contribute in designing, developing, and maintaining scalable web applications using modern technologies across the frontend and backend. My role involves implementing RESTful APIs, and ensuring seamless user experiences.",
  skills: [
    "React.js",
    "Web Content Accessibility",
    "Node.js",
    "Java",
    "Spring boot",
    "Jenkins",
    ,
  ],
};

//latest first
export const myJobs = [barclays, globalstep, cascode, cact];
