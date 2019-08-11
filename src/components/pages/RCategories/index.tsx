import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { default as RCategoriesTemplate } from "../../templates/RCategories"
import { Category, ApplicationState } from "../../../store/appInterfaces"

import { addNewCategory } from "../../../redux/actions"

class RCategories extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  componentDidMount() {
    console.log("props: ", this.props)
  }
  render() {
    return (
      <div className="p-r-categories">
        <RCategoriesTemplate
          handleSubmit={name => {
            console.log("name: ", name)
            this.props.add(name)
          }}
          list={this.props.list}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  list: state.categories
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (name: string): void => {
    dispatch(addNewCategory(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RCategories)
