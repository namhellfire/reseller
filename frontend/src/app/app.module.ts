import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MolHeaderComponent } from './modules/mol-header/mol-header.component';
import { MolStickyBottomComponent } from './modules/mol-sticky-bottom/mol-sticky-bottom.component';
import { MolBottomHeaderComponent } from './modules/mol-bottom-header/mol-bottom-header.component';
import { MolFooterComponent } from './modules/mol-footer/mol-footer.component';
import { MolMainContentComponent } from "./modules/mol-main-content/mol-main-content.component";
import { MolBoxTrackOrderComponent } from "./modules/mol-box-track-order/mol-box-track-order.component";
import { MolMainAuthenComponent } from "./modules/mol-main-authen/mol-main-authen.component";
import { MolListProductComponent } from "./modules/mol-list-product/mol-list-product.component";
import { MolCollectionMenuComponent } from "./modules/mol-collection-menu/mol-collection-menu.component";
import { MolMainListProductComponent } from "./modules/mol-main-list-product/mol-main-list-product.component";
import { MolSidebarFilterToolComponent } from "./modules/mol-sidebar-filter-tool/mol-sidebar-filter-tool.component";
import { MolCollectionVerticalComponent } from "./modules/mol-collection-vertical/mol-collection-vertical.component";
import { MolSingleProductComponent } from "./modules/mol-single-product/mol-single-product.component";

// pages
import { HomeComponent } from './pages/home/home.component'
import { AuthenComponent } from "./pages/authen/authen.component";
import { ListProductPageComponent } from "./pages/list-product-page/list-product-page.component";


// routing
import { routedComponents } from './routing'

// services
import { CredentialService } from "./services/credential.service";

@NgModule({
  declarations: [
    //components
    AppComponent, MolHeaderComponent, MolStickyBottomComponent,
    MolBottomHeaderComponent, MolFooterComponent,
    MolMainContentComponent, MolBoxTrackOrderComponent, 
    MolMainAuthenComponent,MolListProductComponent,
    MolCollectionMenuComponent,MolMainListProductComponent,
    MolSidebarFilterToolComponent,MolCollectionVerticalComponent,
    MolSingleProductComponent,


    // pages
    HomeComponent, AuthenComponent,ListProductPageComponent,
  ],
  imports: [
    BrowserModule,routedComponents,HttpModule,FormsModule
  ],
  providers: [CredentialService],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
