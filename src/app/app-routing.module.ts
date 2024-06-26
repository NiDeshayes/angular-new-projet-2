import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitComponent } from './produit/produit.component';
import { PageAProposComponent } from './page-a-propos/page-a-propos.component';

const routes: Routes = [
  { path: '', component: AccueilComponent }, 
  { path: 'produits', component: ProduitComponent },
  { path: 'a-propos', component: PageAProposComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'produit/:nom', component: ProduitComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
