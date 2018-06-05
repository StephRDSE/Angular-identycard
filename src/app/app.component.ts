import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mairie de MONTREUIL';
  user = {
    name : 'Your Name here',
    jobTitle : 'Your job here',
    image : 'http://unena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/05/07/node_29596/2659653/public/2017/05/07/B9711945478Z.1_20170507201155_000%2BGKH913948.1-0.jpg?itok=VlQr9JO3'
  };
  userSaisi = {
    name : '',
    jobTitle : '',
    image : ''
    };
    color = false;
  changeName(newName) {
    console.log(newName);
    this.userSaisi.name = newName.target.value;
  }
  changejobTitle(newJob) {
    console.log(newJob);
    this.userSaisi.jobTitle = newJob.target.value;
  }
  changePhotoUrl(newLink) {
    console.log(newLink);
    this.userSaisi.image = newLink.target.value;
  }
  saveValues(e) {
    e.preventDefault();
    this.user.name = this.userSaisi.name;
    this.user.jobTitle = this.userSaisi.jobTitle;
    this.user.image = this.userSaisi.image;
  }

}
