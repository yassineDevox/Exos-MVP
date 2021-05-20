export default class LevelStudyEnum {
  
    //private fields 
    static #_COLLEGE = "College";
    static #_TC = "Tronc Commun";
    static #_1BAC = "Bac 1er année";
    static #_2BAC = "Bac 2eme année";
    static #_SUP = "Université / Centre";

    //Accessors for get function read only
    static get COLLEGE() { return this.#_COLLEGE} ;
    static get TC() { return this.#_TC} ;
    static get BAC_1() { return this.#_1BAC} ;
    static get BAC_2() { return this.#_2BAC} ;
    static get SUP() { return this.#_SUP} ;

}
