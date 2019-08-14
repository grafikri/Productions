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
  /**
   * Kayıt sonucunun olumlu ya da olumsuz olmasına göre title değeri değişir
   */
  dialogTitle: string
  /**
   * Kayıt sonucunun olumlu ya da olumsuz olmasına göre desc değeri değişir
   */
  dialogDesc: string
  /**
   * Dialog'u açıp kapatır
   */
  dialogOpen: boolean
  /**
   * Ürünün kaydı olumlu ise true gelir
   * true olduğu taktirde ürün detayına yönlendirme yaparız
   * false olduğu taktirde bu sayfada kalmaya devam eder
   */
  result?: boolean
}

export default class RProductForm extends React.Component<RProductFormProps> {
  constructor(props: RProductFormProps) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }
  state = {
    open: this.props.dialogOpen
  }
  handleClose() {
    this.setState({
      open: false
    })
  }
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
            open={this.state.open}
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
