export class Portfolio {
  title: string;
  client?: string;
  content: string;

  constructor(obj: any) {
    if (obj) {
      this.title = obj.title;
      this.client = obj.client;
      this.content = this.content;
    }
  }
}
