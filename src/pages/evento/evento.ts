import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  eventos: any;
  imagens: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUsers();
    //this.getImagens();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

   getUsers() {
     this.restProvider.getEventos().then(data => {
       this.eventos = data;
       console.log(this.eventos);
     });
   }

  getImagens(){
    this.restProvider.getImagens().then(data => {
      this.imagens = data;
      console.log(this.imagens);
    });
  }

}
