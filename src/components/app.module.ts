import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { HangImageComponent } from './hang-image/hang-image.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { GameOverComponent } from './game-over/game-over.component';
import { KeyComponent } from './key/key.component';
import { LetterComponent } from './letter/letter.component';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    HangImageComponent,
    KeyboardComponent,
    MovieTitleComponent,
    GameOverComponent,
    KeyComponent,
    LetterComponent,
    WordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
