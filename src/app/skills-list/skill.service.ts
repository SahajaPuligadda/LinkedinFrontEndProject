export class SkillService {
  private skills: string[] = [
    'Java', 'Python', 'MySQL', 'Angular', 'Springboot'
  ];

  getSkills() {
    return this.skills.slice();
  }
}
