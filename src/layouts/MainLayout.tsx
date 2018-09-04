import {Link, Route, Switch} from "react-router-dom";
import * as React from "react";
import {Layout, Breadcrumb} from "antd";
import * as styles from "./MainLayout.less";
import { hot } from 'react-hot-loader';

import Menu from '../utils/view/Menu';
import {context, modules} from "../registry";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    console.log(context);
    console.log(modules);
    return (
        <Layout>
            <Sider
                collapsible
            >
                <div className={styles.logo} style={{ textAlign: 'center' }}>
                    <Link to="/">
                        <h1>✈️</h1>
                    </Link>
                </div>
                <Menu mode='inline' theme='dark' />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: '0 2rem', textAlign: 'right' }}>
                    <span>Under Development</span>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff' }}>
                        <Switch>
                            {Object.keys(modules).map((path) => <Route key={path} exact path={path ? path : '/'} component={modules[path]} />)}
                            <Route component={modules.hasOwnProperty('/404') ? modules['/404'] : () => (<div>404</div>)} />
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Plane ©2018 Created by ArrayZoneYour
                </Footer>
            </Layout>
        </Layout>
    );
};

export default hot(module)(MainLayout);