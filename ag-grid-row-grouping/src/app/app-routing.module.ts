import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleRowGroupingComponent } from './simple-row-grouping/simple-row-grouping.component';
import { MultiAutoColGroupComponent } from './multi-auto-col-group/multi-auto-col-group.component';

const appRoutes: Routes = [
  {
    path: 'simpleRowGrouping',
    component: SimpleRowGroupingComponent
  },
  {
    path: 'multiAutoColumnGroup',
    component: MultiAutoColGroupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
