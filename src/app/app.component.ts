import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniProjet';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBiFDwF1F792olERgpVscvHTtTtfFRdSfE",
      authDomain: "miniprojet-8738e.firebaseapp.com",
      databaseURL: "https://miniprojet-8738e.firebaseio.com",
      projectId: "miniprojet-8738e",
      storageBucket: "miniprojet-8738e.appspot.com",
      messagingSenderId: "160144617406",
      appId: "1:160144617406:web:5db31cc92853eb6a1d93ef",
      measurementId: "G-5ZLNML0S2K"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
