import { Component, OnInit } from '@angular/core';
import { LandingNavOptions } from './landing.enum';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public readonly landingNavOptions = LandingNavOptions;
  public currSection: LandingNavOptions = LandingNavOptions.Feed;

  constructor() { }

  ngOnInit(): void {
  }

  public changeNavigation(target: LandingNavOptions): void {
    this.currSection = target;
  }

}
