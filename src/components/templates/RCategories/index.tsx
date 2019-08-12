import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import RAddSingleItem from "../../molecules/RAddSingleItem"
import { Category } from "../../../store/appInterfaces"

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
interface CategoriesProps {
  loading?: boolean
  list: Category[]
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
              )}
            </div>
          </div>
        </CommonLayout>
      </div>
    )
  }
}
