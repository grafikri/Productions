import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import RAddSingleItem from "../../molecules/RAddSingleItem"
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
}

export default class RCategories extends React.Component<CategoriesProps, any> {
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
            <div className="categories">
              {this.props.list.length == 0 ? (
                <Typography variant="subtitle1" gutterBottom>
                  Şimdilik bir kategori bulunmuyor
                </Typography>
              ) : (
                <Paper elevation={1}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ad</TableCell>
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
                            {item.name}
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
