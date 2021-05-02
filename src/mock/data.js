import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Minhaz',
  subtitle: 'A JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'minhaz.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1dDMluX1e-xGsPf-eivdfDHW_fx0h31sb/view?fbclid=IwAR366x3m47hwiGB2tsyKKDYHQpZeCNrbaxJNNpKyXi7VvWf4uYzhLhfzujQ', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'baby.PNG',
    title: 'Super Child Care',
    info: '',
    info2: '',
    url: 'https://super-child-care.web.app/',
    repo: 'https://github.com/minhaz-bin-monib/super-child-care', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'local.PNG',
    title: 'Local Rides',
    info: '',
    info2: '',
    url: 'https://local-rides-6d3a3.web.app/home',
    repo: 'https://github.com/minhaz-bin-monib/local-rides', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bangla.PNG',
    title: 'Bangla Book Shop',
    info: '',
    info2: '',
    url: 'https://bangla-book-shop.web.app/',
    repo: 'https://github.com/minhaz-bin-monib/bangla-book-shop', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
