import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingNavOptions } from './landing.enum';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public readonly landingNavOptions = LandingNavOptions;
  public currSection: LandingNavOptions = LandingNavOptions.Feed;
  public currentSelection: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public changeNavigation(target: LandingNavOptions): void {
    this.currSection = target;
    this.currentSelection = target;
  }

  public logout(): void {
    localStorage.removeItem('user-token');
    this.router.navigate(['../login']);
  }

}
