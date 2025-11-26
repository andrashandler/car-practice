import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {

  showSearchField: boolean = false;

  constructor(private searchService: SearchService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSearchField = this.router.isActive('/cars', {
          paths: 'exact',
          queryParams: 'ignored',
          fragment: 'ignored',
          matrixParams: 'ignored'
        });
      }
    });
  }

  updateSearchTerm(term: string) {
    this.searchService.updateSearch(term);
  }
}
