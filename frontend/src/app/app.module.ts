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
import { MatFileUploadModule } from 'mat-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqListComponent,
    FaqSolutionComponent,
    TicketComponent,
    ConfirmationDialogComponent,
    FilterPipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
