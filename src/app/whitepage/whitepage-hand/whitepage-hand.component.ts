import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { IWPData } from '../interface';

export interface WhitepageID {
  isValid: boolean;
  id: string;
}

export interface WhitepageFormData {
  isValid: boolean;
  data: IWPData;
}

@Component({
  selector:    'app-whitepage-hand',
  templateUrl: './whitepage-hand.component.html',
  styleUrls:   ['../whitepage.component.scss'],
  providers:   [
    {
      provide:     NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WhitepageHandComponent),
      multi:       true
    }
  ]
})
export class WhitepageHandComponent implements OnInit, ControlValueAccessor {

  @Input() title = 'Product';

  @Output() changed: EventEmitter<IWPData> = new EventEmitter<IWPData>();
  @Output() touched: EventEmitter<void> = new EventEmitter<void>();
  @Output() isValid: EventEmitter<WhitepageID> = new EventEmitter<WhitepageID>();
  @Output() setData: EventEmitter<WhitepageFormData> = new EventEmitter<WhitepageFormData>();

  public form: FormGroup;

  public val = '';


  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:        ['qw', Validators.required],
      description: ['qw', Validators.required],
      price:       [12, Validators.required],
      image:       ['qw', Validators.required]
    });

    this.form.valueChanges.subscribe(value => {
      this.value = value;
    });
  }

  private emitData(): void {
    this.setData.emit({
      isValid: this.form.valid,
      data:    this.form.value
    });
  }

  onChange: any = () => {
    this.changed.emit(this.form.value);
    this.emitData();
  }

  onTouch: any = () => {
    this.touched.emit();
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }
}
