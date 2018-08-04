import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContainerComponent } from './panel/container/container.component';
import { MainBarComponent } from './panel/main-bar/main-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    WelcomeComponent,
    ContainerComponent,
    MainBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
