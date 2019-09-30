import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchappComponent } from "./searchapp/searchapp.component";
import { SearchFormComponent } from "./search-form/search-form.component";

const routes: Routes = [
  { path: "searchapp", component: SearchappComponent },
  { path: "", component: SearchFormComponent },
  { path: "searchapp/:id", component: SearchappComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
