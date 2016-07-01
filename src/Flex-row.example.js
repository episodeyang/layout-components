/** Created by ge on 4/24/16. */
import React from 'react';
import {Flex} from "./";
import {FlexItem} from "./";

export default function FlexRowExample() {
  return (
    <div className="example-container">

      <h4>Flex row example</h4>
      <Flex row>
        <FlexItem fixed width="200px" style={{backgroundColor: "gray"}}>
          this is a fixed column with width of 200px
        </FlexItem>
        <FlexItem fluid style={{backgroundColor: "red"}}>
          this is a fluid column
        </FlexItem>
      </Flex>

    </div>);
}
