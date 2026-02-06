import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Image {
  src: string;
  alt: string;
  title: string;
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-gallery',
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  images: Image[] = [
    {
      src: 'https://picsum.photos/300/200?random=1',
      alt: 'Imagen 1',
      title: 'Paisaje Montañoso',
      category: 'Naturaleza',
      tags: ['montaña', 'paisaje', 'verde']
    },
    {
      src: 'https://picsum.photos/300/200?random=2',
      alt: 'Imagen 2',
      title: 'Ciudad Moderna',
      category: 'Urbano',
      tags: ['ciudad', 'edificios', 'moderno']
    },
    {
      src: 'https://picsum.photos/300/200?random=3',
      alt: 'Imagen 3',
      title: 'Naturaleza',
      category: 'Naturaleza',
      tags: ['bosque', 'árboles', 'verde']
    },
    {
      src: 'https://picsum.photos/300/200?random=4',
      alt: 'Imagen 4',
      title: 'Arquitectura',
      category: 'Arquitectura',
      tags: ['edificio', 'histórico', 'arquitectura']
    },
    {
      src: 'https://picsum.photos/300/200?random=5',
      alt: 'Imagen 5',
      title: 'Arte Abstracto',
      category: 'Arte',
      tags: ['abstracto', 'colores', 'arte']
    },
    {
      src: 'https://picsum.photos/300/200?random=6',
      alt: 'Imagen 6',
      title: 'Fotografía Nocturna',
      category: 'Nocturno',
      tags: ['noche', 'ciudad', 'luces']
    }
  ];
}
