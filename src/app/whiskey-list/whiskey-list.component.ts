import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiskey-list',
  templateUrl: './whiskey-list.component.html',
  styleUrls: ['./whiskey-list.component.scss']
})
export class WhiskeyListComponent implements OnInit {

  whiskey = {
    image: "https://i5.walmartimages.com/asr/73418b76-6d5c-48e6-971d-2614540fa367.bf3f915adb02fb5cbea730920edc22c9.jpeg",
    name: "Jameson",
    type: "Irish",
    price: 24,
    stock: 100
  }
  constructor() { }

  ngOnInit(): void {
  }

}
