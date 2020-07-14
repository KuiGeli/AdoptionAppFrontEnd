import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animals = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
      this.animals = data;
    });
  }

  adoptAnimal(id) {
    console.log('Adoption working');
    this.apiService.adoptAnimal(id).subscribe();
  }

  deleteAnimal(id) {
    this.apiService.deleteAnimal(id).subscribe();
    location.reload();
  }

  senMail() {
    this.apiService.sendMail('gelikui11@gmail.com', 'Adoption', 'Thank you for adopting, from our shelter.' ).subscribe();
  }

  onAdopt(id) {
    this.adoptAnimal(id);
    this.senMail();
  }

}
