import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from './core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/auth').then((m) => m.AuthRoutingModule)
  },
  {
    path: 'app',
    loadChildren: () => import('@modules/layout').then((m) => m.LayoutModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
