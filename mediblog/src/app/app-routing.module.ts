import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostdetailComponent } from './postdetail/postdetail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'post Detail', component: PostdetailComponent },
  { path: 'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
