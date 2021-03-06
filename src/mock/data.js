import { nanoid } from 'nanoid';
import MyResume from '../assets/cv.pdf';

// HEAD DATA
export const headData = {
  title: 'Jakov Magazin | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website,
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jakov',
  subtitle: "I'm a developer from Betina, Croatia, currently living in Split.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: `My name is Jakov Magazin. I come from Betina, Croatia and I'm currently residing in Split. 
  I'm 25 old and I'm currently finishing on my master's degree in Computer Science from the University of Split.`,
  paragraphTwo:
    'I have experience in different technologies and languages such as ' +
    'C#, Javascript, TypeScript, Scala, Java etc. ' +
    'Currently I work as a programmer at Code Vibe on their systems.',
  paragraphThree:
    'I am a naturally curious person, I like learning about new stuff and am willing to help. ' +
    'As I previously said, I have experience with frontend and backend web technologies, ' +
    'with Scala, PHP, JS/TS and React. I also like learning about other areas of computer science, ' +
    'e.g. functional programming, video games with Unity, cross-platform development etc.',
  resume: MyResume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'uni.png',
    title: 'Travel agency website - project Webstart',
    info:
      'I got an award from the Croatian Chamber of Economy in 2018 in Split ' +
      'for designing a website using basic web technologies, jQuery and Bootstrap. ' +
      "I've later used the design and implemented Symphony backend for my finals.",
    info2: 'I was interview by HRT and a few local TV and radio stations.',
    infoUrl:
      'https://www.dalmacijadanas.hr/sinergija-gospodarstva-i-visokog-obrazovanja-hgk-zupanijska-komora-split-dodijelila-nagrade-najboljima-u-projektu-webstart/',
    url: '',
    repo: 'https://github.com/NetkoNefarious/ZavrsniRad',
  },
  {
    id: nanoid(),
    img: 'web3j.png',
    title: 'Ethereum client through Spring Boot',
    info:
      'To get some experience for blockchain, I used Web3j and Spring Boot to make ' +
      'a simple Ethereum client that checks account balance, sends Ether to another ' +
      'account and creates a smart contract on the test channel Rinkeby.',
    info2: '',
    infoUrl: '',
    url: '',
    repo: 'https://github.com/NetkoNefarious/SmartContractProject',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'magazinjk2@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jakov-magazin-245768192/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NetkoNefarious',
    },
    {
      id: nanoid(),
      name: 'blog',
      url: 'https://netkonefarious.github.io',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
