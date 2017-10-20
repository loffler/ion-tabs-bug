import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class NumberProvider {

  emitter:EventEmitter<number> = new EventEmitter();

  num:number = 0;

  constructor(
  ) {
  }

  public getEmitter() {
    return this.emitter;
  }

  public getNumber() {
    this.num += 1;
    this.emitter.emit(this.num);
  }

}
