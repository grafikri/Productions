import React from "react"
import { connect } from "react-redux"
import { ApplicationState } from "../../../store/appInterfaces"
import { default as RCategoryDetailsTemplate } from "../../templates/RCategoryDetails"
import { withRouter, RouteComponentProps } from "react-router-dom"

class RCategories extends React.Component<ReturnType<typeof mapStateToProps>> {
  render() {
    return (
      <div className="p-r-category-details">
        <RCategoryDetailsTemplate
          category={this.props.category}
          products={[{ id: "124", name: "Opel", price: "10", code: "123" }]}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  category: state.category
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RCategories))
