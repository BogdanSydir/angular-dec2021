import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  dark: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  setDarkTheme(): void {
    if (this.dark) {
      this.dark = false
      console.log(this.dark);
    } else {
      this.dark = true
      console.log(this.dark);
    }
  }

}
