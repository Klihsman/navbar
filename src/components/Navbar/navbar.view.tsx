import React, { SyntheticEvent } from 'react';
import NavbarWrapper from './navbar.style';
import { Box, Tab, Tabs } from '@mui/material';

interface IProps {
  changeTab: (event: SyntheticEvent<Element, Event>, value: any) => void;
  tabValue: string;
  logout: () => void
}

const NavbarViewNoMemo: React.FC<IProps> = (props) => (
  <NavbarWrapper className='navbar-component'>
    <Tabs
      value={props.tabValue}
      onChange={props.changeTab}
      aria-label="wrapped label tabs example"
    >
      <Tab
        value="home"
        label="Home"
        wrapped
      />
      <Tab value="parceiro-area" label="Parceiro" />
      <Tab value="externo-area" label="Empresa Externa" />
    </Tabs>
    <button onClick={props.logout}>Sair</button>
  </NavbarWrapper>
);

const NavbarView = React.memo(NavbarViewNoMemo);
export default NavbarView;
