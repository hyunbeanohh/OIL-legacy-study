import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function nu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>

    <Menu.Item key="favorite">
      <a href="/favorite">Favorite</a>
    </Menu.Item>
  </Menu>
  )
}

export default nu