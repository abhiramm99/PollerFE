import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewSpaceFormService } from './new-space-form.service';

@Component({
  selector: 'app-new-space-form',
  templateUrl: './new-space-form.component.html',
  styleUrls: ['./new-space-form.component.css']
})
export class NewSpaceFormComponent implements OnInit {

  public newSpaceForm: FormGroup;

  constructor(private fb: FormBuilder, private service: NewSpaceFormService) {
    this.newSpaceForm = this.createForm();
  }

  ngOnInit(): void {
  }

  public submitForm() {
    this.service.addNewSpace(this.newSpaceForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      spaceName: ['', Validators.required],
      spaceIdentifier: ['', Validators.required],
      spaceDescription: ['', Validators.required]
    });
  }

}
