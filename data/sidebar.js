import { Overview, Market, Portfolio, Community, Report, Settings } from '@/public/assets/svgsIcons';
const sidebar = [
  {
    //   activeIcon: '/assets/dashboard/dashboard-active.svg',
    icon: <Overview />,
    name: 'Dashboard',
    url: '/dashboard'
  },
  {
    //   activeIcon: '/assets/dashboard/transaction-active.svg',
    icon: <Market />,
    name: 'Market',
    url: '/dashboard/market'
  },
  {
    //   activeIcon: '/assets/dashboard/published.svg',
    icon: <Portfolio />,
    name: 'Portfolio',
    url: '/dashboard/portfolio'
  },

  {
    //   activeIcon: '/assets/dashboard/draft.svg',
    icon: <Community />,
    name: 'Community',
    url: '/dashboard/community'
  },
  {
    //   activeIcon: '/assets/dashboard/wallet.svg',
    icon: <Report />,
    name: 'Report',
    url: '/dashboard/report'
  },
  {
    //   activeIcon: '/assets/dashboard/Settings.svg',
    icon: <Settings />,
    name: 'Settings',
    url: '/dashboard/settings'
  },
  {
    //   activeIcon: '/assets/dashboard/wallet.svg',
    icon: <Report />,
    name: 'Report',
    url: '/dashboard/report'
  },
  {
    //   activeIcon: '/assets/dashboard/Settings.svg',
    icon: <Settings />,
    name: 'Settings',
    url: '/dashboard/settings'
  }
];

export default sidebar;
