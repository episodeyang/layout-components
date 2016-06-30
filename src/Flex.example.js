/** Created by ge on 4/24/16. */
import React from 'react';
import {Flex} from "./";
import {FlexItem} from "./";

export default function FlexExample() {
  return (
    <div className="example-container">
      <h4>Flex column example</h4>
      <Flex column>
        <FlexItem fixed height="100px" style={{backgroundColor: "gray"}}>
          this is a fixed column with height of 100px.
        </FlexItem>
        <FlexItem fluid style={{backgroundColor: "red"}}>
          <div style={{height: "100px", backgroundColor: "#23aaff"}}></div>
        </FlexItem>
      </Flex>
      <h4>Flex row example</h4>
      <Flex row>
        <FlexItem fixed width="100px" style={{backgroundColor: "gray"}}>
          this is a fixed column with width of 100px
        </FlexItem>
        <FlexItem fluid style={{backgroundColor: "red"}}>
          this is a fixed column with width of 100px
        </FlexItem>
      </Flex>
    </div>);
}
