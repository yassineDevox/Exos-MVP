export class NewPost {
  constructor(
    type="image",
    content="",
    description="",
    matiere="",
    niveau="",
    userId=""
  ) {
    this.content = content;
    this.description = description;
    this.matiere = matiere;
    this.niveau = niveau;
    this.userId = userId;
    this.type = type;
  }

  isEmpty = () => {
    for (const prop in this) {
      if(this[prop]=="") return true;
    }
    return false;
  }
}

export default class PostModel extends NewPost {
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
    NewPost(
      type,
      content,
      description,
      matiere,
      niveau,
      userId
    );
    this.numberComment = numberComment;
    this.dateCreation = dateCreation;
    this.numberLikes = numberLikes;
    this.numberSolution = numberSolution;
    this.publicationId = publicationId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }
}
