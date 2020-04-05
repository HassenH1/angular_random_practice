import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pics: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getRequest().subscribe((data) => {
      console.log(data)
      this.pics = data
    })
  }

}
