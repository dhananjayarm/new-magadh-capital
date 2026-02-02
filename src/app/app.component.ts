import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Magadh Capital';


  constructor(private titleService: Title, private router: Router) { }

  ngOnInit() {
    // Dynamically update title on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeTitle = this.getTitle(this.router.url);
        this.titleService.setTitle(routeTitle);
      });
  }

  getTitle(url: string): string {
    switch (url) {
      case '/team':
        return 'Our Team | Magadh Capital';
      case '/risk-management':
        return 'Risk Management | Magadh Capital';


      case '/backbone':
        return 'Backbone | Magadh Capital';
      case '/difference':
        return 'Difference | Magadh Capital';

      
      
      case '/philosophy':
        return 'Investment | Magadh Capital';
      case '/philosophy#style':
        return 'Investment Philosophy & Style | Magadh Capital';
      case '/philosophy#process':
        return 'Investment Process | Magadh Capital';
      case '/philosophy#inspiration':
        return 'Our Inspiration | Magadh Capital';
      
      
      case '/resources':
        return 'Resources | Magadh Capital';
      case '/resources#our_blogs':
        return 'Blogs | Magadh Capital';
      case '/resources#Media':
        return 'Media | Magadh Capital';
      case '/resources#Investor_Letters':
        return 'Investor Letters | Magadh Capital';
      case '/resources#towards_awareness':
        return 'Towards Awareness | Magadh Capital';
      case '/resources#UPI':
        return 'UPI Payment | Magadh Capital';

      case '/assistance':
        return 'Assistance | Magadh Capital';
      case '/assistance#FAQ':
        return 'FAQ | Magadh Capital';
      case '/assistance#invest':
        return 'Invest | Magadh Capital';
      case '/assistance#download':
        return 'Download | Magadh Capital';
      case '/assistance#complaints':
        return 'Complaints | Magadh Capital';
      case '/contact-us':
        return 'Contact Us | Magadh Capital';

      default:
        return 'Magadh Capital';
    }
  }
}

