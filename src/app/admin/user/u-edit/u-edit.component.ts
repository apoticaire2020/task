import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  constructor(private activate : ActivatedRoute) { }

  ngOnInit(): void {
    this.activate.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

}
