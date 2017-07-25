import { Component, OnInit, Provider, Input, forwardRef, ViewChild } from '@angular/core';
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
  //viewchild
  @ViewChild(`editor`) editor:any;

  //get set
  public get value():string{
    return this.editor.nativeElement.innerHTML;
  }
  public set value(_val){
    this.editor.nativeElement.innerHTML = _val;
  }

  //Inputs
  @Input() height:string = `200px`;
  @Input() width:string = `100%`;

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
    if(!_val){
      _val = `<p><br></p>`;
    }
    this.value = _val;
  }
  broadcastInput(_event:any){
    if(!this.value){
      this.value = `<p><br></p>`;
    }
    this.onChangeCallback(this.value);
  }

  //commandstates
  public get isInsideBold():boolean{
    return document.queryCommandState("Bold");
  }

  //formatters
  formatBold(){
    document.execCommand('Bold');
  }

}
