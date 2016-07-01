/** Created by ge on 4/24/16. */
import React from 'react';
import {Flex} from "./";
import {FlexItem} from "./";

export default function FlexColumnExample() {
  return (
    <div className="example-container" style={{position: "relative"}}>

      <h4>Flex column example</h4>
      <Flex column style={{height:"200px"}}>
        <FlexItem fixed height="50px" style={{backgroundColor: "gray"}}>
          this is a fixed column with height of 500px.
        </FlexItem>
        <FlexItem fluid style={{backgroundColor: "#23aaff"}}>
          <br/>
        </FlexItem>
      </Flex>

    </div>);
}
