export class Keg{
  public done: boolean = false;
  constructor(public id: number, public name: string, public abv: number, public level: number){}
}
