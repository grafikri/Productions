import "./index.css"
import React from "react"
import RHeader from "../../organisms/RHeader"
import { CircularProgress } from "@material-ui/core"

interface RCommonLayoutProps {
  loading?: boolean
  errorMessage?: string
}

export default class RCommonLayout extends React.Component<RCommonLayoutProps> {
  render() {
    return (
      <div className="o-r-common-layout">
        <RHeader />
        <div className="container">
          {this.props.loading === undefined || this.props.loading === true ? (
            <CircularProgress size={24} />
          ) : this.props.errorMessage === undefined ? (
            this.props.children
          ) : (
            this.props.errorMessage
          )}
        </div>
      </div>
    )
  }
}
