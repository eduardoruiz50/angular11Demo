import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferGridComponent } from './components/transfer-grid/transfer-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmTransactionComponent } from './dialogs/confirm-transaction/confirm-transaction.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionResultComponent } from './dialogs/transaction-result/transaction-result.component';
import { AppFilterPipe } from './pipes/app-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransferGridComponent,
    ConfirmTransactionComponent,
    TransactionResultComponent,
    AppFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  entryComponents: [ ConfirmTransactionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
