import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingareaComponent }      from './workingarea/workingarea.component';
import { ExpenseworkingareaComponent }      from './expenseworkingarea/expenseworkingarea.component';
import { IncomeworkingareaComponent }      from './incomeworkingarea/incomeworkingarea.component';
import { AddnewentryComponent }      from './addnewentry/addnewentry.component';

const routes: Routes = [
  { path: 'workingarea', component: WorkingareaComponent },
  { path: 'expenseworkingarea', component: ExpenseworkingareaComponent },
  { path: 'incomeworkingarea', component: IncomeworkingareaComponent }
  
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}