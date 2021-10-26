import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts?: Post;

  constructor(private http: HttpClient) { }

  getPostList() {
    this.http.get<any>(`https://www.reddit.com/r/aww/.json`).subscribe(
      (result: Post) =>{
        this.posts = result;
        console.log(result);
      }
    );
  }

  ngOnInit(): void {
  }

}
