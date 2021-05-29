export default class UserModel {
  constructor(
    userId,
    fn = "",
    ln = "",
    mail = "",
    pass = "",
    role = "USER",
    avatar = "_",
    niveau = "",
    points = 0,
    dateCreation=""
  ) {
    this.userId = userId;
    this.firstName = fn;
    this.lastName = ln;
    this.mail = mail;
    this.password = pass;
    this.role = role;
    this.avatar = avatar;
    this.niveau = niveau;
    this.points = points;
    this.dateCreation=dateCreation
  }
}
