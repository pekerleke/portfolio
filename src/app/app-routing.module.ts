import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MlTrendsComponent } from './labs/ml-trends/ml-trends.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'mlTrends', component: MlTrendsComponent},
  { path: 'mlTrends/', component: MlTrendsComponent},
  { path: 'mlTrends/', component: MlTrendsComponent},
  { path: 'test', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
