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
}

export default class RProductList extends React.Component<RProductListProps> {
  render() {
    return (
      <div>
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
    )
  }
}
