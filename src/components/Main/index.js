import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import { observer, inject, onError } from 'mobx-react'
import { Route, withRouter, Switch, Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import Test from '../Test/test';
import styles from './Main.less'
onError((err) => {
    console.log(err)
})
@inject('asideStore')
@inject('loginStore')
@observer class Main extends Component {
    constructor(props) {
        super()
        console.log(props)
    }
    testClick(e) {
        let asideStore = this.props.asideStore;
        asideStore.currentKey = e.key;
        asideStore.getAsideMenu().then((data) => {
            console.log(data.slice());
        });
        /* let arr  = asideStore.asideList.slice();
         console.log(arr);*/
    }

    render() {
        const { loginOut, testData } = this.props.loginStore;

        return (
            <Layout>
                <Header className={styles.header}>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className={styles.ul}
                        style={{ lineHeight: '64px' }}
                        onClick={(event) => this.testClick(event)}
                    >
                        <Menu.Item key="1"><Link to="/Setting">系统设置</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/User">{this.props.asideStore.asideList.slice()}</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Exchange">共享交换</Link></Menu.Item>
                    </Menu>
                    <div className={styles.userPhoto}>
                        <Menu mode="horizontal" style={{ lineHeight: '64px' }} className={styles.info} theme="dark">
                            <SubMenu title={<span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><span className={styles.userName}>wjl</span></span>}>

                                <Menu.Item key="setting:1">个人信息</Menu.Item>
                                <Menu.Item key="setting:2" onClick={() => { loginOut() }} >退出</Menu.Item>

                            </SubMenu>
                        </Menu>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 580 }}>
                            <div>{testData}</div>
                            <Test>
                                <div>1</div>
                                <div>2</div>
                            </Test>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            共享交换系统 ©2016 Created by wjl
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Main