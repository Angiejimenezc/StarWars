import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
