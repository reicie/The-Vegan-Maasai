import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: "", redirectTo:"/home", pathMatch: "full" },
  { path: "home", component: HomeComponent }, 
  { path: "blog", component: BlogComponent }, 
  { path: "recipes", component: RecipesComponent }, 
  { path: "about", component: AboutComponent }, 
  { path: "contact-us", component: ContactUsComponent }, 
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
