import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel-footer',
  templateUrl: './carousel-footer.component.html',
  styleUrls: ['./carousel-footer.component.css'],
})
export class CarouselFooterComponent {
  currentSlideIndex = 0;
  itemsToShow = 4;
  slides = [
    {
      image: 'assets/images/sandy_mini2.jpg',
      text: 'A trilha do filme "Quando Eu Era Vivo" de 2014 com Antonio Fagundes e Sandy possui música de autoria, arranjada e produzida por Hugo Bellard.',
    },
    {
      image: 'assets/images/jorge_ben_jor.jpg',
      text: 'A trilha do filme "Quando Eu Era Vivo" de 2014 com Antonio Fagundes e Sandy possui música de autoria, arranjada e produzida por Hugo Bellard.',
    },
    {
      image: 'assets/images/mariozinho_rocha.jpg',
      text: 'Foi Mariozinho quem indicou o Hugo Bellard para fazer o arranjo original da consagrada Música anual de Natal da TV Globo.',
    },
    {
      image: 'assets/images/roupa_nova_mini.jpg',
      text: 'Nando e Kiko, da banda Roupa Nova, tendo ao centro o produtor e maestro Hugo Bellard, em foto recente na casa de um deles.Música de Hugo Bel... Ler mais ',
    },
    {
      image: 'assets/images/elizangela2.jpg',
      text: 'Elizangela gravou a música mais vendida em compacto simples no Brasil em todos os tempos: "Pertinho de Você", em produção e autoria de Hugo Bellard.',
    },
    {
      image: 'assets/images/sidney_magal.jpg',
      text: 'O sucesso "Meu Sangue Ferve Por Você" com Sidney Magal é arranjo de Hugo Bellard em gravação para a Universal Music - Polygram.',
    },
    {
      image: 'assets/images/fernandomendes2.jpg',
      text: 'Hugo Bellard fez o arranjo de "Você Não Me Ensinou a Te Esquecer" do Fernando Mendes que está ao lado dele na foto.A música foi regravada pelo Caetano Veloso.',
    },
    {
      image: 'assets/images/jose_augusto.jpg',
      text: 'O cantor José Augusto gravou seus primeiros grandes sucessos com arranjos de Hugo Bellard na Emi.Dois deles, a música "Meu Primeiro Amor"... Ler mais',
    },
    {
      image: 'assets/images/wando_mini2.jpg',
      text: 'O cantor Wando gravou "Me Cace Me Ache", de Hugo Bellard e Paulo Sérgio Valle, além de outra música da dupla - "Não Posso Ser Teu Amigo".',
    },
    {
      image: 'assets/images/peninhanew.jpg',
      text: "O sucesso e disco de platina 'Sonhos' (peninha) é mais um arranjo de Hugo Bellard.",
    },
  ];

  get visibleSlides() {
    const startIndex = this.currentSlideIndex;
    const endIndex = startIndex + this.itemsToShow;
    return this.slides.slice(startIndex, endIndex);
  }

  public updateSlide(direction: 'start' | 'half' | 'end') {
    const maxItems = this.slides.length;

    if (direction === 'start') {
      this.currentSlideIndex = 0;
    } else if (direction === 'half') {
      this.currentSlideIndex =
        Math.floor(maxItems / 2) - Math.floor(this.itemsToShow / 2);
    } else if (direction === 'end') {
      this.currentSlideIndex = maxItems - this.itemsToShow;
    }

    this.currentSlideIndex = Math.max(
      0,
      Math.min(this.currentSlideIndex, maxItems - this.itemsToShow)
    );
  }
}
