import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../model/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
