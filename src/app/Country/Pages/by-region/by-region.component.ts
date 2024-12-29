import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../Components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../Services/country.service';
import { CapitalI } from '../../Interfaces/Capital';
import { ObjectToArrayPipePipe } from '../../../Shared/pipes/object-to-array-pipe.pipe';

@Component({
  selector: 'app-by-region',
  imports: [SearchBoxComponent, CommonModule, ObjectToArrayPipePipe],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent {
  public hasList:boolean = false;
  private readonly countryService = inject(CountryService);
  public listRegion!:CapitalI;

  search(newValue:string){
    this.countryService.SearchByRegion(newValue).subscribe({
      next : (s:CapitalI) => {
        this.listRegion =  s;
        this.hasList = true;
      },
      error : (err) =>{
        console.log(err);
      }
    })
  }
}
