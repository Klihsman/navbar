import React, { SyntheticEvent, useCallback, useState } from 'react';
import NavbarView from './navbar.view';
import INavbar from './navbar.props';
import * as singleSpa from 'single-spa';

const Navbar: React.FC<INavbar> = () => {
  const [tabValue, setTabValue] = useState('home');

  const handleLogout = () => {
    localStorage.removeItem('rememberedName');
    document.cookie = 'rememberedName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    singleSpa.navigateToUrl(`/login`);
  };

  const changeTab = useCallback((event: SyntheticEvent<Element, Event>, value: any) => {
    setTabValue(value);

    switch (value) {
      case 'parceiro-area':
        singleSpa.navigateToUrl(`/${value}`);
      case 'home':
        singleSpa.navigateToUrl(`/${value}`);
      case 'externo-area':
        singleSpa.navigateToUrl(`/${value}`);
    }

  }, []);

  return <NavbarView changeTab={changeTab} tabValue={tabValue} logout={handleLogout} />;
};

export default Navbar;
