export class Qualification {
  public static readonly SKILL_FIELD_NAME = 'skill';
  public static readonly ID_FIELD_NAME = 'id'

  public static readonly ALL_FIELDS = [
    this.SKILL_FIELD_NAME,
    this.ID_FIELD_NAME
  ];

  constructor(public skill?: string, public id?: number) {}
}
