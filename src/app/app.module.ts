import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { BannerComponent } from './components/banner/banner.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { AptitudeContainerComponent } from './components/aptitude-container/aptitude-container.component';
import { BcraGraphComponent } from './labs/bcra-graph/bcra-graph.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardContainerComponent,
    AptitudeContainerComponent,
    BcraGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
