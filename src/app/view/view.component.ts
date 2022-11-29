import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewComponent {
  constructor(private api:ApiService){
    api.fetchData().subscribe(
      (response)=>{
        this.news = response
      }
    )
  }
  news:any = {}
}