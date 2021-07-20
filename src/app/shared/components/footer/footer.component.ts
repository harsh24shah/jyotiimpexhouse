import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.year = this.date.getFullYear();
  }

}
