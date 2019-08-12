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
  TableBody,
  Typography
} from "@material-ui/core"
import { Product } from "../../../store/appInterfaces"
import RProductsList from "../../organisms/RProductList"

/**
 * Props değerleri
 */
interface ProductsProps {
  list: Product[]
  handleSubmit(name: string): void
}

export default class RProducts extends React.Component<ProductsProps, any> {
  render() {
    return (
      <div className="t-r-products">
        <CommonLayout>
          <div className="container">
            <div className="formInput">
              <RAddSingleItem
                handleSubmit={this.props.handleSubmit}
                placeHolder="Bir ürün adı girin"
              />
            </div>
            <div className="products">
              {this.props.list.length == 0 ? (
                <Typography variant="subtitle1" gutterBottom>
                  Şimdilik bir ürün bulunmuyor
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
