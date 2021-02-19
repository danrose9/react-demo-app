import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
    active: true,
  },
  {
    title: 'Components',
    path: '/components',
    icon: <FaIcons.FaRegObjectGroup />,
    cName: 'nav-text',
    active: true,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'nav-text',
    active: true,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <VscIcons.VscSettingsGear />,
    cName: 'nav-text',
    active: false,
  },
];

export default SidebarData;
