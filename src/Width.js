import {createElement, cloneElement} from 'react';

export default function Width(_props) {
  const {component, style, children = null, width, block, inlineBlock, ...props} = _props;
  const thisStyle = {
    flex: "0 0 auto",
    position: "relative",
    width: `${width}`,
    boxSizing: "border-box"
  };
  if (block) thisStyle.display = "block";
  if (inlineBlock) thisStyle.display = "inline-block";
  const thisProps = {...props, style: {...thisStyle, ...style}};
  if (component) return createElement(component, thisProps, children);
  else return cloneElement(children, thisProps);
}
