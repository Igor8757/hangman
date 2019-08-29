import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class BoardService {

  // Observable string sources
  private hiddenLettersSource = new Subject<Array<string>>();

  // Observable string streams
  hiddenLetters$ = this.hiddenLettersSource.asObservable();

  // Service message commands
  announceMission(hiddelLetters: Array<string>) {
    this.hiddenLettersSource.next(hiddelLetters);
  }
}