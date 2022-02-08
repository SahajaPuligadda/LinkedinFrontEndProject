
export class Experience {
  public id: number;
  public title: string;
  public empType: string;
  public company: string;
  public location: string;
  public startDate: string;
  public endDate: string;
  public description: string;

  constructor(title: string,
              empType: string,
              company: string,
              location: string,
              startDate: string,
              endDate: string,
              desc: string) {
    this.title = title;
    this.empType = empType;
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = desc;
  }
}
