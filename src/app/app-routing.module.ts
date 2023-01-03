import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAdministrationComponent } from './quiz-administration/quiz-administration.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';

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
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
