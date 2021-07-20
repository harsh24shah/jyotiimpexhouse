import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    'dots': false,
    'infinite': true,
    'autoplay': true
  };

  bannerBackgroundArray = [
    {
      bgImage: 'hero-2',
      label: 'Fresh Buffalo meat',
      text: 'We export with care about quality of meat'
    },
    {
      bgImage: 'hero-1',
      label: 'Kadaknath Eggs',
      text: "We export India's the best quality Eggs"
    },
    {
      bgImage: 'hero-3',
      label: 'Indian Spices',
      text: 'We export Natural Spices for your food'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
