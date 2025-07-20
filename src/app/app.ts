import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list'; // 1. Importa tu componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CharacterListComponent], // 2. Añádelo aquí
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'rick-and-morty-angular-v20';
}