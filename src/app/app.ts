import {
  Component, signal
}
  from '@angular/core';

interface Tecla {
  teclaNombre: string;
  numeroSonido: number;
  color: string;
}

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('app-piano');

  teclados: Tecla[] = [
    {
      teclaNombre: '1',
      numeroSonido: 1,
      color: 'black'
    },

    {
      teclaNombre: '2',
      numeroSonido: 2,
      color: 'white'
    },

    {
      teclaNombre: '3',
      numeroSonido: 3,
      color: 'black'
    },

    {
      teclaNombre: '4',
      numeroSonido: 4,
      color: 'white'
    },

    {
      teclaNombre: '5',
      numeroSonido: 5,
      color: 'black'
    },

    {
      teclaNombre: '6',
      numeroSonido: 6,
      color: 'white'
    },

    {
      teclaNombre: '7',
      numeroSonido: 7,
      color: 'black'
    }
  ]

  aplicarSonido(numeroTeclado: number) {
    var audio = new Audio();

    audio.src = "sonidos/note" + numeroTeclado + ".mp3";
    audio.load();
    audio.play();
  }
}