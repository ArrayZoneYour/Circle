import {Breadcrumb} from "antd";
import * as React from "react";
import {RouteComponentProps} from "react-router";

export const Navigator = (props: RouteComponentProps<{}>) => <Breadcrumb style={{ margin: '16px 0' }}>
    {
        props.location.pathname
            .replace(/\/$/, '')
            .split('/')
            .map((x, index, paths) =>
                <Breadcrumb.Item key={index} href={paths.slice(0, index + 1).join('/') || '/'}>{x || 'Home'}</Breadcrumb.Item>)
    }
</Breadcrumb>;