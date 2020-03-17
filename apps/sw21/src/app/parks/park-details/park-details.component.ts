import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bb-park-details',
  templateUrl: './park-details.component.html',
  styleUrls: ['./park-details.component.scss']
})
export class ParkDetailsComponent implements OnInit {
  @Input() park;
  @Output() visited = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
