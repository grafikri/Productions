import "./index.css"
import React from "react"
import RHeader from "../../organisms/RHeader"
import { CircularProgress, Typography } from "@material-ui/core"

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
          ) : this.props.errorMessage === undefined ||
            this.props.errorMessage === "" ? (
            this.props.children
          ) : (
            <div>
              <Typography color="error">
                {this.props.errorMessage}. Lütfen sayfayı yenileyerek tekrar
                deneyin.
              </Typography>
            </div>
          )}
        </div>
      </div>
    )
  }
}
