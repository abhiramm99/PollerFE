import { Component, OnInit } from '@angular/core';
import { ISpace } from './explore-space.interface';
import { ExploreSpaceService } from './explore-space.service';

@Component({
  selector: 'app-explore-space',
  templateUrl: './explore-space.component.html',
  styleUrls: ['./explore-space.component.css']
})
export class ExploreSpaceComponent implements OnInit {

  public pageNumber: number = 1;
  public pageSize: number = 15;
  public spaceList!: Array<ISpace> | any;
  public showNewSpaceForm: boolean = false;

  constructor(private service: ExploreSpaceService) { }

  ngOnInit(): void {
    this.getSpaces();
  }

  public changePage(sign: string): void {
    if (sign === "+") {
      this.pageNumber++;
    } else {
      this.pageNumber--;
    }
    this.getSpaces();
  }

  public changePageSize(target: number): void {
    this.pageSize = target;
  }

  public createNewSpace(): void {
    this.showNewSpaceForm = this.showNewSpaceForm ? false : true;
  }

  private getSpaces(): void {
    this.service.getSpaceList(this.pageNumber, this.pageSize).subscribe((res) => {
      this.spaceList = res;
    });
  }

}
