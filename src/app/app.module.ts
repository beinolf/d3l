import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule, MatExpansionModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatTabsModule, MatListModule} from '@angular/material';
import { TabBarComponent } from './tab-bar/tab-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TabBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
