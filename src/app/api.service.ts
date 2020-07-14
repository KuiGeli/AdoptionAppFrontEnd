import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:8080';
  private SERVER_POST_URL = 'http://localhost:8080/adoption/createAdoption';
  private DELETE_URL = 'http://localhost:8080/animal/delete/';


  constructor(private httpClient: HttpClient) {}

  public get() {
    return this.httpClient.get(this.SERVER_URL + '/animal/findAll');
  }

  adoptAnimal(id) {
    return this.httpClient.post(this.SERVER_POST_URL + '?idUser=44' + '&idAnimal=' + id, null);
  }

  deleteAnimal(id) {
    return this.httpClient.delete(this.DELETE_URL + id);
  }

  addDonation(sum, details, userId) {
    return this.httpClient.post(this.SERVER_URL + '/donation/donate' + '?sum=' + sum + '&details=' + details + '&userId=' + userId, null);
  }

  addAnimal(age, sex, race, details, photo) {
    return this.httpClient.post(this.SERVER_URL + '/animal/addAnimal' + '?age=' + age + '&sex=' + sex + '&race=' + race
      + '&details=' + details + '&photo=' + photo, null);
  }

  sendMail(emailAddress, subject, text) {
    console.log('still works');
    return this.httpClient.put(this.SERVER_URL + '/email/send/' + emailAddress + '/' + subject + '/' + text, null);
  }

}
