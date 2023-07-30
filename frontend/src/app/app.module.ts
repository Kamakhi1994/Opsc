import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { SidepanelRightComponent } from './components/sidepanel-right/sidepanel-right.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidepanelComponent,
    SidepanelRightComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
