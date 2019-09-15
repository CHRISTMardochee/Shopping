import { Component, OnInit } from '@angular/core';
import { Category } from '../models/interface-category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  categories: Category[];
  constructor() {
    this.categories = [
      {
        title : 'Vetements',
        description: 'description',
        icon: 'shirt'
      },
      {
        title : 'Electroniques',
        description: 'description',
        icon: 'phone-portrait'
      },
      {
        title : 'Mode & Accessoires',
        description: 'description',
        icon: 'bowtie'
      },
      {
        title : 'Chaussures',
        description: 'description',
        icon: 'archive'
      },
    ];
  }

  ngOnInit() {
  }

}
