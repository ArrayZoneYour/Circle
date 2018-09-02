import {MenuItemListType} from "../types/Menu";

export const menuData: MenuItemListType = [
    {
        icon: 'mail',
        name: 'Mail',
        path: 'mail'
    },
    {
        icon: 'calendar',
        name: 'Calendar',
        path: 'calendar'
    },
    {
        icon: 'appstore',
        name: 'App Store',
        path: 'app_store',
        children: [
            { name: 'Option 1', path: 'option_1'},
            { name: 'Option 2', path: 'option_2'}
        ]
    },
    {
        name: 'SubMenu',
        path: 'sub',
        children: [
            { name: 'Option 1', path: 'option_1'},
            { name: 'Option 2', path: 'option_2'}
        ]
    },
    {
        icon: 'setting',
        path: 'setting',
        name: 'Setting',
        children: [
            { name: 'Option 1', path: 'option_1'},
            { name: 'Option 2', path: 'option_2'}
        ]
    }
];