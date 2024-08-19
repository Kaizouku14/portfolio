import { addCarUI, adminUI, crud, loginForm, rentUI, signupForm, userUI,
  reelhub1, reelhub2, reelhub3, reelhub4, reelhub5, recipeFinder1, recipeFinder2, 
  recipeFinder3, recipeFinder4, todolist, todolist2,
  discordbot,
  discordbot1,
  discordbot2,
  discordbot3
 } from '../assets/projectImages';
import { facebook, instagram, mail, tiktok, chrome, css, figma, git, github, html, 
         javascript, mysql, node, npm, vscode, canva, react, typescript,
         express, java, mongodb, vite, eclipse, intellij, c, cplus, chash , firebase
} from '../assets'

export const links = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
export const menuVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.9 }
};
export const buttonVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 }
};


export const name = "Hello I'm Al-v Manda";
export const description = "A third-year BSIT student diving into the depths of web development to broaden my knowledge and skills in web development."
export const charVariants = {
  hidden : { opacity : 0},
  reveal : { opacity : 1}
}

export const skills = [
    { tech : 'HTML' , img : html },
    { tech : 'CSS' , img : css },
    { tech : 'JavaScript', img : javascript },
    { tech : 'TypeScript', img : typescript },
    { tech : 'Express.js', img : express },
    { tech : 'React.js', img : react },
    { tech : 'Java', img : java },
    { tech : 'C', img : c },
    { tech : 'C++', img : cplus},
    { tech : 'C#', img : chash },
    { tech : 'MongoDB', img : mongodb },
    { tech : 'Firebase', img : firebase},
    { tech : 'Vite', img : vite },
    { tech : 'Eclipse', img : eclipse },
    { tech : 'Intellij', img : intellij },
    { tech : 'Github', img : github },
    { tech : 'Git', img :  git },
    { tech : 'Vscode' , img : vscode },
    { tech : 'npm' , img : npm },
    { tech : 'Node.js' , img : node },
    { tech : 'MySQL' , img : mysql },
    { tech : 'Chrome Devtools' , img : chrome },
    { tech : 'Figma' , img : figma },  
    { tech : 'Canva' , img : canva }, 
]

export const cardColor = {
  0 : 'bg-slate-900',
  1 : 'bg-sky-600',
  2 : 'bg-purple-500',
  3 : 'bg-red-500',
  4 : 'bg-green-400'
}
  
export const projects = [
    { ProjectImage : discordbot,
      Data : {
        projectName : 'Kai-bot',
        projectText : 'Kai-Bot manages Discord server tasks, including muting users and tracking activity in real-time.',
        projectImages : [
          { image : discordbot1 },
          { image : discordbot2 },
          { image : discordbot3 },
        ],
        projectDescription : 'Kai-Bot is a powerful Discord bot designed to manage server activities efficiently. It provides features such as muting and timing out users with specified durations. Additionally, Kai-Bot tracks and records the activity of every user in the server, storing this data in real-time using Firebase. Developed with Node.js and TypeScript, it ensures reliable performance and robust functionality.',
        project : { 
          DeployedURL : null,
          GitHubURL : 'https://github.com/Kaizouku14/kai-bot'
        },
        projectTechnologies : [
          { icon : typescript, tech : 'TypeScript'},
          { icon : node , tech : 'Node.js'},
          { icon : firebase , tech : 'Firebase'},
        ]
      },
      ProjectLink : 'https://github.com/Kaizouku14/kai-bot'
    }, 
    
    { ProjectImage : reelhub1,
      Data : {
        projectName : 'Reel Hub',
        projectText : 'A movie website where you can watch trailers of your favorite films.',
        projectImages : [
          { image : reelhub2 },
          { image : reelhub3 },
          { image : reelhub4 },
          { image : reelhub5 },
        ],
        projectDescription : 'Reel Hub is a responsive movie website where you can watch trailers of your favorite films, powered by the IMDB API. Built with React, TypeScript, and Vite, it offers a seamless experience across all devices.',
        project : { 
          DeployedURL : 'https://reel-hub-axjw.vercel.app/',
          GitHubURL : 'https://github.com/Kaizouku14/reel-hub'
         },
        projectTechnologies : [
          { icon : typescript, tech : 'TypeScript' },
          { icon : react, tech : 'React.js'},
          { icon : vite, tech : 'Vite'}
        ]
      },
      ProjectLink : 'https://github.com/Kaizouku14/reel-hub'
    }, 
    { ProjectImage : recipeFinder2,
      Data : {
        projectName : 'Recipe-finder',
        projectText : 'A recipe website where you can Easily find and cook recipes with detailed guides.',
        projectImages : [
          { image : recipeFinder2 },
          { image : recipeFinder1 },
          { image : recipeFinder3 },
          { image : recipeFinder4 },
        ],
        projectDescription : 'Recipe Finder is a responsive application designed to make cooking easier and more enjoyable. Using the Spoonacular API, it provides a wide range of features, including the ability to search for recipes, view detailed ingredients, check nutritional information, and follow step-by-step guides on how to cook the selected dishes. this app ensures you have all the information you need right at your fingertips.',
        project : { 
          DeployedURL : 'https://recipe-finder-wheat.vercel.app/',
          GitHubURL : 'https://github.com/Kaizouku14/recipe-finder'
         },
        projectTechnologies : [
          { icon : react, tech : 'React.js'},
        ]
      },
      ProjectLink : 'https://github.com/Kaizouku14/recipe-finder'
    }, 
    { ProjectImage : loginForm,
      Data : {
        projectName : 'Car Rental Management',
        projectText : 'A car-rental-app for managing rentals and inventory efficiently.',
        projectImages : [
          { image : loginForm },
          { image : signupForm },
          { image : adminUI },
          { image : userUI },
          { image : rentUI },
          { image : addCarUI },
          { image : crud }
        ],
        projectDescription : 'This Car Rental Management application, developed as a project for OOP 2, provides a comprehensive solution for managing a car rental business. It features both admin and user interfaces, allowing administrators to manage vehicle inventory, rental transactions, and users. The app supports full CRUD (Create, Read, Update, Delete) operations, making it efficient for handling records. The application is built using Java with SQL for the database.',
        project : { 
          DeployedURL : null,
          GitHubURL : 'https://github.com/Kaizouku14/car-rental-management'
         },
        projectTechnologies : [
          { icon : java, tech : 'Java' },
          { icon : mysql, tech : 'MySQL'}
        ]
      },
      ProjectLink : 'https://github.com/Kaizouku14/car-rental-management'
    }, 

    { ProjectImage : todolist,
      Data : {
        projectName : 'Todo-List',
        projectText : 'A simple to-do list app where you can easily manage and organize your tasks.',
        projectImages : [
          { image : todolist },
          { image : todolist2 },
        ],
        projectDescription : 'Todo List is my first project using React, featuring all the essential functionality of a todo list. You can create, read, update, and delete tasks effortlessly. Additionally, the app offers both dark and light themes, allowing you to switch based on your preference. It\'s a simple yet powerful tool to help you stay organized.',
        project : { 
          DeployedURL : 'https://kaizouku14.github.io/Todo-List/',
          GitHubURL : 'https://github.com/Kaizouku14/Todo-List'
         },
        projectTechnologies : [
          { icon : react, tech : 'React.js'},
        ]
      },
      ProjectLink : 'https://github.com/Kaizouku14/Todo-List'
    }, 
]

export const contact = [
    { image: mail, text: 'Send me an email: ', username: 'mandaalv72@gmail.com', url: 'https://mail.google.com/' },
    { image: github, text: 'My Github account: ', username: 'Kaizouku14', url: 'https://github.com/Kaizouku14' },
    { image: tiktok, text: 'My TikTok account: ', username: '@itz.kallis', url: 'https://www.tiktok.com/@itz.kallis' },
    { image: instagram, text: 'My Instagram Account: ', username: '@zyalv.m', url: 'https://www.instagram.com/zyalv.m' },
    { image: facebook, text: 'My Facebook Account: ', username: 'Al-v Manda', url: 'https://www.facebook.com/alv.manda.3/' }
]