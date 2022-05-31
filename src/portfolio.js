

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Rahul Sinha',
}

const about = [{
  // all the properties are optional - can be left empty or deleted
  name: 'Rahul Sinha',
  role: 'Full Stack Web Developer',
  description:
    "I'm a Web Developer who is always creating and learning awesome stuff. Let's start scrolling and learn more about me.",
  resume: 'https://docs.google.com/document/d/1x-VAAcBZ8wSnDGgKPntYRha4JBjaLDfN13dbBopg6iU/edit?usp=sharing',
  
}]

const aboutme = [{
  // all the properties are optional - can be left empty or delete
  description:
    "I'm a Full Stack Web Developer specialization MERN Stack who gained skills from Masai School. Attentive and agile learner with a diverse foundation of tech industry. Motivated self-starter and leader with strong organizational and communicative abilities."
}]

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
    image:'https://user-images.githubusercontent.com/99576535/155852317-211e4ae4-6231-44f8-ad3c-4b3dccc5b470.PNG'
  },
  {
    name: 'Pluralsight.com Clone',
    description:
      'This website is mainly for e-education, where they provide courses. In this project, we used HTML, CSS, JAVASCRIPT which we have merged by using GITHUB. ',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/Sranjan4321/PluralSight-clone',
    livePreview: 'https://cheerful-lebkuchen-890c5e.netlify.app/',
    image:'https://user-images.githubusercontent.com/94555507/161410163-36033ae4-f7df-4508-96b3-c7cf563be10e.png'
  },
  {
    name: 'Zappos.com Clone',
    description:
      'This website is e-commerce website, where they provide clothing, shoes etc. in this project, we used React JS, Styled-components, bootstrap, and CSS. which we have merged by using GITHUB. ',
    stack: ['REACT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/SWAIN1998/Zappos',
    livePreview: 'https://dynamic-strudel-3a04dd.netlify.app/',
    image:'https://camo.githubusercontent.com/18cf606bf5ec851938e844ecadab28521bdabfb7d7a90f1b899a6379fb36b681/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a71704c7070346e694a4231657357795f6c3876506f512e6a706567'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/html.png',"HTML"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/css.png',"CSS"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/1_YWazhGyGmNs6K3HZE7lS7Q.png',"JAVASCRIPT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/react.png',"REACT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/nodejs.png',"NODEJS"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/mongodb_1014590.png',"MONGODB"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/typescript.png',"TYPESCRIPT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/cleanfolio/main/New_Logo/express.png',"EXPRESSJS"]


]

const contact = [{
  // email is optional - if left empty Contact section won't show up
  email: 'rahulsinha1996@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/rahul-sinha-584a2694/',
    github: 'https://github.com/rahulsinha1996',
  },
}]

export { header, about, projects, skills, contact,aboutme }
