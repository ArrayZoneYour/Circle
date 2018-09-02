import {Link, Route, Switch} from "react-router-dom";
import App from "../App";
import * as React from "react";
import {Layout, Breadcrumb, Menu} from "antd";
const { Header, Content, Footer, Sider } = Layout;
import * as styles from "./MainLayout.less";

const Home = () => <div>Home</div>;

console.log(styles, App);

const MainLayout = () => {
    return (
        <Layout style={{ height: '800px'}}>
            <Sider>
                <div className={styles.logo} style={{ textAlign: 'center', textDecoration: 'none' }}>
                    <Link to="/">
                        <h1>✈️</h1>
                    </Link>
                </div>
                <Menu>

                </Menu>
            </Sider>
            {/*<Link to='/about'>About</Link>*/}
            {/*<Link to='/'>Home</Link>*/}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route
                path='/about'
                render={(props) => <App {...props} />}
                />
                <Route render={() => (<div>404</div>)} />
            </Switch>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px', height: '100%'}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff' }}>
                        Bill is a cat.
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