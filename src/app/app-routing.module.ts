import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { WhitepageComponent } from './whitepage/whitepage.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', component: WhitepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
