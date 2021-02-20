import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    component: 'Home',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
    active: true,
  },
  {
    title: 'Components',
    path: '/components',
    component: 'Components',
    icon: <FaIcons.FaRegObjectGroup />,
    cName: 'nav-text',
    active: true,
  },
  {
    title: 'Reports',
    path: '/reports',
    component: 'Reports',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'nav-text',
    active: true,
  },
  {
    title: 'Settings',
    path: '/settings',
    component: 'Settings',
    icon: <VscIcons.VscSettingsGear />,
    cName: 'nav-text',
    active: false,
  },
];

export default SidebarData;
