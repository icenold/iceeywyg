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
  @ViewChild(`editor`) editorElem:any;
  public get editor():HTMLDivElement {
    return this.editorElem.nativeElement;
  }
  @ViewChild('colorPicker') colorPickerElem:any;
  public get colorPicker():HTMLInputElement {
    return this.colorPickerElem.nativeElement;
  }

  //get set
  public get value():string{
    return this.editor.innerHTML;
  }
  public set value(_val){
    this.editor.innerHTML = _val;
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
  editorClick(_event:any){
    //noop event, used only for triggering state changes.
  }

  //queryCommandState
  public queryCommandState(_state:string):boolean{
    return document.queryCommandState(_state);
  }

  //execCommand
  execCommand(_command:string){
    document.execCommand(_command);
  }

  //changeColor
  changeColor(_event:any){
    document.execCommand("foreColor", false, _event.target.value);
    console.log(document.queryCommandValue("foreColor"));
  }
  openColorPicker(){
    //let initialColor = this.colorPicker.value;
    this.colorPicker.value = "rgb(0,0,0)";
    this.colorPicker.click();
  }

  //queryCommandValue
  queryCommandValue(_command){
    return document.queryCommandValue(_command);
  }

}
