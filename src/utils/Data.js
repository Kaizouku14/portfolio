import { addCarUI, adminUI, crud, loginForm, rentUI, signupForm, userUI } from '../assets/projectImages';
import { facebook, instagram, mail, tiktok, chrome, css, figma, git, github, html, 
         javascript, mysql, node, npm, vscode, canva, react, typescript,
         express, java, mongodb, vite, eclipse, intellij, c, cplus, chash
} from '../assets'

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
  
export const projects = [
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
        projectDeploymentURL : '',
        projectTechnologies : [
          { icon : java, tech : 'Java' },
          { icon : mysql, tech : 'MySQL'}
        ]
      },
      ProjectLink : 'https://github.com/Kaizouku14/car-rental-management'
    }, 
]

export const contact = [
    { image: mail, text: 'Send me an email: ', username: 'mandaalv72@gmail.com', url: 'https://mail.google.com/' },
    { image: github, text: 'My Github account: ', username: 'Kaizouku14', url: 'https://github.com/Kaizouku14' },
    { image: tiktok, text: 'My TikTok account: ', username: '@itz.kallis', url: 'https://www.tiktok.com/@itz.kallis' },
    { image: instagram, text: 'My Instagram Account: ', username: '@zyalv.m', url: 'https://www.instagram.com/zyalv.m' },
    { image: facebook, text: 'My Facebook Account: ', username: 'Al-v Manda', url: 'https://www.facebook.com/alv.manda.3/' }
]