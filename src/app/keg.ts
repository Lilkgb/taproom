export class Keg{
  public done: boolean = false;
  constructor(public name: string, public abv: number, public level: number, public price: number, public discount: number){}
}

export class User{
  constructor(public name: string, public password: string){}
}
