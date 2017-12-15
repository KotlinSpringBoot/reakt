import {Component} from 'react';
import './Navbar.less';

const Menu = require('uxcore-menu')
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item


export default class Navbar extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      current: '1'
    }
  }


  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  render() {

    return (
      <div>
        <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="brand" className = 'brand-style'>
            <h3>Reakt</h3>
          </Menu.Item>
          <Menu.Item key="mail">
            <i className="kuma-icon kuma-icon-email"/>首页
          </Menu.Item>
          <Menu.Item key="app">
            <i className="kuma-icon kuma-icon-wangwang"/>快速开始
          </Menu.Item>
          <SubMenu title={<span><i className="kuma-icon kuma-icon-setting"/>博客文章</span>}>
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="#" target="_blank">关于我们</a>
          </Menu.Item>
        </Menu>

        <Menu
              className="kuma-menu-none-border menu-style"
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline">

          <SubMenu key={"sub1"} title={<span><i className="kuma-icon kuma-icon-email"/><span>Kotlin</span></span>}>
            <MenuItem key={11}>Java</MenuItem>
            <MenuItem key={12}>Scala </MenuItem>
            <MenuItem key={13}>Groovy</MenuItem>
          </SubMenu>

          <SubMenu key={"sub2"}
                   title={<span><i className="kuma-icon kuma-icon-wangwang"/><span>Spring Boot</span></span>}>
            <MenuItem key={21}>Spring MVC</MenuItem>
            <MenuItem key={22}>WebFlux</MenuItem>
            <MenuItem key={23}>Security</MenuItem>
            <MenuItem key={23}>JPA</MenuItem>
          </SubMenu>

          <SubMenu key={"sub3"} title={<span><i className="kuma-icon kuma-icon-wangwang"/><span>React </span></span>}>
            <MenuItem key={31}>Node.js</MenuItem>
            <MenuItem key={32}>Reflux</MenuItem>
            <MenuItem key={33}>ES6</MenuItem>
          </SubMenu>

        </Menu>
      </div>
    );
  }
}
