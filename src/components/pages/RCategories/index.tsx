import React from "react"
import { connect } from "react-redux"
import { default as RCategoriesTemplate } from "../../templates/RCategories"
import { Category, ApplicationState } from "../../../store/appInterfaces"

interface RCategoriesProps {
  list: Category[]
}

class RCategories extends React.Component<RCategoriesProps> {
  render() {
    return (
      <div className="p-r-categories">
        <RCategoriesTemplate
          handleSubmit={name => {
            console.log("name: ", name)
          }}
          list={this.props.list}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState): RCategoriesProps => ({
  list: state.categories
})

export default connect(mapStateToProps)(RCategories)
