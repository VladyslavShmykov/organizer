import {Component, OnInit} from '@angular/core';
import {DateService} from "../shared/services/date/date.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private dateService: DateService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public get getDate(): moment.Moment {
    return this.dateService.date.getValue();
  }

  public onSubmit(): void {
    const {title} = this.form.value;
    console.log(title)
  }

  private initForm(): FormGroup {
    return this.form = this.fb.group({
      title: new FormControl('', Validators.required),
    });
  }

}
