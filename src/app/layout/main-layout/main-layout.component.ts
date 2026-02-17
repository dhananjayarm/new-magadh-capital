import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  isScrollTopVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollTopVisible = window.pageYOffset > 300;
  }

  scrollToTop(event: Event): void {
    event.preventDefault(); // prevents anchor jump
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.isScrollTopVisible = false;
    }, 600);
  }
  skipToMain(event: Event) {
    event.preventDefault();
    // id="home-content"
    const main = document.getElementById('main-content');
    // const main = document.getElementById('home-content');
    main?.focus();
    main?.scrollIntoView({ behavior: 'smooth' });
  }
}
