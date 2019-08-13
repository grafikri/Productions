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
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.list.map(item => (
                <TableRow hover key={item.id} style={{ cursor: "pointer" }}>
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
