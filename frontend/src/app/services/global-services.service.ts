import { Injectable } from '@angular/core'

let page:string;

@Injectable({
  providedIn: 'root',
})

export class GlobalServicesService {
  constructor() {}

  theam = true;
  
  changeTheam() {
    this.theam = !this.theam
  }

  getPage(){
    return page;
  }
  
  setPage(pageName:string){
    page = pageName;
  }

}
