import "./index.css"
import React from "react"
import RHeader from "../../organisms/RHeader"

export default class RCommonLayout extends React.Component {
  render() {
    return (
      <div className="o-r-common-layout">
        <RHeader />
        {this.props.children}
      </div>
    )
  }
}
