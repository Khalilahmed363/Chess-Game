import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from "../app/components/main-view/main-view.component";
import { BoardViewComponent } from "../app/components/board-view/board-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'mainpage', component: MainViewComponent},
  { path: 'chess', component: BoardViewComponent},
  { path: '**' , component : MainViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainViewComponent,BoardViewComponent]
