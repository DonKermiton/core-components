import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  forwardRef,
  inject,
  Input,
  Provider,
  Type
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

export const GET_VALUE_ACCESSOR = (component: Type<any>) =>
  ({
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => component),
  }) as Provider;


@Directive()
export class GenericControlValueAcc<T = string>
  implements ControlValueAccessor, AfterViewInit
{
  @Input()
  public validatorsCustomField: Record<string, string> = {};

  public formControl: FormControl | null = null;
  public formControlName: string | null = null;
  public elementRef: ElementRef;
  public cdRef: ChangeDetectorRef;
  public controlRequired = false;
  private form: FormGroupDirective;

  constructor() {
    this.elementRef = inject(ElementRef);
    this.form = inject(FormGroupDirective);
    this.cdRef = inject(ChangeDetectorRef);
    this.setFormControlName();
  }

  get value(): T | null {
    return this.formControl?.value;
  }

  set value(value: T) {
    if (this.value !== value) {
      this.formControl?.patchValue(value);
      this.changed(value);
      this.touched();
    }
  }

  writeValue(value: T) {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void) {
    this.changed = fn;
  }

  registerOnTouched(fn: () => void) {
    this.touched = fn;
  }

  public ngAfterViewInit() {
    this.setFormControl();

    if (this.formControl && this.formControl.validator) {
      this.controlRequired =
        this.formControl?.validator({} as AbstractControl)!['required'] || {};
      this.cdRef.detectChanges();
    }
  }

  public setFormControl(): void {
    if (!this.formControlName) {
      return;
    }

    this.formControl = <FormControl>(
      this.form.form.controls[this.formControlName]
    );

    this.cdRef.detectChanges();
  }

  private setFormControlName(): void {
    if (!this.elementRef) {
      return;
    }

    this.formControlName =
      this.elementRef.nativeElement.getAttribute('formControlName') || null;
  }

  private touched: () => void = () => ({});

  private changed: (value: T) => void = () => ({});
}
