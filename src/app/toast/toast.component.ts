import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit{
@Output() closeHit: EventEmitter<boolean> = new EventEmitter<boolean>();
@Input() title:string ="Toast"
@Input() message:string ="Enter message here"
@Input() date:Date = new Date();

constructor(){}

ngOnInit(): void {
    var toastElList = [].slice.call(document.querySelector('.toast'))
    toastElList.map(function(toastEl){
      return 
    })
}

}
