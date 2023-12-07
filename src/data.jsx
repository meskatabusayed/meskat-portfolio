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
        path: '/about',
    },
    {
        id: 4,
        name: 'Contact' ,
        icon: <FaEnvelopeOpen className="nav__icon"></FaEnvelopeOpen>,
        path: '/about',
    },
]