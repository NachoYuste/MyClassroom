import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: '/classroom', component: ClassListComponent},
  {path: '/classroom/:id', component: StudentListComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
