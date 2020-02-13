import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [];
  search = '';

  constructor(private router: Router) { }

  async ngOnInit() {
    const response = await fetch('http://localhost:3000/items');
    const json = await response.json();
    json.forEach((item, i, self) => {
      self.filter(it => it.parent_id === item.id).forEach((child) => {
        if (!child.indent) {
          child.indent = item.indent || 0;
        }
        child.indent += item.indent || 1;
      });
    });
    this.items = json;
  }

  async onClick(item) {
    this.router.navigate(['item/' + item.id]);
  }

}
