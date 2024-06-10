import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericControlValueAcc, GET_VALUE_ACCESSOR} from "../_generics/generic-control-value-acc";
import {InputValidation} from "../_generics/input-validation.utils";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GET_VALUE_ACCESSOR(InputComponent)]
})
export class InputComponent extends GenericControlValueAcc {
  @Input()
  public autocomplete = 'off';

  @Input()
  public type = 'text';

  @Input()
  public label = '';

  @Input()
  public placeholder = '';

  @Input()
  public inputStyles: Record<string, string> = {};

  @Input()
  public validators: InputValidation | null = null;
}
