export default class PostModel {
  constructor(
    avatar,
    content,
    dateCreation,
    description,
    firstName,
    lastName,
    matiere,
    niveau,
    numberComment,
    numberLikes,
    numberSolution,
    publicationId,
    type,
    userId
    ) {
    this.avatar = avatar;
    this.content = content;
    this.dateCreation = dateCreation;
    this.description = description;
    this.firstName = firstName;
    this.lastName = lastName;
    this.matiere = matiere;
    this.niveau = niveau;
    this.numberComment = numberComment;
    this.numberLikes = numberLikes;
    this.numberSolution = numberSolution;
    this.publicationId = publicationId;
    this.type = type;
    this.userId = userId;
  }
}
