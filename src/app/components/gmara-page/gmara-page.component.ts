import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { HttpClient } from '@angular/common/http';
import { Bavli } from 'src/services/Bavli';

@Component({
  selector: 'app-gmara-page',
  templateUrl: './gmara-page.component.html',
  styleUrls: ['./gmara-page.component.scss']
})
export class GmaraPageComponent {
  searchQuery: string = '';
   items:Bavli[]=[];

  constructor(private route: ActivatedRoute, private ser: ServiceService,
    ) { }

  ngOnInit(): void {
    this.ser.GetAnserById().subscribe(result => {

        this.items =result.slice(0,37);

   
      console.log(result)
      }, err => {});

      this.ser.GetId().subscribe(result => {


   
      console.log(result)
      }, err => {});
  }
  get filteredItems() {
    return this.items.filter(item => item.heBook.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  toggleChapters(item:Bavli) {
   // item.showChapters = !item.showChapters;
  }




}
