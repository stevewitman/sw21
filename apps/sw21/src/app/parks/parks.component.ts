import { Component, Input, OnInit } from '@angular/core';
import { ParksService } from '@bb/core-data';

@Component({
  selector: 'bb-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})
export class ParksComponent implements OnInit {
  @Input() parks$;
  @Input() park;

  constructor(private parksService: ParksService) { }

  ngOnInit(): void {
    this.getParks();
  }

  select(park) {
    this.park = park;
  }

  private getParks() {
    this.parks$ = this.parksService.all()
      .subscribe((res) => this.parks$ = {
        total:  res['total'],
        data: res['data']
    });
  }
}

