import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dark: boolean = false

  @Output()
  setDarkEmitter = new EventEmitter<boolean>()

  constructor() {
  }

  ngOnInit(): void {
  }

  setDarkTheme(): void {

    if (this.dark) {
      this.dark = false
      this.setDarkEmitter.emit(this.dark)
      //   console.log(this.dark);
    } else {
      this.dark = true
      this.setDarkEmitter.emit(this.dark)
      //   console.log(this.dark);
    }
  }
}
