/** Created by ge on 4/24/16. */
import React from 'react';
import PropTypes from 'prop-types'

import {flexRow, flexColumn} from "./style-globals";

export default function Flex(_props) {
  const {component="div", style, row, column, fill, align, justify, children = [], ...props} = _props;
  const Tag = component;
  let thisStyle;
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

const {any, bool, string} = PropTypes;
Flex.prototype.propTypes = {
  /** an optional */
  component: any,
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
