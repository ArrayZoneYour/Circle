import * as React from "react";
import {Icon, Menu} from "antd";
import {MenuItemType, MenuItemListType} from "../../types/Menu";
import {MenuMode, MenuTheme} from "antd/lib/menu";
import {Link} from "react-router-dom";
import {propsPropagate} from "../logic/Menu";
import {menuData} from "../../config/Menu";

const { SubMenu } = Menu;
const MenuItem = Menu.Item;

const _MenuItem = (props: MenuItemType) => {
    return props.hasOwnProperty('children') ? _SubMenuItem(props) :
        <MenuItem key={props.path + props.name}>
            <Link to={props.path}>
                {props.icon && <Icon type={props.icon}/>}
                <span>{props.name}</span>
            </Link>
        </MenuItem>;
};

const _SubMenuItem = (props: MenuItemType) => (
    <SubMenu key={props.path + props.name} title={<span><Icon type={props.icon} /><span>{props.name}</span></span>}>
        { props.children.map(_MenuItem) }
    </SubMenu>
);

const _IMenu = (props: MenuItemListType) => {
    return props.map(prop => propsPropagate(prop)).map(_MenuItem)
};

export default (props: {mode: MenuMode, theme: MenuTheme}) => {
    const {mode, theme, ...rst} = props;
    return (
        <Menu mode={mode} theme={theme} {...rst}>
            { _IMenu(menuData) }
        </Menu>
    )
}
