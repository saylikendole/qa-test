import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from './item.service';
import { Item } from '../home/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit, OnDestroy {
  itemId: number;
  currentItem: Item;
  private subscription: Subscription = new Subscription();

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.getItem(this.itemId);
  }

  private getItem(id) {
    this.subscription.add(this.itemService.getItem(id).subscribe(
      (resp: Item) => {
        this.currentItem = resp;
      },
      error => {
        console.error('CONTROLLER ERROR ' + error.message);
      }
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
