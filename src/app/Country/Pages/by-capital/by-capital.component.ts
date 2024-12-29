import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBoxComponent } from "../../Components/search-box/search-box.component";
import { CountryService } from '../../Services/country.service';
import { CapitalI } from '../../Interfaces/Capital';
import { CommonModule } from '@angular/common';
import { ObjectToArrayPipePipe } from '../../../Shared/pipes/object-to-array-pipe.pipe';

@Component({
  selector: 'app-by-capital',
  imports: [SearchBoxComponent, CommonModule, ObjectToArrayPipePipe],
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {


  listCapitals!:CapitalI;
  hasList:boolean = false;

  private readonly countryService = inject(CountryService);



  constructor(){

  }

  ngOnInit():void{

  }

  search(newValue:string){
    this.countryService.SearchByCapitality(newValue).subscribe({
      next : (s:CapitalI) => {
        this.listCapitals =  s;
        this.hasList = true;
      },
      error : (err) =>{
        console.log(err);
      }
    })
  }


}
