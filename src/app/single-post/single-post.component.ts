import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post?: Post;

  constructor(private http: HttpClient) { }

  getPost() {
    this.http.get<any>(`https://www.reddit.com/r/aww/.json`).subscribe(
      (result: Post) =>{
        this.post = result;
        console.log(result);
      }
    );
  }

  ngOnInit(): void {
  }

}
