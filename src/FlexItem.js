/** Created by ge on 4/24/16. */
import React, {Component, PropTypes, createElement} from 'react';
import ReactDOM from "react-dom";

import {flexFluid, flexFixed} from "./style-globals";

const styles = {};

var {any} = PropTypes;
export default class FlexItem extends Component {
  static propTypes = {
    /** if a component is passed in, then it is used to substitute the `div` container */
    component: any,
    /** if the component is fluid (width/height) */
    fluid: any,
    /** if the component is fixed (width/height) */
    fixed: any,
    /**  width e.g. `100px`, `50%`, `40em` etc. */
    width: any,
    /** height e.g. `100px`, `50%`, `40em` etc. */
    height: any,
    /** style of component */
    style: any,
    children: any
  };

  componentDidMount() {
    this.container = ReactDOM.findDOMNode(this.refs["DIV"]);
    var {width, height} = this.props;
    if (width) this.setWidth(width);
    if (height) this.setHeight(height);
  }

  componentWillReceiveProps(newProps) {
    var {width, height} = this.props;
    if (width) this.setWidth(width);
    if (height) this.setHeight(height);
  }

  componentWillUnmount() {
  }

  setWidth(width) {
    this.container.style.width = width;
  }

  setHeight(height) {
    this.container.style.height = height;
  }

  render() {
    var flexStyle;
    var {component = "div", style = {}, fluid, fixed, width, children = [], ...props} = this.props;
    if (fluid) flexStyle = flexFluid;
    if (fixed) flexStyle = flexFixed;
    return createElement(component, {...props, ref: "DIV", style: {...flexStyle, ...style, width}}, children);
  }
}
