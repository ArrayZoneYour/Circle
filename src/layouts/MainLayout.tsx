import * as React from "react";
import {Link, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import { hot } from 'react-hot-loader';
import {Layout} from "antd";
import * as styles from "./MainLayout.less";

import Menu from '../utils/view/Menu';
import {RouterOutlet} from "../core/Route";
import { Navigator } from './NavigateBreadcrumb';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = (props: RouteComponentProps<{}>) => {
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
                    <Navigator {...props} />
                    <div style={{ padding: 24, background: '#fff' }}>
                        <RouterOutlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Plane ©2018 Created by ArrayZoneYour
                </Footer>
            </Layout>
        </Layout>
    );
};

export default hot(module)(withRouter(MainLayout));