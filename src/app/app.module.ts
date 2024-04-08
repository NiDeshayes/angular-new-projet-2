import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { LeHeaderComponent } from './le-header/le-header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageAProposComponent } from './page-a-propos/page-a-propos.component';
import { ProduitComponent } from './produit/produit.component';
import { LeFooterComponent } from './le-footer/le-footer.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    LeHeaderComponent,
    AccueilComponent,
    PageAProposComponent,
    ProduitComponent,
    LeFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
