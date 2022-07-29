import { ProductView, OdrerBook, PriceHistory, Eye, CloseTrade, Cancel } from '@/public/assets/svgsIcons';
const sidebar = [
  {
    icon: <ProductView />,
    name: 'Product View ',
    url: '/dashboard/market/product-view ',
    color: false
  },
  {
    icon: <OdrerBook />,
    name: 'Order Book ',
    url: '/dashboard/market/order-book ',
    color: true
  },
  {
    icon: <PriceHistory />,
    name: 'Price History',
    url: '/dashboard/market/price-history',
    color: false
  },

  {
    icon: <Eye />,
    name: 'Open Orders ',
    url: '/dashboard/market/open-orders ',
    color: false
  },
  {
    icon: <CloseTrade />,
    name: 'Closed Trades',
    url: '/dashboard/market/closed-trades',
    color: false
  },
  {
    icon: <Cancel />,
    name: 'Cancelled Trades',
    url: '/dashboard/market/cancelled-trades',
    color: false
  }
];

export default sidebar;
