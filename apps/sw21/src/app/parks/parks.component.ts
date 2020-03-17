import { Component, OnInit } from '@angular/core';
import { ParksService } from '@bb/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})
export class ParksComponent implements OnInit {
  parks;

  constructor(private parksService: ParksService) { }

  ngOnInit(): void {
    console.log('HERE');
    this.getParks();
  }

  private getParks() {
    return this.parksService.all()
      .subscribe((res) => this.parks = {
        total:  res['total'],
        data: res['data']
    });
  }
}

