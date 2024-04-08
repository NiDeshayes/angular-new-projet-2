import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Produit {
  nom: string;
  description: string;
  prix: number;
  image: string; 
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  produits: Produit[] = [
    { nom: 'Obelix', description: 'Petite figurine D obelix portant un menyr', prix: 10, image: '../../assets/obelix.jpg' },
    { nom: 'Idefix', description: 'petit figurine reprensant Idefix', prix: 20, image: '../../assets/Idefix2.jpg' },
    { nom: 'Panoramix', description: 'Panoramix', prix: 15, image: '../../assets/Panoramix.jpg' },
    { nom: 'Asterix', description: 'Asterix qui réflechis', prix: 24, image: '../../assets/Asterix.jpg' },
  ];

  searchTerm: string = '';

  constructor(private router: Router) {}

  trierParPrixCroissant(): void {
    this.produits.sort((a, b) => a.prix - b.prix);
  }

  trierParPrixDecroissant(): void {
    this.produits.sort((a, b) => b.prix - a.prix);
  }

  get produitsFiltres(): Produit[] {
    return this.produits.filter(produit =>
      produit.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  voirProduit(nom: string): void {
    this.router.navigate(['/produit', nom]);
  }
}
