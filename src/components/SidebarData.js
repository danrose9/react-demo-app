import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
    tooltip: 'Home',
  },
  {
    title: 'Components',
    path: '/components',
    icon: <FaIcons.FaRegObjectGroup />,
    cName: 'nav-text',
  },
  {
    title: 'APIs',
    path: '/apis',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'nav-text',
  },
];
