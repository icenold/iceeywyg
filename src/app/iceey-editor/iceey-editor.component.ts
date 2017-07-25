import { Component, OnInit, Provider, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const iceeywygValueAccessor: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IceeyEditorComponent),
    multi: true
};

@Component({
  selector: 'iceeywyg',
  templateUrl: './iceey-editor.component.html',
  styleUrls: ['./iceey-editor.component.css'],
  providers: [iceeywygValueAccessor]
})
export class IceeyEditorComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }
  //stringModel - used only for listening changes to ngModel via writeValue(_val)
  stringModel:string = ``;

  //empty callbacks
  private onTouchedCallback = ()=>{};
  private onChangeCallback = (_newVal)=>{};

  //register empty callbacks
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }
  
  //accessors
  writeValue(_val:string){
    this.stringModel =  _val;
  }
  broadcastInput(_val){
    this.onChangeCallback(_val);
  }

}
