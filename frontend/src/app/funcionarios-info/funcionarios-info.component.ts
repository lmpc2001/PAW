import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-info',
  templateUrl: './funcionarios-info.component.html',
  styleUrls: ['./funcionarios-info.component.css']
})
export class FuncionariosInfoComponent implements OnInit {

  @Input() id:string = ""
  @Input() nome:string = ""
  @Input() date:string = ""
  @Input() phone_number:number = 0
  @Input() email?:string = ""
  @Input() dataContext:string = "";
  @Input() fidelizado:boolean = true;



  popUpVerify:string = "alert inactive";
  popUpText:string = "";
  popUpBtn:string = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  submit(){
    if (this.popUpBtn == "submit"){
      console.log("Info submited")
    } else if (this.popUpBtn == "delete"){
      console.log("User deleted")
    } else {
      console.log("User fidelizado")
    }

  }

  getDataContext(type:string){
    if (this.dataContext == type){
      return "show"
    } else {
      return "hidden"
    }
  }

  changeValuePopUp(btn?:string){
    if (this.popUpVerify == "alert active"){
      this.popUpVerify = "alert inactive"
    } else {
      this.popUpVerify = "alert active"
    }

    if (btn == "submit"){
      this.popUpBtn = "submit"
      this.popUpText = `Tem a certeza que deseja alterar a informação do utilizador ${this.id}?`;
    } else if (btn == "delete") {
      this.popUpBtn = "delete"
      this.popUpText = `Tem a certeza que deseja eliminar o utilizador ${this.id}?`;
    } else {
      this.popUpBtn = "fidelizar"
      this.popUpText = `Tem a certeza que deseja fidelizar o utilizador ${this.id}?`;

    }
  }
}
