import { Component, Input, OnInit } from '@angular/core';
import { Blog } from "../models/blog";

@Component({
  selector: 'blog-card',
  template: `
    <h2>{{ blog?.name }}</h2>
    <div style="margin-left: .5rem;">
      <div>
        <span style="font-style: italic">by: {{ blog?.author }}</span>
      </div>
      <p>
        <span>{{ blog?.synopsis }}</span>
      </p>
      <div>
        <h3>Posts</h3>
        <ul>
          <li *ngFor="let post of blog?.posts">{{ post.content }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  @Input() blog?: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
