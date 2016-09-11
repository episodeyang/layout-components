/** Created by ge on 4/24/16. */
import {createElement, cloneElement} from 'react';

export default function Width(_props) {
  var {component, style, children = null, width, block, inlineBlock, ...props} = _props;
  var thisStyle = {
    flex: "0 0 auto",
    position: "relative",
    width: `${width}`,
    boxSizing: "border-box"
  };
  if (block) thisStyle.display = "block";
  if (inlineBlock) thisStyle.display = "inline-block";
  var thisProps = {...props, style: {...thisStyle, ...style}};
  if (component) return createElement(component, thisProps, children);
  else return cloneElement(children, thisProps);
}
