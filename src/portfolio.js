

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
  resume: 'https://drive.google.com/file/d/1kEfwM5cvqmFcYXpYQLo1WvzYXYnkBGrX/view?usp=sharing',
  
}]

const aboutme = [{
  // all the properties are optional - can be left empty or delete
  description:
    "I'm a Full Stack Web Developer specialization MERN Stack who gained skills from Masai School. I am attentive and agile learner with a diverse foundation of tech industry. Also motivated,self-starter and leader with strong organizational and communicative abilities."
}]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Jiomart Clone',
    description:
      'JioMart is a multicategory online shopping platform, that currently offers a wide range of Groceries and Daily wear Fashion, to start with. The platform offers consumers a convenience of shopping from home, with a promise of great savings, free home delivery and no minimum order value.  ',
    stack: ['REACT', 'CHAKRA UI', 'REDUX'],
    sourceCode: 'https://github.com/rahulsinha1996/efficient-veil-6767',
    livePreview: 'https://jiomart-clone-project.netlify.app/',
    image:'https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/jiomart_hero_image.gif'
  },
  {
    name: 'Zappos Clone',
    description:
      'This website is e-commerce website, where they provide clothing, shoes etc. in this project, we used React JS, Styled-components, bootstrap, and CSS. which we have merged by using GITHUB. ',
    stack: ['REACT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/rahulsinha1996/Zappos',
    livePreview: 'https://dynamic-strudel-3a04dd.netlify.app/',
    image:'https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/zappos_hero_image.gif'
  },
  {
    name: 'Pluralsight Clone',
    description:
      'Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/rahulsinha1996/PluralSight-clone',
    livePreview: 'https://cheerful-lebkuchen-890c5e.netlify.app/',
    image:'https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/pluralsight_hero_image.gif'
  },
  {
    name: 'Bebodywise Clone',
    description:
      "Bodywise is a wellness revolution designed to help you reclaim control over your health, drowning out the chaotic information you deal with everyday. Bodywise's expert led solutions deliver results on every step of your wellness journey.",
    stack: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/rahulsinha1996/Project-Bebodywise',
    livePreview: 'https://gallant-jackson-573754.netlify.app/index.html',
    image:'https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/bebodywise_hero_image.gif'
  }
  
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/html.png',"HTML"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/css.png',"CSS"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/1_YWazhGyGmNs6K3HZE7lS7Q.png',"JAVASCRIPT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/react.png',"REACT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/nodejs.png',"NODEJS"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/mongodb_1014590.png',"MONGODB"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/typescript.png',"TYPESCRIPT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/express.png',"EXPRESSJS"]


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
