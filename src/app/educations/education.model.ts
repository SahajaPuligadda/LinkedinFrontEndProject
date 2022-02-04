
export class Education {
  public school: string;
  public degree: string;
  public fieldOfStudy: string;
  public startDate: string;
  public endDate: string;
  public grade: number;
  public description: string;

  constructor(school: string,
  degree: string,
  fieldOfStudy: string,
  startDate: string,
  endDate: string,
  grade: number,
  desc: string) {
    this.school = school;
    this.degree = degree;
    this.fieldOfStudy = fieldOfStudy;
    this.startDate = startDate;
    this.endDate = endDate;
    this.grade = grade;
    this.description = desc;
  }
}
