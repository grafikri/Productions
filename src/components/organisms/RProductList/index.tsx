import React from "react"
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

interface RProductListProps {
  list: Product[]
  handleClick?(id: string): void
}

export default class RProductList extends React.Component<RProductListProps> {
  render() {
    return (
      <div>
        <Paper elevation={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ürün adı</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.list.map(item => (
                <TableRow
                  onClick={() => {
                    if (this.props.handleClick != undefined) {
                      this.props.handleClick(item.id)
                    }
                  }}
                  hover
                  key={item.id}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell component="th" scope="row">
                    <Typography>{item.name}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
