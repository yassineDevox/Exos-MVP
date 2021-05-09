export default class UserModel {
    
    constructor(fn="",ln="",email="",pass="",role="USER",avatar="_",level=""){
        this.firstname = fn;
        this.lastname = ln;
        this.email = email;
        this.password = pass;
        this.role = role;
        this.avatar = avatar;
        this.level = level;
    }
}