import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "", redirectTo:"/home", pathMatch: "full" },
  { path: "home", component: HomeComponent }, 
  { path: "blog", component: BlogComponent }, 
  { path: "recipes", component: RecipesComponent }, 
  { path: "about", component: AboutComponent }, 
  { path: "contact-us", component: ContactUsComponent }, 
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
