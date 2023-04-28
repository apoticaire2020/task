import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-delete',
  templateUrl: './u-delete.component.html',
  styleUrls: ['./u-delete.component.css']
})
export class UDeleteComponent implements OnInit {


  constructor(private activate: ActivatedRoute) { }

  ngOnInit(): void {
    this.activate.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

}
