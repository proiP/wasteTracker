import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { Client } from '../pages/client/client';
import { Login } from '../pages/login/login';
import { Auth } from '../providers/auth';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBXpdnaGTmJhhqEpwIHRYon9lJCZv1KemI",
  authDomain: "waste-tracker-2844c.firebaseapp.com",
  databaseURL: "https://waste-tracker-2844c.firebaseio.com",
  storageBucket: "waste-tracker-2844c.appspot.com",
  messagingSenderId: "679466001308"
};

@NgModule({
  declarations: [
    MyApp,
    Client,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Client,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth
  ]
})
export class AppModule {}
