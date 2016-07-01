/** Created by ge on 4/24/16. */
import React from 'react';
import {Flex} from "./";
import {FlexItem} from "./";

export default function FlexFillExample() {
  return (
    <div className="example-container" style={{position: "relative", width: "300px", height: "200px", border: "solid 4px rgba(255, 0, 0, 0.2)"}}>

      <h4>Flex Fill example</h4>
      <p>flex box will fill the container with <code>position: abstract</code></p>
      <Flex column fill>
        <FlexItem fixed height="50px" style={{backgroundColor: "gray"}}>
          this is a fixed column with height of 500px.
        </FlexItem>
        <FlexItem fluid style={{backgroundColor: "#23aaff"}}>
          this is the fluid container.
        </FlexItem>
      </Flex>

    </div>);
}
