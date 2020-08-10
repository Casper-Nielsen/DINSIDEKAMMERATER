import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person : Person;
  personList : Person[];
  whichPerson : boolean;
  constructor(){
     this.whichPerson = false;
     this.personList = [new Person('Andi Olle Olsen','https://media-exp1.licdn.com/dms/image/C4E03AQEabuWjLiF4_Q/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=FJGcVxS-wIhR1YYTp5xGDFnkg60dGccp2aYWPKtCf20','faglig info: under uddannelsen arbejder jeg hovedsagelig i C#. samt database opsætning(Relational Database) og konfigurationer af disse, det er hovedsagelig Mysql og MSsql. under min tid i skolepraktik har jeg stifte kendskab til kryptografi (algoritmer så som Aes, RSA, serpent, Differ-helman), der har også været fokus på app udvikling og Microservice architecture op i mod monolith architecture. der har desuden også være en stor del fokus på dockumation og projektstyring metodiker (Scrum,prince 2). jeg har desuden kendskab til en forskellige udvikler metodiker som SOLID,dry,yagni,KISS. projekter som er fuldført under skolepraktikken: designet og bygge en 3d printer/CNC/indgravering maskine, med formålet at bevise hvor biliget det kan gøre (lavet af gamle pc dele og skrot) (portfolio side under opbygning) edit: 24/6-2020 portfolio stadigvæk under opbygning, forventes at komme online et sted efter d. 1/7-2020. Hovedforløb: jeg har gennemført Hovedforløb 2 d.6-9-2019. og skal på hovedforløb 3 d.3/8 2020.')
, new Person('Jonas Lyhne Iversen','https://scontent-cph2-1.xx.fbcdn.net/v/t31.0-8/893846_10202147642563154_824880095_o.jpg?_nc_cat=109&_nc_sid=de6eea&_nc_ohc=bqsSN8MYUkgAX8Jo2P4&_nc_ht=scontent-cph2-1.xx&oh=103dd9f71e0c996d379aa29fa903c664&oe=5F582CEC','')];
     this.person = this.personList[1];
  }

  Switch() {
    this.whichPerson = !this.whichPerson;
    if(this.whichPerson){
      this.person = this.personList[0];
    }else{
      this.person = this.personList[1];
    }
  }
}


export class Person {
  name : string;
  image : string;
  beskrivelse : string;
  constructor(name : string,image : string,beskrivelse : string){
    this.name = name;
    this.image = image;
    this.beskrivelse = beskrivelse;
  }
}
