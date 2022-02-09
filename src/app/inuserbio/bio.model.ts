
export class Bio {
  public name: string;
  public tagline: string;
  public workplace: string;
  public location: string;
  public photo: string;
  public about: string;

  public constructor(name: string, tag: string, workplace: string,
                     location: string, photo: string, about: string) {
    this.name = name;
    this.tagline = tag;
    this.workplace = workplace;
    this.location = location;
    this.photo = photo;
    this.about = about;
  }
}
