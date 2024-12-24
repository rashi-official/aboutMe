import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomePageComponent,
    ServicePageComponent,
    SubscribePageComponent,
    ContactPageComponent,
    AboutMePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
