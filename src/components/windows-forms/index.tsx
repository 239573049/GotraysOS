import React, { Component, ReactNode } from "react";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";
import { Modal } from "antd";
import "./index.scss";
import { CloseCircleOutlined, ExpandOutlined } from "@ant-design/icons";

interface IProps {
  onCancel: any;
  key: string;
  open: boolean;
  href:string;
}

interface IState {
  disabled: boolean;
  bounds: any;
  draggleRef: any;
  width: string;
  height: string;
}

export default class WindowsForms extends Component<IProps, IState> {
  state: Readonly<IState> = {
    disabled: false,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
    draggleRef: React.createRef(),
    width: "900px",
    height: "900px",
  };

  magnify() {
    var { width, height } = this.state;
    width = "95vh";
    height = "90vh";
    this.setState({
      height,
      width,
      bounds: { left: 0, top: -100, bottom: 0, right: 0 },
    });
  }
  render(): ReactNode {
    var { disabled, bounds, draggleRef, width, height } = this.state;
    const onStart = (
      event: DraggableEvent,
      uiData: DraggableData
    ): false | void => {
      const { clientWidth, clientHeight } = window.document.documentElement;
      const targetRect = draggleRef.current?.getBoundingClientRect();
      if (!targetRect) {
        return;
      }
      bounds = {
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      };

      this.setState({
        bounds,
      });
    };

    return (
      <Modal
        key={this.props.key}
        title={
          <div
            style={{
              width: "100%",
              cursor: "move",
            }}
            onMouseOver={() => {
              if (disabled) {
                this.setState({
                  disabled: false,
                });
              }
            }}
            onMouseOut={() => {
              this.setState({
                disabled: true,
              });
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            OS应用
            <span style={{ marginLeft: "89%" }}>
              <ExpandOutlined
                onClick={() => this.magnify()}
                className="form-button"
              />
              <CloseCircleOutlined
                onClick={() => this.props.onCancel(true)}
                className="form-button"
              />
            </span>
          </div>
        }
        open={this.props.open}
        footer={null}
        closable={false}
        mask={false}
        width={width}
        style={{ height: `${height}` }}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div
              style={{ resize: "both", height: `100%` }}
              className="window-form"
              ref={draggleRef}
            >
              {modal}
            </div>
          </Draggable>
        )}
      >
        <iframe src={this.props.href} width="100%" height="97%" />
      </Modal>
    );
  }
}
