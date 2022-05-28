const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Rahul Sinha',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rahul Sinha',
  role: 'Full Stack Web Developer',
  description:
    "I'm a Web Developer who is always creating and learning awesome stuff. Let's start scrolling and learn more about me.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/rahul-sinha-584a2694/',
    github: 'https://github.com/rahulsinha1996',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Bebodywise.com Clone',
    description:
      'This website is mainly for women, where they provide women health-related products and services. in this project, we used HTML, CSS, JAVASCRIPT which we have merged by using GITHUB. ',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/rahulsinha1996/Project-Bebodywise',
    livePreview: 'https://gallant-jackson-573754.netlify.app/index.html',
  },
  {
    name: 'Pluralsight.com Clone',
    description:
      'This website is mainly for e-education, where they provide courses. in this project, we used HTML, CSS, JAVASCRIPT which we have merged by using GITHUB. ',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/Sranjan4321/PluralSight-clone',
    livePreview: 'https://cheerful-lebkuchen-890c5e.netlify.app/',
  },
  {
    name: 'Zappos.com Clone',
    description:
      'This website is e-commerce website, where they provide clothing, shoes etc. in this project, we used React JS, Styled-components, bootstrap, and CSS. which we have merged by using GITHUB. ',
    stack: ['REACT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/SWAIN1998/Zappos',
    livePreview: 'https://dynamic-strudel-3a04dd.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'MongoDB',
  'NodeJs',
  'ExpressJS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rahulsinha1996@mail.com',
}

export { header, about, projects, skills, contact }
