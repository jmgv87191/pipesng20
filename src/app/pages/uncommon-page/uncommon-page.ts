import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import {  I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe, KeyValuePipe, TitleCasePipe,
  AsyncPipe

} from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 = {
    name: "juan",
    gender: "male",
    age: 38,
    address: 'Baja California Sur, Mexico'
}

const client2 = {
    name: "alondra",
    gender: "female",
    age: 31,
    address: 'Tlaxcala, Mexico'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css'
})
export default class UncommonPage {

  client = signal(client1) 

  invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient(  ){

    if (this.client() === client1) {
        this.client.set(client2)
        return;
    }
    this.client.set(client1)

  }

  // i18 plural

  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Manuel',
    'Andrea',
    'Fernando',
    'Rodrigo',
    'Carlos',
    'Iram',
    'Alberto',

  ])

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  })


  deleteClient(){
    this.clients.update( prev => prev.slice(1) )
  }

  profile = {
    name: 'juan',
    age:38,
    address: 'la paz b.c.s.'
  }

  promiseValue: Promise<string> = new Promise((resolve , reject)=>{

    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('promesa finalizada')
    }, 3500);

  })

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1 ),
    tap( (value)=> console.log('tap',value)))


}
