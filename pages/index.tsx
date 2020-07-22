import { useState, FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import SideBar from '@components_p/sideBar';
import Search from '@components_p/search';

import { useIndexStyles } from '@styles_p/mainPage';
import clsx from 'clsx';

const Index: FC = () => {
  const classes = useIndexStyles();
  const [SideBarIsOpen, setSideBarIsOpen] = useState(false);

  const handleToggleSideBar = () => {
    setSideBarIsOpen(!SideBarIsOpen);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleToggleSideBar}
        className={clsx(classes.menuButton, SideBarIsOpen && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <SideBar
        SideBarIsOpen={SideBarIsOpen}
        handleToggleSideBar={handleToggleSideBar}
      />
      <div className={classes.content}>
        <h3>BABEL LIBRARY</h3>
        <Search height={66} />
      </div>
    </div>
  );
};

export default Index;
