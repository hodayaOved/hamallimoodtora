import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GmaraPageComponent } from './components/gmara-page/gmara-page.component';

const routes: Routes = [
  { path: 'gmara', component: GmaraPageComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
