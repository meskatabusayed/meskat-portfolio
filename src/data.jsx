import { FaHome ,  FaUser , FaFolderOpen , FaEnvelopeOpen} from "react-icons/fa";

export const links = [
    {
        id: 1,
        name: 'Home' ,
        icon: <FaHome className="nav__icon"></FaHome>,
        path: '/',
    },
    {
        id: 2,
        name: 'About' ,
        icon: <FaUser className="nav__icon"></FaUser>,
        path: '/about',
    },
    {
        id: 3,
        name: 'Portfolio' ,
        icon: <FaFolderOpen className="nav__icon"></FaFolderOpen>,
        path: '/portfolio',
    },
    {
        id: 4,
        name: 'Contact' ,
        icon: <FaEnvelopeOpen className="nav__icon"></FaEnvelopeOpen>,
        path: '/contact',
    },
]

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Meskat',
    },
    {
        id: 2,
        title: 'Last Name : ',
        description: 'Abu Sayed',
    },
    {
        id: 3,
        title: 'Age : ',
        description: '21 Years',
    },
    {
        id: 4,
        title: 'Nationality: ',
        description: 'Bangladeshi',
    },
    {
        id: 5,
        title: 'Student: ',
        description: 'CSE',
    },
    {
        id: 6,
        title: 'Address : ',
        description: 'Kushtia , Bangladesh',
    },
    {
        id: 7,
        title: 'Phone : ',
        description: '(+88)017******',
    },
    {
        id: 8,
        title: 'Email : ',
        description: 'meskatabusayed@gmail.com',
    },
    {
        id: 9,
        title: 'Linkedin : ',
        description: 'meskatabusayed',
    },
    {
        id: 10,
        title: 'Language : ',
        description: 'Bangla , English',
    },
   
]

export const status = [
    {
        id: 1,
        no: "6+",
        title: 'Months of <br/> Experience',
    },
    {
        id: 2,
        no: "113+",
        title: 'Completed <br/> Projects',
    },
    
]


export const skills = [
    {
        id: 1,
        title: 'HTML',
        percentage: '55',
    },
    
    {
        id: 2,
        title: 'CSS',
        percentage: '50',
    },
    {
        id: 3,
        title: 'JAVASCRIPT',
        percentage: '30',
    },
    {
        id: 4,
        title: 'TAILWIND CSS',
        percentage: '75',
    },
]

export const resumes = [
    {
        id: 1,
        
        year: '2019',
        title: "SSC"

    },
    {
        id: 2,
        
        year: '2021',
        title: "HSC"

    },
    {
        id: 3,
       
        year: '2022 - Present',
        title: "Bachelor of Computer Science And Engineering"

    },
]