/** Created by ge on 4/24/16. */
import React from 'react';
import {Flex} from "./";
import {FlexItem} from "./";

export default function FlexExample(_props) {
  return (
    <Flex>
      <FlexItem fixed width="100px" style={{backgroundColor: "gray"}}>
        this is a fixed column with width of 100px
      </FlexItem>
      <FlexItem fluid width="100px" style={{backgroundColor: "red"}}>
        this is a fixed column with width of 100px
      </FlexItem>
    </Flex>);
}
