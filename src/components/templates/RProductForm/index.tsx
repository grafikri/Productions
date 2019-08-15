//import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import { LayoutErrorProps } from "../../../store/appInterfaces"
import RAddNewProductForm, { Form } from "../../molecules/RAddNewProductForm"
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
   * Dialog'u açar kapatır
   */
  dialogOpen: boolean

  /**
   * Ürün sunucuya kayıt olurken true olur
   */
  formSaving: boolean

  /**
   * Form'u üst component'e submit etmek için kullanlıır
   * @param form Formun içeriği
   */
  handleSubmit(form: Form): void

  /**
   * Dialog kapatılmak istenildiğinde tetiklenir
   */
  handleClose(): void
}

/**
 * Props değerleri
 */
interface RProductFormStates extends LayoutErrorProps {
  /**
   * Dialog'u açar kapatır
   */
  dialogOpen: boolean
}

export default class RProductForm extends React.Component<RProductFormProps> {
  render() {
    return (
      <div className="t-r-product-form">
        <CommonLayout loading={false} errorMessage={""}>
          <RAddNewProductForm
            formSaving={this.props.formSaving}
            categories={[
              { value: "O_1234", label: "Opel" },
              { value: "M_1234", label: "Mazda" }
            ]}
            handleSubmit={form => {
              this.props.handleSubmit(form)
            }}
          />

          <Dialog
            open={this.props.dialogOpen}
            onClose={() => {
              this.props.handleClose()
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{this.props.dialogTitle}</DialogTitle>
            <DialogContent>
              <DialogContentText>{this.props.dialogDesc}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.props.handleClose()
                }}
                color="primary"
                autoFocus
              >
                Tamam
              </Button>
            </DialogActions>
          </Dialog>
        </CommonLayout>
      </div>
    )
  }
}
