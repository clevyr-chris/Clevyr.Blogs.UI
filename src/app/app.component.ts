import { Component, OnInit } from '@angular/core';
import { BlogService } from "./services/blog.service";
import { Blog } from "./models/blog";

@Component({
  selector: 'prime',
  template: `
    <h1>Blogs</h1>

    <div style="display: flex; flex-wrap: wrap;">
      <div *ngFor="let blog of _blogs"
          style="padding: .5rem 1rem 1rem; margin: 1rem; background: #eee; border-radius: .5rem;"
      >
        <blog-card [blog]="blog"></blog-card>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  public _blogs: Blog[] = [];

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.get().subscribe(data => this._blogs = data);
  }

}
