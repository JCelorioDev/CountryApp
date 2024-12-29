import { Component, inject } from '@angular/core';
import { CapitalI } from '../../Interfaces/Capital';
import { CountryService } from '../../Services/country.service';
import { SearchBoxComponent } from "../../Components/search-box/search-box.component";
import { CommonModule } from '@angular/common';
import { ObjectToArrayPipePipe } from "../../../Shared/pipes/object-to-array-pipe.pipe";

@Component({
  selector: 'app-by-countrie',
  imports: [SearchBoxComponent, CommonModule, ObjectToArrayPipePipe],
  templateUrl: './by-countrie.component.html',
  styleUrl: './by-countrie.component.css'
})
export class ByCountrieComponent {
  public hasList:boolean = false;
  private readonly countryService = inject(CountryService);
  public listCountrie!:CapitalI;

  search(newValue:string){
    this.countryService.SearchByCountrie(newValue).subscribe({
      next : (s:CapitalI) => {
        this.listCountrie =  s;
        this.hasList = true;
      },
      error : (err) =>{
        console.log(err);
      }
    })
  }
}
