import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlyrModule } from 'ngx-plyr';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';

import { WatchComponent } from './components/watch/watch.component';
import { HomeComponent } from './components/home/home.component';
import { ChannelComponent } from './components/channel/channel.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsOpacity: 1,
  bgsPosition: POSITION.centerCenter,
  bgsSize: 70,
  bgsType: SPINNER.threeBounce,
  blur: 5,
  delay: 0,
  // fastFadeOut: true,
  // fgsColor: 'black',
  // fgsPosition: POSITION.centerCenter,
  fgsSize: 0,
  // fgsType: SPINNER.chasingDots,
  // gap: 24,
  // logoPosition: POSITION.centerCenter,
  // logoSize: 120,
  // logoUrl: 'assets/navbar.png',
  // overlayBorderRadius: '0',
  // overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 10,
  // hasProgressBar: true,
  // text: 'Welcome to ngx-ui-loader',
  // textColor: '#FFFFFF',
  // textPosition: POSITION.centerCenter,
  // maxTime: -1,
  // minTime: 500
};

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    HomeComponent,
    ChannelComponent,
    SearchComponent,
    NavbarComponent
	],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlyrModule,
		NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
