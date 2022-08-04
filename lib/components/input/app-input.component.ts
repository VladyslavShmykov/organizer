import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputComponent),
      multi: true
    }
  ]
})
export class AppInputComponent implements OnInit, OnDestroy, ControlValueAccessor{

  @Input()
  id = 'input' + Math.random().toString(36).substring(2);
  @Input()
  value: string;
  @Input()
  labelText: string = '';
  @Input()
  placeholder: string = '';
  @Input()
  maxLength = 100;
  @Input()
  minLength = 2;
  @Input()
  type = 'text';
  @Input()
  disable: boolean;
  @Input()
  autocomplete: string = '';

  @ViewChild('inputElement') private input: ElementRef;

  private $destroy: Subject<boolean> = new Subject<boolean>();

  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

  constructor() {
  }

  ngOnInit(): void {

  }

  writeValue(value: string): void {
    if (this.value !== value) {
      this.value = value;
      this.onChange(value);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}
