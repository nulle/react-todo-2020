import { BehaviorSubject } from 'rxjs';

export default class ToDoModel {

  _text;

  text$;
  id;

  constructor(id, text) {
    this.id = id;
    this._text = new BehaviorSubject(text);
    this.text$ = this._text.asObservable();
  }

  shuffleTitle() {
    const newTitle = this._text.value.split('').sort(() => (Math.random() > 0.5) ? 1 : -1).join('');
    this._text.next(newTitle);
  }

}
