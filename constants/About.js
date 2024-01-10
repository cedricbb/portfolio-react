// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiPrestashop,
  SiMysql
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'Compétences',
    info: [
      {
        title: 'Développement Web',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
          <SiPrestashop />,
          <FaPhp />,
          <SiMysql />
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Hobbies',
    info: [
      {
        title: 'Nouvelles Technologies'
      },
      {
        title: 'Jeux Vidéos',
      },
      {
        title: 'IA',
      },
    ],
  },
  {
    title: 'Expériences',
    info: [
      {
        title: 'Développeur Fullstack - Arxama',
        stage: '2017 - 2023',
      },
      {
        title: 'Technicien Informatique - Passman',
        stage: '2013 - 2016',
      },
      {
        title: 'Résponsable logistique - Planète Mode',
        stage: '2007 - 2013',
      },
    ],
  },
  {
    title: 'Formations',
    info: [
      {
        title: 'Développeur Fullstack - Autodidacte',
        stage: '2011 - Présent',
      },
      {
        title: 'Développeur d\'Application - WebForce 3',
        stage: '2017',
      },
      {
        title: 'Technicien d\'Assistance Informatique - AFPA',
        stage: '2012 - 2013',
      },
    ],
  },
];