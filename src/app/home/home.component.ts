import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Carousel, Modal } from 'bootstrap';
declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  carouselInstance!: Carousel;

  slides = [
    {
      img: 'assets/img/1_home.jpg',
      alt: 'Helping Our Investors Meet Their Wealth Objectives',
      title: 'Helping Our Investors Meet Their Wealth Objectives',
      text: 'Magadh Capital is a Mumbai based SEBI-registered Portfolio Manager'
    },
    {
      img: 'assets/images/slide_backbone.jpg',
      alt: 'The Non-negotiables',
      title: 'The Non-negotiables',
      text: 'Integrity, Knowledge, Simplicity'
    },
    {
      img: 'assets/images/inner_difference.jpg',
      alt: 'Our Conventional Style Makes Us Different',
      title: 'Our Conventional Style Makes Us Different',
      text: 'Old school investment style may seem boring but history suggests that if it is applied with discipline and patience it can lead to healthy wealth creation'
    },
    {
      img: 'assets/images/invest_philosophy.jpg',
      alt: 'Alignment in Investment Philosophy and Life Philosophy',
      title: 'Alignment in Investment Philosophy and Life Philosophy',
      text: 'Application of a mix of top-down as well as bottom-up approach to create a portfolio of stocks selected by dovetailing fundamental analysis and behavioural finance, and then running the portfolio in a disciplined manner'
    },
    {
      img: 'assets/img/home_tree.jpg',
      alt: 'Standing on The Giants Shoulders',
      title: 'Standing on The Giant\'s Shoulders',
      text: 'Our investing style draws heavily from top practitioners of fundamental style of investing, from our own experience in the field, and from the masters in the field of behavioural economics.'
    },
    {
      img: 'assets/images/slide_risk.jpg',
      alt: 'Awareness of Pitfalls',
      title: 'Awareness of Pitfalls',
      text: 'In keeping with our view that markets are inherently risky, we assign high priority to assessing, understanding and optimising risk pertaining to stocks and portfolios - Capital protection is a crucial focus area for us'
    }
  ];

  ngAfterViewInit(): void {
    const carouselEl = document.getElementById('homeCarousel');

    if (carouselEl) {
      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const intervalValue = prefersReducedMotion ? 0 : 6000;

      this.carouselInstance = new Carousel(carouselEl, {
        interval: intervalValue,
        pause: 'hover',
        wrap: true,
        touch: true
      });
    }
  }

  pauseCarousel() {
    this.carouselInstance.pause();
  }

  playCarousel() {
    this.carouselInstance.cycle();
  }
  @ViewChild('exampleModal') modalElement!: ElementRef;
  private modal!: Modal;
  // ngAfterViewInit(): void {
  //   const element = document.getElementById('homeCarousel');
  //   if (element) {
  //     const instance = bootstrap.Carousel.getOrCreateInstance(element, {
  //       interval: 6000,
  //       pause: false,
  //       ride: 'carousel',
  //       touch: true,
  //       wrap: true
  //     });
  //     instance.cycle();
  //   }    
  //   // if (sessionStorage.getItem('hideModal') !== 'true') {
  //   // this.modal = new Modal(this.modalElement.nativeElement, {
  //   //   backdrop: 'static', // optional
  //   //   keyboard: true
  //   // });
  //   // this.modal.show();
  //   // }
  // }

  isScrollTopVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollTopVisible = window.pageYOffset > 300;
  }

  scrollToTop(event: Event): void {
    event.preventDefault(); // prevents anchor jump
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // closeModal() {
  //   this.modal.hide();
  //   sessionStorage.setItem('hideModal', 'true');
  // }
  // ngOnDestroy(): void {
  //   this.closeModal();
  // }
}
