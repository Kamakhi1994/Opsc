import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

const routes: Routes = [
  {path:"",component:SidepanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
