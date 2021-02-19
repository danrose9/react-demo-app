import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';

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
    title: 'Reports',
    path: '/reports',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <VscIcons.VscSettingsGear />,
    cName: 'nav-text',
  },
];
