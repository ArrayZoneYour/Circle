export interface MenuItemType {
    readonly icon?:string;
    readonly name:string;
    readonly path:string;
    readonly children?: MenuData;
}

export type MenuData = Array<MenuItemType>;