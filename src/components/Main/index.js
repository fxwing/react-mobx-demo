import React,{ Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Avatar } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
import styles from './Main.less'
class Main extends Component {

    render(){
        return(
            <Layout>
                <Header className={styles.header}>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className={styles.ul}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                    <div className={styles.userPhoto}>
                        <Menu  mode="horizontal" style={{ lineHeight: '64px' }} className={styles.info} theme="dark">
                            <SubMenu title={<span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><span className={styles.userName}>wjl</span></span>}>

                                    <Menu.Item key="setting:1">个人信息</Menu.Item>
                                    <Menu.Item key="setting:2">退出</Menu.Item>

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
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <SubMenu key="sub3_1" title={<span><Icon type="notification" />subnav 3_1</span>}>
                                    <Menu.Item key="91">option91</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                    <Menu.Item key="13">option13</Menu.Item>
                                </SubMenu>
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
                            Content
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