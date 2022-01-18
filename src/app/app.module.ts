import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChessBoardModule } from "ngx-chess-board";
import { MainViewComponent } from './components/main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { BoardViewComponent } from './components/board-view/board-view.component';
import {MatCardModule} from '@angular/material/card';
// import { initializeApp } from "firebase/app";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from 'src/environments/environment';
import { ResetConfirmationComponent } from './components/reset-confirmation/reset-confirmation.component';

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BoardViewComponent,
    ResetConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessBoardModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatDividerModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ResetConfirmationComponent]
})
export class AppModule { }
