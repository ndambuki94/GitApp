import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";

import { SearchRequestService } from '../search-http/search-request.service';
import { Repository } from '../repository';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-searchapp",
  templateUrl: "./searchapp.component.html",
  styleUrls: ["./searchapp.component.css"]
})
export class SearchappComponent implements OnInit {
  searchRequestService:SearchRequestService;
  User: User;
  Repository: Repository[]; 


  constructor(private searchService:SearchRequestService, private http: HttpClient,private router: ActivatedRoute) {}

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get("id");
    this.searchService.addUser(id);
    this.searchService.addRepo(id);

    this.User = this.searchService.Use;
    this.Repository = this.searchService.Rep;
  }
}
