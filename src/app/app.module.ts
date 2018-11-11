import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down-header/drop-down.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { HwPanelComponent } from './hw-panel/hw-panel.component';
import { WishListPanelComponent } from './wish-list-panel/wish-list-panel.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatGridListModule, MatTabsModule, MatListModule} from '@angular/material';
import { TabBarComponent } from './tab-bar/tab-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    HwPanelComponent,
    WishListPanelComponent,
    LoginPageComponent,
    TabBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
