/**
 * Created by ge on 6/24/16.
 */
import React, {Component} from "react";
import Markdown from "react-markdownit";

import Highlight from "@episodeyang/react-highlight.js";
import PropsTable from "react-component-props-table";

import FlexExample from "../Flex.example";
import FlexSource from "!!raw!../Flex.example";
import FlexAST from "!!react-docgen!../Flex";

export default class Readme extends Component {
  render() {
    return (
      <Markdown stripIndent={true}>{`
      # React Layout Components

      A collection of layout components that allow you to write responsive views in a functional way.

      [![github](https://img.shields.io/github/downloads/episodeyang/react-layout-components/total.svg?style=flat-square&maxAge=2592000)]()

      ## Usage

      ~~~shell
      npm install react-layout-components
      ~~~

      ## Example Component: \`Flex\`
      This component makes you a delicious Subway sandwich.
      `}
        <FlexExample/>
        ### Props
        {`This table below is generated automatically`}
        <div className="table-container horizontal-scroll flex-column center">
          <PropsTable propMetaData={FlexAST.props}/>
        </div>
        {`
      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
        <Highlight>{FlexSource}</Highlight>
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
