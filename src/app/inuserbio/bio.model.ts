
export class Bio {
  public name: string;
  public tagline: string;
  public workplace: string;
  public location: string;
  public dpPath: string;
  public about: string;

  constructor(name: string, tag: string, workplace: string, location: string, dpPath: string, about: string) {
    this.name = name;
    this.tagline = tag;
    this.workplace = workplace;
    this.location = location;
    this.dpPath = dpPath;
    this.about = about;
  }
}
