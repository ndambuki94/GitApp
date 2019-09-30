import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { environment } from "src/environments/environment";
import { Repository } from "../repository";

@Injectable({
  providedIn: "root"
})
export class SearchRequestService {
  Use: User;
  Rep: Repository[];


  constructor(private http: HttpClient ) {
    this.Rep = [];
    this.Use = new User("", "", 0, 0, 0);
  }
  addUser(id) {
    interface ApiResponse {
      avatar_url: any;
      name: string;
      // follower: number;
      // following: number;
      public_repos: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            id +
            "?access_token=" +
            environment.myApi
        )
        .toPromise()
        .then(
          response => {
            this.Use.avatar_url = response.avatar_url;
            this.Use.name = response.name;
            // this.Use.follower = response.follower;
            // this.Use.following = response.following;
            this.Use.repo = response.public_repos;
            console.log(this.Use);
            resolve();
          },
          error => {
            this.Use.avatar_url = "";
            this.Use.name = "";
            // this.Use.follower = 0;
            // this.Use.following = 0;
            this.Use.repo = 0;

            reject(error);
          }
        );
    });
    return promise;
  }

  addRepo(Repo) {
    interface ApiResponse {
      repoName: string;
      description: string;
      language: string;
      html: any;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            Repo +
            "/repos?access_token=" +
            environment.myApi
        )
        .toPromise()
        .then(
          response => {
            for (var i in response) {
              this.Rep.push(response[i]);
            }
            console.log(this.Rep)
            resolve();
          },
          error => {
            this.Use.avatar_url = "";
            this.Use.name = "";
            // this.Use.follower = 0;
            // this.Use.following = 0;
            this.Use.repo = 0;

            reject(error);
          })
       
    });
    return promise;
  }
}
