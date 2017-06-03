import {createElement, cloneElement} from 'react';

const thisStyle = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
  width: "100%"
};
export default function Row(_props) {
  const {component, style, children = null, ...props} = _props;
  const thisProps = {...props, style: {...thisStyle, ...style}};
  if (component) {
    return createElement(component, thisProps, children);
  } else {
    if (children.length > 1) throw new Error("when used as a abstract container, can have only one child");
    return cloneElement(children, thisProps);
  }
}
