/**
 * Created by ge on 6/24/16.
 */
import React, {Component} from "react";
import Markdown from "react-markdownit";

import Highlight from "@episodeyang/react-highlight.js";
import PropsTable from "react-component-props-table";

import FlexColumnExample from "../Flex-column.example";
import FlexRowExample from "../Flex-row.example";
import FlexFillExample from "../Flex-fill.example";
import FlexColumnSource from "!!raw!../Flex-column.example";
import FlexRowSource from "!!raw!../Flex-row.example";
import FlexFillSource from "!!raw!../Flex-fill.example";
import FlexAST from "!!react-docgen!../Flex";
import FlexItemAST from "!!react-docgen!../FlexItem";

export default class Readme extends Component {
  render() {
    return (
      <Markdown stripIndent={true}>{`
        # React Layout Components

        A collection of layout components that allow you to write responsive views in a functional way.


        [![github](https://img.shields.io/github/downloads/episodeyang/layout-components/total.svg?style=flat-square&maxAge=2592000)]()

        ## Usage

        ~~~shell
        npm install layout-components
        ~~~

        ## Example Component: \`Flex\` and \`FlexItem\`

        Flex and FlexItems are used in conjunction to build a flex box.

        ### Props: \`Flex\`
        `}
        <div className="table-container horizontal-scroll flex-column center">
          <PropsTable propMetaData={FlexAST.props}/>
        </div>
        ### Props: `FlexItem`
        <div className="table-container horizontal-scroll flex-column center">
          <PropsTable propMetaData={FlexItemAST.props}/>
        </div>
        {`### Usage Example`}
        <FlexRowExample/>
        #### Source Code
        <Highlight>{FlexRowSource}</Highlight>
        <FlexColumnExample/>
        #### Source Code
        <Highlight>{FlexColumnSource}</Highlight>
        <FlexFillExample/>
        #### Source Code
        <Highlight>{FlexFillSource}</Highlight>
        {`
        ## Develop

        1. First make your changes, then git commit. Use \`serve-docs\` to view live update at [http://localhost:5000](http://localhost:5000).
        2. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
        3. Then remember to push to master.

        `}
      </Markdown>
    )
  }
}
