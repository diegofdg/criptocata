import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  bgPropertyValid=true;

  constructor() { }

  ngOnInit(): void {
  }

  onSaludar(): void {
    alert("Hola mundo!!");
  }    

}
