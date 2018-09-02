import {MenuItemType} from "../../types/Menu";
import {join} from "path";

export const propsPropagate = (
    item: MenuItemType,
    parentProps = {path: '/'}
    ) => {
    const { path, children, ...rest } = item;
    const pathAfterPropagate = join(parentProps.path, path);
    const childrenAfterPropagate =
        (children || []).map(child => propsPropagate(child, { path: pathAfterPropagate }));
    return childrenAfterPropagate.length > 0 ? {
        path: pathAfterPropagate,
        children: childrenAfterPropagate,
        ...rest
    } : {
        path: pathAfterPropagate,
        ...rest
    }
};