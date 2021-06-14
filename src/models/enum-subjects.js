export default class SubjectEnum {
  
    //private fields 
    static #_MATH = "Mathématique";
    static #_SVT = "svt";
    static #_PHYS = "Physique-Chimie";
    static #_INFORMATIQUE = "informatique";
    static #_AUTRE = "autre";

    //Accessors for get function read only
    static get MATH () { return this.#_MATH } ;
    static get SVT() { return this.#_SVT} ;
    static get PHYS() { return this.#_PHYS} ;
    static get INFORMATIQUE() { return this.#_INFORMATIQUE} ;
    static get AUTRE() { return this.#_AUTRE} ;

}
