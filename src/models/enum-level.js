export default class LevelStudyEnum {
  
    //private fields 
    static #_COLLEGE = "COLLEGE";
    static #_TC = "TC";
    static #_1BAC = "1BAC";
    static #_2BAC = "2BAC";
    static #_SUP = "SUP";

    //Accessors for get function read only
    static get COLLEGE() { return this.#_COLLEGE} ;
    static get TC() { return this.#_TC} ;
    static get Bac_1() { return this.#_1BAC} ;
    static get BAC_2() { return this.#_2BAC} ;
    static get SUP() { return this.#_SUP} ;

}
