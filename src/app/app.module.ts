import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppLayoutComponent } from "./layout/app-layout/app-layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./layout/header/header.component";
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from "./pages/home/home.component";
import { JobListComponent } from "./components/job-list/job-list.component";
import { JobCategoryComponent } from "./components/job-category/job-category.component";


import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PartnerComponent } from './components/partner/partner.component';
import { APP_SERVICES } from './services/app.services';
import { APP_STORE } from './store/app.store';
import 'firebase/firestore';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    HomeComponent,
    JobListComponent,
    JobCategoryComponent,
    PartnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule,
    MobxAngularModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    APP_SERVICES,
    APP_STORE,
    {provide: SWIPER_CONFIG,useValue: DEFAULT_SWIPER_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
