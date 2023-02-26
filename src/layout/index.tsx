import { Modal } from "antd";
import { Component, ReactNode } from "react";
import "./index.scss";
import { Input, Space } from "antd";
import WidowsTools from '../components/windows-tools/index'
const { Search } = Input;

export default class Layout extends Component {
  state = {
    menuDisabled: false,
    menuOpen: false,
  };
  onMenuClick() {
    this.setState({
      menuOpen: true,
    });
  }

  render() {
    var { menuOpen } = this.state;

    return (
      <div>
        <div></div>
        <div className="taskbar">
          <div className="taskbar__start-menu">
            <div className="menu">
              <img
                onClick={() => this.onMenuClick()}
                src="https://token-os.oss-cn-beijing.aliyuncs.com/menu.png"
                alt=""
              />
            </div>
          </div>
          <div className="taskbar__icons">
            <img
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-outline-512.png"
              alt="Notification Icon"
            />
            <div>
              <div style={{ textAlign: "center" }}>18:42</div>
              <div>2023/2/26</div>
            </div>
          </div>
        </div>
        <WidowsTools menuOpen={menuOpen} onCancel={()=>this.setState({menuOpen:false})}/>
      </div>
    );
  }
}
