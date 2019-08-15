//import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import { LayoutErrorProps } from "../../../store/appInterfaces"
import RAddNewProductForm, { Form } from "../../molecules/RAddNewProductForm"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
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
   * Ürünün eklenebileceği kategoriler
   */
  categories: {
    value: string
    label: string
  }[]
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
        <CommonLayout
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        >
          {this.props.categories.length == 0 ? (
            <Typography>
              Ürün ekleyebilmek için önce kategori eklemelisiniz. Şu anda hiç
              kategori bulunmuyor.
            </Typography>
          ) : (
            <RAddNewProductForm
              formSaving={this.props.formSaving}
              categories={this.props.categories}
              handleSubmit={form => {
                this.props.handleSubmit(form)
              }}
            />
          )}

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
