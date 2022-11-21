import React from "react";
import { useAuthState,UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";
import {useProfile} from './profile'

const MyUserMenu = (props) => {
    const { authenticated } = useAuthState();
  
    return authenticated ? <AuthenticatedUserMenu {...props} /> : null;
  };
  
  const AuthenticatedUserMenu = (props) => {
    const { profileVersion } = useProfile();
  return (
    <UserMenu  key={version} {...props}>
      <MenuItemLink
        to="/my-profile"
        primaryText="My Profile"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
};



export default MyUserMenu;
