import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bb-parks-list',
  templateUrl: './parks-list.component.html',
  styleUrls: ['./parks-list.component.scss']
})
export class ParksListComponent implements OnInit {
  @Input() parks;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
