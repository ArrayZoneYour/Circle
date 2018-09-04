import {Link, Route, Switch} from "react-router-dom";
import App from "../App";
import * as React from "react";
import {Layout, Breadcrumb} from "antd";
import * as styles from "./MainLayout.less";

import Menu from '../utils/view/Menu';

const { Header, Content, Footer, Sider } = Layout;
const Home = () => <div>Home</div>;

console.log(styles, App);

const MainLayout = () => {
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
                            <Route exact path='/' component={Home} />
                            <Route
                                path='/about'
                                render={(props) => <App {...props} />}
                            />
                            <Route render={() => (<div>404</div>)} />
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

export default MainLayout;