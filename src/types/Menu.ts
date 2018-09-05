export interface MenuItemType {
    readonly icon?:string;
    readonly name:string;
    readonly path:string;
    readonly children?: MenuItemListType;
}

export type MenuItemListType = Array<MenuItemType>;