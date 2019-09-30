import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { Repository } from "../repository";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  goToUrl(id) {
    this.router.navigate(["/searchapp", id]);
  } 
  repo: Repository[];
  user: User;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

}
