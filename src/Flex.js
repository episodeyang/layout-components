/** Created by ge on 4/24/16. */
import React, {PropTypes} from 'react';

import {flexRow, flexColumn} from "./style-globals";

export default function Flex(_props) {
  var {component="div", style, row, column, fill, align, justify, children = [], ...props} = _props;
  var Tag = component;
  var thisStyle;
  if (column) thisStyle = flexColumn;
  if (row) thisStyle = flexRow;
  if (fill) thisStyle = {
    ...thisStyle,
    position: "absolute",
    top: 0, bottom: 0, left: 0, right: 0
  };
  if (align) thisStyle.alignItems = align;
  if (justify) thisStyle.justifyContent= justify;
  return (
    <Tag style={ {...thisStyle, ...style}} {...props}>
      {children}
    </Tag>);
}

var {any, bool, string} = PropTypes;
Flex.prototype.propTypes = {
  /** an optional */
  component: string,
  row: any,
  column: any,
  fill: bool,
  /** one of center, start, end */
  align: string,
  /** one of stretch, center, start, end */
  justify: string,
  style: any
};
Flex.prototype.defaultProps = {
  component: "div"
};
