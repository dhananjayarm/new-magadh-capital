import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent {



  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const tabLink = document.querySelector<HTMLAnchorElement>(
          `.nav-link[href="#${fragment}"]`
        );
        if (tabLink) {
          // Activate the tab programmatically
          const bootstrapTab = new bootstrap.Tab(tabLink);
          bootstrapTab.show();
        }
      }
    });
  }
}
