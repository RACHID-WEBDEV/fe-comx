import { Overview, Market, Portfolio, Community, Report, Settings } from '@/public/assets/svgsIcons';
const sidebar = [
  {
    icon: <Overview />,
    name: 'Dashboard',
    url: '/dashboard',
    color: false
  },
  {
    icon: <Market />,
    name: 'Market',
    url: '/dashboard/market',
    color: true
  },
  {
    icon: <Portfolio />,
    name: 'Portfolio',
    url: '/dashboard/portfolio',
    color: false
  },

  {
    icon: <Community />,
    name: 'Community',
    url: '/dashboard/community',
    color: false
  },
  {
    icon: <Report />,
    name: 'Report',
    url: '/dashboard/report',
    color: false
  },
  {
    icon: <Settings />,
    name: 'Settings',
    url: '/dashboard/settings',
    color: false
  }
];

export default sidebar;
