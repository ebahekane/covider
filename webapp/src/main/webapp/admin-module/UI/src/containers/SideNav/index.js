<<<<<<< HEAD
<<<<<<< HEAD
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import SidenavContent from './SidenavContent';
import UserInfo from 'components/UserInfo';
import {COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION} from 'constants/ActionTypes';
import {toggleCollapsedNav, updateWindowWidth} from 'actions/Setting';

const SideNav = () => {
  const dispatch = useDispatch();
  const {navCollapsed, drawerType, width, navigationStyle} = useSelector(({settings}) => settings);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth))
    });
  }, [dispatch]);

  const onToggleCollapsedNav = (e) => {
    const val = !navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };

  let drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
  let type = 'permanent';
  if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
    type = 'temporary';
  }

  if (navigationStyle === HORIZONTAL_NAVIGATION) {
    drawerStyle = '';
    type = 'temporary';
  }
  return (
    <div className={`app-sidebar d-none ${drawerStyle}`}>
      <Drawer className="app-sidebar-content"
              variant={type}
              open={type.includes('temporary') ? navCollapsed : true}
              onClose={onToggleCollapsedNav}
              classes={{
                paper: 'side-nav',
              }}
      >
        <UserInfo/>
        <SidenavContent/>
      </Drawer>
    </div>
  );
};


export default withRouter(SideNav);

=======
=======
>>>>>>> 4d2bbb99f7304fe93e114a6909260496de0e6fc0
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import SidenavContent from './SidenavContent';
import UserInfo from 'components/UserInfo';
import {COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION} from 'constants/ActionTypes';
import {toggleCollapsedNav, updateWindowWidth} from 'actions/Setting';

const SideNav = () => {
  const dispatch = useDispatch();
  const {navCollapsed, drawerType, width, navigationStyle} = useSelector(({settings}) => settings);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth))
    });
  }, [dispatch]);

  const onToggleCollapsedNav = (e) => {
    const val = !navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };

  let drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
  let type = 'permanent';
  if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
    type = 'temporary';
  }

  if (navigationStyle === HORIZONTAL_NAVIGATION) {
    drawerStyle = '';
    type = 'temporary';
  }
  return (
    <div className={`app-sidebar d-none ${drawerStyle}`}>
      <Drawer className="app-sidebar-content"
              variant={type}
              open={type.includes('temporary') ? navCollapsed : true}
              onClose={onToggleCollapsedNav}
              classes={{
                paper: 'side-nav',
              }}
      >
        <UserInfo/>
        <SidenavContent/>
      </Drawer>
    </div>
  );
};


export default withRouter(SideNav);

<<<<<<< HEAD
>>>>>>> 4d2bbb9... backbone for the dashboard
=======
>>>>>>> 4d2bbb99f7304fe93e114a6909260496de0e6fc0