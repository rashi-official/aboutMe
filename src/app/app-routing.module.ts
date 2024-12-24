import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },         // Default route (home page)
  { path: 'services', component: ServicePageComponent },
  { path: 'subscribe', component: SubscribePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about-me', component: AboutMePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
