import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAdministrationComponent } from './quiz-administration/quiz-administration.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    component: QuizAdministrationComponent,
    path: 'admin',
  },
  {
    component: QuizEditorComponent,
    path: 'editor',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
