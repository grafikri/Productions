import React from "react"
import { connect } from "react-redux"
import { ApplicationState } from "../../../store/appInterfaces"
import { default as RCategoryDetailsTemplate } from "../../templates/RCategoryDetails"

class RCategories extends React.Component<ReturnType<typeof mapStateToProps>> {
  render() {
    return (
      <div className="p-r-category-details">
        <RCategoryDetailsTemplate category={this.props.category} />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  category: state.category
})

export default connect(mapStateToProps)(RCategories)
