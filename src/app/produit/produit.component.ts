// produit.component.ts
import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  images: Image[] = [
    { src: 'assets/Asterix.jpg', alt: 'Image 1', title: 'Asterix', description: 'Figurine en plastique taille réelle Asterix H 100 CM ', price: 20 },
    { src: 'assets/Panoramix.jpg', alt: 'Image 2', title: 'Panoramix', description: 'Figurine en plastique taille réelle Panoramix h120 CM', price: 25 },
    { src: 'assets/Idefix.jpg', alt: 'Image 3', title: 'Idefix', description: 'Figurine en plastique taille réelle idefix H 40 CM', price: 15 },
    { src: 'assets/obelix.jpg', alt: 'Image 4', title: 'Obelix', description: 'Figurine en plastique taille réelle Obelix H 120 CM', price: 30 }
  ];

  selectedImageIndex: number = 0;

  get selectedImage(): Image {
    return this.images[this.selectedImageIndex];
  }

  prevImage(): void {
    this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
  }
}
