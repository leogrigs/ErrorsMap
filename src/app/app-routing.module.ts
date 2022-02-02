import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './content/errors/errors.component';
import { GuidesComponent } from './content/guides/guides.component';
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'errors', component: ErrorsComponent },
  { path: 'guides', component: GuidesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }