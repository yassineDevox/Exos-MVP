export default class UserModel {
  constructor(
    userId="_",
    fn = "",
    ln = "",
    email = "",
    pass = "",
    role = "USER",
    avatar = "_",
    niveau = "",
    points = "_",
    dateCreation=new Date()
  ) {
    this.userId = userId;
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;
    this.password = pass;
    this.role = role;
    this.avatar = avatar;
    this.niveau = niveau;
    this.points = points;
    this.dateCreation=dateCreation
  }
}
