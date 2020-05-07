import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HomeComponent } from './components/home/home.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { FaqSolutionComponent } from './components/faq-solution/faq-solution.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UtilitiesService } from './services/utilities/utilities.service';
import { FaqCreateComponent } from './components/faq-create/faq-create.component';
import { MachineInfoDialogComponent } from './components/machine-info-dialog/machine-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqListComponent,
    FaqSolutionComponent,
    FaqCreateComponent,
    TicketComponent,
    ConfirmationDialogComponent,
    MachineInfoDialogComponent,
    FilterPipe,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FilterPipe
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    MachineInfoDialogComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
