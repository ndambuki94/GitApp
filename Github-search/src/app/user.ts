export class User {
  constructor(
    public avatar_url:string,
    public name:string,
    public follower:number,
    public following:number,
    public repo:number
    
  ) {}
}
