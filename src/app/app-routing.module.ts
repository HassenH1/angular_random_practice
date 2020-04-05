import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
