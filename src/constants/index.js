import { createCampaign, dashboard,  payment, withdraw } from '../assests';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Club',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Events',
    imgUrl: payment,
    link: '/',
  },
  {
    name: 'Analytics',
    imgUrl: withdraw,
    link: '/',
  },
  
];