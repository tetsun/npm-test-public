export default class Hoge {
  private hoge: string;

  constructor(hoge: string) {
    this.hoge = hoge;
  }

  public toString: Function = (): void => {
    console.log(this.hoge);
  }
};
