import React, { useEffect, useState } from 'react';
import MobileNav from '../../components/MobileNav/MobileNav';
import DesktopNav from '../../components/DesktopNav/DesktopNav';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  console.debug(window.innerWidth);
  console.debug(isMobile);

  return isMobile ? <MobileNav /> : <DesktopNav />;
};
export default NavBar;
