import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MolHeaderComponent} from './modules/mol-header/mol-header.component';
import {MolStickyBottomComponent} from './modules/mol-sticky-bottom/mol-sticky-bottom.component';
import {MolBottomHeaderComponent} from './modules/mol-bottom-header/mol-bottom-header.component';
import {MolFooterComponent} from './modules/mol-footer/mol-footer.component';
import {  MolMainContentComponent} from "./modules/mol-main-content/mol-main-content.component";
import { MolBoxTrackOrderComponent } from "./modules/mol-box-track-order/mol-box-track-order.component";

// pages
import {IndexComponent} from './pages/index.component'

@NgModule({
  declarations: [
    //components
    AppComponent, MolHeaderComponent, MolStickyBottomComponent,
    MolBottomHeaderComponent,MolFooterComponent,
    MolMainContentComponent,MolBoxTrackOrderComponent,

    // pages
    IndexComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
