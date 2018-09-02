import {MenuItemType} from "../types/Menu";
import {join} from "path";

const propsPropagate = (
    item: MenuItemType,
    parentProps = {path: '/'}
    ) => {
    const { path, children, ...rest } = item;
    const pathAfterPropagate = join(parentProps.path, path);
    const childrenAfterPropagate =
        (children || []).map(child => propsPropagate(child, { path }));
    return {
        path: pathAfterPropagate,
        children: childrenAfterPropagate,
        ...rest
    }
};