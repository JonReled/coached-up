import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { IPageData, TPageLink } from '../../interfaces-types/navbar.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activePage: TPageLink = 'home';
  pagesData: IPageData[] = [
    {
      link: 'home',
      label: 'Home',
    },
    {
      link: 'coach',
      label: 'Coach',
    },
    {
      link: 'diet',
      label: 'Diet',
    },
    {
      link: 'program',
      label: 'Program',
    },
    {
      link: 'stats',
      label: 'Stats',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  changePage(tab: TPageLink) {
    this.activePage = tab;
    this.router.navigate([tab]);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .pipe(take(1))
      .subscribe((event) => {
        this.activePage = event.urlAfterRedirects.split('/')[1] as TPageLink
      })
  }

}
