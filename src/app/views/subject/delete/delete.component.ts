import { Component, OnInit,ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {@ViewChild('myModal') public myModal: ModalDirective;
@ViewChild('largeModal') public largeModal: ModalDirective;
@ViewChild('smallModal') public smallModal: ModalDirective;
@ViewChild('primaryModal') public primaryModal: ModalDirective;
@ViewChild('successModal') public successModal: ModalDirective;
@ViewChild('warningModal') public warningModal: ModalDirective;
@ViewChild('dangerModal') public dangerModal: ModalDirective;
@ViewChild('infoModal') public infoModal: ModalDirective;

  constructor() { }

  ngOnInit(): void {
  }
  //  popup=document.getElementById("popup");
    
  //   function openPopup(){
  //       popup.classList.add("open-popup");
  //   }
  //   function closePopup(){
  //       popup.classList.remove("open-popup");
  //   }
}
