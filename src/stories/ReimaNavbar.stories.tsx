import { ReimaNavbar, ReimaNavbarButton } from '@/components/reima/ReimaNavbar';

const ReimaNavbarStory = {
  title: 'ReimaNavbar',
  component: ReimaNavbar,
};
export default ReimaNavbarStory;

const buttons: ReimaNavbarButton[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
];

export const Default = () => <ReimaNavbar buttons={buttons} />;
