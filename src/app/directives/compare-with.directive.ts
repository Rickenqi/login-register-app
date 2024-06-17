import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[compareWith]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareWithDirective,
      multi: true
    }
  ]
})
export class CompareWithDirective implements Validator {
  @Input('compareWith') compareWith: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent?.get(this.compareWith);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { mustMatch: true };
    }
    return null;
  }
}
