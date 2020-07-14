import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  age = '';
  sex = '';
  race = '';
  details = '';
  photo = '';

  ngOnInit() {
  }

  ageHandling(event: any) {
    this.age = event.target.value;
  }

  sexHandling(event: any) {
    this.sex = event.target.value;
  }

  raceHandling(event: any) {
    this.race = event.target.value;
  }

  detailsHandling(event: any) {
    this.details = event.target.value;
  }

  photoHandling(event: any) {
    this.photo = event.target.value;
  }

  addAnimal() {
    console.log('function starts');
    this.apiService.addAnimal(this.age, this.sex, this.race, this.details, this.photo).subscribe();
  }

}
