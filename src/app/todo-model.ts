

import {propertyMap}  from './functions/propertyMap';
import { statusConverter} from './functions/statusConverter';

export class TodoModel {

  public id: string;
  @propertyMap('title')
  public name: string;

  @statusConverter
  public completed: string;

  constructor() {
    this.name = null;
    this.completed = null;
    this.id = null;
  }

}