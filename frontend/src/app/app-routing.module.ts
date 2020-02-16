import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { FaqSolutionComponent } from './components/faq-solution/faq-solution.component';
import { TicketComponent } from './components/ticket/ticket.component';


const routes: Routes = [
{ path: 'home',      component: HomeComponent },
{ path: 'faq',      component: FaqListComponent },
{ path: 'solution',      component: FaqSolutionComponent },
{ path: 'ticket',      component: TicketComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
