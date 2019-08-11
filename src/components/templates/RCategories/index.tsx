import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import RAddSingleItem from "../../molecules/RAddSingleItem"
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core"

/**
 * Her bir kategorinin içeriği
 */
export interface CategoryInfo {
  id: string
  name: string
  code: string
}

/**
 * Props değerleri
 */
interface CategoriesProps {
  list: CategoryInfo[]
  handleSubmit(name: string): void
}

export default class RCategories extends React.Component<CategoriesProps, any> {
  render() {
    return (
      <div className="t-r-categories">
        <CommonLayout>
          <div className="container">
            <div className="formInput">
              <RAddSingleItem
                handleSubmit={this.props.handleSubmit}
                placeHolder="Bir kategori adı girin"
              />
            </div>
            <div className="categories">
              <Paper elevation={1}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Ad</TableCell>
                      <TableCell align="right">Kod</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.list.map(item => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell align="right">{item.code}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </div>
        </CommonLayout>
      </div>
    )
  }
}
