/** Created by ge on 4/28/16.
 * Takes in a list of breakPoints.
 * When the window/container width is wider than the largest break-point,
 * pick the children with "default" key.
 * */
import React from "react";
let {any, node, func, string, number, bool} = React.PropTypes;
export default class Responsive extends React.Component {
  static propTypes = {
    breakPoints: any,
    children: node,
    fill: any,
    onResize: func
  };

  componentWillMount() {
    let orderedBreakPoints = this.orderBreakPoints();
    let width = this.getWidth();
    this.getBreakRange(orderedBreakPoints, width);
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.breakPoints !== newProps.breakPoints) this.orderBreakPoints(newProps);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  getWidth() {
    const {fill, height} = this.props;
    const {container} = this.refs;

    let width;
    if (fill) {
      if (height) width = container.clientHeight;
      else width = container.clientWidth;
    } else {
      if (height) width = window.innerHeight;
      else width = window.innerWidth;
    }
    this.setState({width});
    return width;
  }

  onResize = () => {
    let width = this.getWidth();
    this.getBreakRange(this.state.orderedBreakPoints, width);
    if (this.props.onResize) this.props.onResize(width);
  };

  orderBreakPoints(newProps) {
    let {breakPoints} = newProps || this.props;
    let orderedBreakPoints = Object.keys(breakPoints)
      .map((k) => ({breakPoint: breakPoints[k], breakKey: k}))
      .sort(function (a, b) {
        return (a.breakKey - b.breakKey);
      });
    this.setState({orderedBreakPoints});
    return orderedBreakPoints;
  }

  getBreakRange(orderedBreakPoints, width) {
    // breakPoints are sorted to be ascending
    if (orderedBreakPoints.length === 0) {
      return this.setState({breakKey: "default"});
    }
    for (let i = 0; i < orderedBreakPoints.length; i++) {
      if (width <= orderedBreakPoints[i].breakPoint) {
        this.setState({breakKey: orderedBreakPoints[i].breakKey});
        return;
      }
    }
    this.setState({breakKey: "default"});
  }

  renderChild() {
    let {children} = this.props;
    let {breakKey} = this.state || {};
    let _children = [].concat(children);
    for (let key in children) {
      if (children[key].props[`data-${breakKey}`]) return (children[key]);
    }
    return (<div>no child found</div>);
  }

  render() {
    let {fill} = this.props;
    if (fill) {
      return (
        <div ref="container">
          {this.renderChild()}
        </div>
      );
    } else {
      return (this.renderChild());
    }
  }
}
