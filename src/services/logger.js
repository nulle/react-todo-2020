import { BehaviorSubject } from 'rxjs';

export default class LoggerService {

  _loggedCount = new BehaviorSubject(0);
  loggedCount$ = this._loggedCount.asObservable();

  log(message) {
    console.log(message);
    this._loggedCount.next(this._loggedCount.value + 1);
  }

  get loggedCountText() {
    return `Logged count: ${this._loggedCount.value}`;
  }

}
