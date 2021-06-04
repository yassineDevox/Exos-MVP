export default class UserModel {
  constructor(
    userInfo = null,
    userId = "_",
    fn = "",
    ln = "",
    email = "",
    pass = "",
    role = "USER",
    avatar = "_",
    niveau = "",
    points = "_",
    dateCreation = new Date()
  ) {
    this.userId = userInfo ? userInfo.userId : userId;
    this.firstName = userInfo ? userInfo.firstName : fn;
    this.lastName = userInfo ? userInfo.lastName : ln;
    this.email = userInfo ? userInfo.mail : email;
    this.password = userInfo ? userInfo.password : pass;
    this.role = role;
    this.avatar = userInfo ? userInfo.avatar : avatar;
    this.niveau = userInfo ? userInfo.niveau : niveau;
    this.points = userInfo ? userInfo.points : points;
    this.dateCreation = userInfo ? userInfo.dateCreation : dateCreation;
  }
}
