import React from "react"
import { connect } from "react-redux"
import { default as RCategoriesTemplate } from "../../templates/RCategories"
import { ApplicationState } from "../../../store/appInterfaces"
import {
  fetchCategories,
  fetchFilterCategories,
  addCategory
} from "../../../thunk"
import { withRouter, RouteComponentProps } from "react-router-dom"

class RCategories extends React.Component<
  ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    RouteComponentProps
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
            this.props.addCategory(name)
          }}
          handleClick={id => {
            this.props.history.push("/category/" + id)
          }}
          handleFilterSubmit={(name, code) => {
            this.props.getFilteredCategories(name, code)
          }}
          handleFilterReset={() => {
            this.props.getFilteredCategories()
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
  addCategory: (name: string): void => {
    dispatch(addCategory(name))
  },
  getCategories: () => {
    dispatch(fetchCategories())
  },
  getFilteredCategories: (name?: string, code?: string) => {
    dispatch(fetchFilterCategories(name, code))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RCategories))
