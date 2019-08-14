//import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import { LayoutErrorProps } from "../../../store/appInterfaces"
import RAddNewProductForm from "../../molecules/RAddNewProductForm"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core"
/**
 * Props değerleri
 */
interface RProductFormProps extends LayoutErrorProps {
  dialogTitle: string
  dialogDesc: string
  dialogOpen: boolean
}

export default class RProductForm extends React.Component<RProductFormProps> {
  handleClose() {}
  render() {
    return (
      <div className="t-r-product-form">
        <CommonLayout loading={false} errorMessage={""}>
          <RAddNewProductForm
            formSaving={false}
            categories={[
              { value: "O_1234", label: "Opel" },
              { value: "M_1234", label: "Mazda" }
            ]}
            handleSubmit={form => {
              console.log("form: ", form)
            }}
          />

          <Dialog
            open={this.props.dialogOpen}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{this.props.dialogTitle}</DialogTitle>
            <DialogContent>
              <DialogContentText>{this.props.dialogDesc}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Tamam
              </Button>
            </DialogActions>
          </Dialog>
        </CommonLayout>
      </div>
    )
  }
}
