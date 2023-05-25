import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimiComponent } from '../app/primi/primi.component'
import { SecondiComponent } from '../app/secondi/secondi.component';

const routes: Routes = [
  { path: 'primi', component: PrimiComponent },
  { path: 'secondi', component: SecondiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
