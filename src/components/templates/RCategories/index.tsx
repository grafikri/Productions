import "./index.css"
import React from "react"

import CommonLayout from "../../organisms/RCommonLayout"
import RAddSingleItem from "../../molecules/RAddSingleItem"
import RCategoryFilter from "../../molecules/RCategoryFilter"
import { Category, LayoutErrorProps } from "../../../store/appInterfaces"

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@material-ui/core"

/**
 * Props değerleri
 */
interface CategoriesProps extends LayoutErrorProps {
  list: Category[]
  handleSubmit(name: string): void
  handleClick(id: string): void
  handleFilterSubmit(name: string, code: string): void
  handleFilterReset(): void
}

export default class RCategories extends React.Component<CategoriesProps> {
  render() {
    return (
      <div className="t-r-categories">
        <CommonLayout
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        >
          <div className="container">
            <div className="formInput">
              <RAddSingleItem
                handleSubmit={this.props.handleSubmit}
                placeHolder="Bir kategori adı girin"
              />
            </div>
            <div className="filter">
              <RCategoryFilter
                list={this.props.list}
                handleSubmit={(name, code) => {
                  this.props.handleFilterSubmit(name, code)
                }}
                handleReset={() => {
                  this.props.handleFilterReset()
                }}
              />
            </div>
            <div className="categories">
              {this.props.list.length == 0 ? (
                <Typography variant="subtitle1" gutterBottom>
                  Kategori bulunamadı.
                </Typography>
              ) : (
                <Paper elevation={1}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Kategori Adı</TableCell>
                        <TableCell>Kategori Kodu</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.list.map(item => (
                        <TableRow hover key={item.id}>
                          <TableCell
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              this.props.handleClick(item.id)
                            }}
                            component="th"
                            scope="row"
                          >
                            <Typography>{item.name}</Typography>
                          </TableCell>
                          <TableCell
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              this.props.handleClick(item.id)
                            }}
                            component="th"
                            scope="row"
                          >
                            <Typography>{item.code}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              )}
            </div>
          </div>
        </CommonLayout>
      </div>
    )
  }
}
