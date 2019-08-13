import React from "react"
import { connect } from "react-redux"
import { default as RCategoriesTemplate } from "../../templates/RCategories"
import { ApplicationState } from "../../../store/appInterfaces"

import { addNewCategory } from "../../../redux/actions"
import { fetchCategories } from "../../../thunk"

class RCategories extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    return (
      <div className="p-r-categories">
        <RCategoriesTemplate
          errorMessage={this.props.errorMessage}
          loading={this.props.loading}
          handleSubmit={name => {
            this.props.add(name)
          }}
          handleClick={id => {
            console.log("id: ", id)
          }}
          list={this.props.list}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  list: state.categories,
  loading: state.application.layoutLoading,
  errorMessage: state.application.layoutErrorMessage
})

const mapDispatchToProps = (dispatch: any) => ({
  add: (name: string): void => {
    dispatch(addNewCategory(name))
  },
  getCategories: () => {
    dispatch(fetchCategories())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RCategories)
