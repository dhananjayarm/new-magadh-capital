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
  // skipToMain(event: Event) {
  //   event.preventDefault();
  //   // id="home-content"
  //   // const main = document.getElementById('main-content');
  //   const main = document.getElementById('home-content');
  //   main?.focus();
  //   main?.scrollIntoView({ behavior: 'smooth' });
  // }
  skipToMain(event: Event) {
    event.preventDefault();

    // Try to find a main content area dynamically
    const mainIds = [
      'home-content',
      'contact-content',
      'team-content',
      'backbone-content',
      'difference-content',
      'myTabs',
      'assistance-content',
      'inspiration-content',
      'philosophy-content',
      'pmsfaq-content',
      'risk-content',
      'investment-process-content',
      'how-to-invest-content',
      'download_links',
      'grievanceForm',
      'investor-faq-content',
      'login-content',
      'resources-content'
    ];

    let main: HTMLElement | null = null;
    for (const id of mainIds) {
      main = document.getElementById(id);
      if (main) break;
    }

    if (main) {
      main.tabIndex = -1; // Ensure focusable
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
