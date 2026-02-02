import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isScrolled = false;
  sidePanelOpen = false;
  activeMobileSubmenu: string | null = null;
  submenuOpen = false;
  isDesktop = window.innerWidth >= 768;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }

  toggleSidePanel() {
    this.sidePanelOpen = !this.sidePanelOpen;
  }
  closeSidePanel() {
    this.sidePanelOpen = false;
    this.activeMobileSubmenu = null;
  }

  toggleMobileSubmenu(menu: string) {
    this.activeMobileSubmenu =
      this.activeMobileSubmenu === menu ? null : menu;
  }

  navigate(route: string, fragment?: string) {
    this.closeSidePanel();
    this.router.navigate([route], { fragment });

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isDesktop = window.innerWidth >= 768;
    const scrollTop =
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;

    this.isScrolled = scrollTop > 200;
  }

  loginPage() {
    this.closeSidePanel();
    window.open('https://faconnect.kotak.bank.in/', '_blank', 'noopener,noreferrer');
  }

  toggleSubmenu(event: Event) {
    this.submenuOpen = !this.submenuOpen;
  }
}
