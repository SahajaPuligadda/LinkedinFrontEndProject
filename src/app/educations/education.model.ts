
export class Education {
  public id: number;
  public school: string;
  public degree: string;
  public field: string;
  public startDate: string;
  public endDate: string;
  public grade: number;
  public description: string;

  constructor(school: string,
  degree: string,
  field: string,
  startDate: string,
  endDate: string,
  grade: number,
  desc: string) {
    this.school = school;
    this.degree = degree;
    this.field = field;
    this.startDate = startDate;
    this.endDate = endDate;
    this.grade = grade;
    this.description = desc;
  }
}
