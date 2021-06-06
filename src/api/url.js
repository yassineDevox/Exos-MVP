 const UrlPhoto = {
    urlPhotoHeroku: "https://exos-back.herokuapp.com/api",
    urlPhotoAppBack: "http://localhost:3649/",
    urlServerHeroku: "https://exos-back.herokuapp.com/"
};
const BASE_URL = "https://exos-back.herokuapp.com/";
// const BASE_URL = "http://localhost:8083/";

const BASE_API = {
    
    USERS: BASE_URL + "api/nkrm/v1/users/",
    PUBLICATIONS: BASE_URL + "api/nkrm/pub/",
    PARTI: BASE_URL + "api/parti/",
    PROFIL: BASE_URL + "api/nkrm/profil/",
    PARTICIPATION: BASE_URL + "api/participe/",
    AMIS: BASE_URL + "api/nkrm/follow/ami",
    UTILS: BASE_URL + "api/ibm/exos/upload",
    CRITERIA: BASE_URL + 'api/nkrm/pub/publications/criteria',
    CREITERIA_USER:BASE_URL+'api/nkrm/user/criteria'
};

const URL_FOR = {

    AUTH: { SIGNIN: BASE_API.USERS + "in", SIGNUP: BASE_API.USERS + "up" },

    PUB: {

        list: (np = 0, o = "desc", sz = 100) => { return `${BASE_API.PUBLICATIONS}all?numberPage=${np}&order=${o}&size=${sz}` },

        search: (s, np = 0, o = "desc", sz = 11) => { return `${BASE_API.PUBLICATIONS}search?numberPage=${np}&order=${o}&search=${s}&size=${sz}` },

        listByEtat: (e, np = 0, o = "desc", sz = 11) => { return `${BASE_API.PUBLICATIONS}byetat?etat=${e}&numberPage=${np}&order=${o}&size=${sz}` },

        listComments: (idpub) => { return `${BASE_API.PUBLICATIONS}comments?publicationId=${idpub}` },

        joinRoom: (idpub) => { return `${BASE_API.PARTI}room/${idpub}` },

        acceptParticipant: (idpub) => { return `${BASE_API.PARTI}accept/` },

        ADD: `${BASE_API.PUBLICATIONS}po`,

        listPublicationByLevel: `${BASE_API.CRITERIA}`, 
        listPublicationByDescAndLevel:(desc,niveau, np = 0, o = "desc", sz = 100) => { 
        
            return `${BASE_API.CRITERIA}?description=${desc}&niveau=${niveau}&numberPage=${np}&order=${o}&size=${sz}` 
        },

        SAVE_IN_PROFIL: `${BASE_API.PUBLICATIONS}profils/`,

        listByMatiere: (s, np = 0, o = "desc", sz = 11) => { return `${BASE_API.PUBLICATIONS}publication/matiere/${s}?numberPage=${np}&order=${o}&size=${sz}` },

        likePublication: (pi, ui) => { return `${BASE_API.PUBLICATIONS}like?publicationId=${pi}&userId=${ui}` },

        allPubsByProfil: (ui, np = 0, o = "desc", sz = 20) => { return `${BASE_API.PROFIL}info/publie?numberPage=${np}&order=${o}&size=${sz}&userId=${ui}` },
    },

    PARTICIPATION: {

        allSolByIdPub: (pubId) => { return `${BASE_API.PARTICIPATION}solutions?publicationId=${pubId}`; },

        ADD_SOLUTION: `${BASE_API.PARTICIPATION}solution`,

        getSolutionByID: (idSol) => { return `${BASE_API.PARTICIPATION}solution?idSolution=${idSol}`; }
    },
    AMIS: {
        FOLLOW: BASE_API.AMIS,
        search: (keySearch) => { return `${BASE_API.AMIS}/search/${keySearch}` },
        bylevel:(level)=>{return `${BASE_API.USERS}level/${level}`}
    },
    UPLOAD: {
        FILES: BASE_API.UTILS
    },
    PROFIL:{
        SETTING:BASE_API.USERS+'setting',
        myPubs:(userId) => {return `${BASE_API.PROFIL}info/publie?numberPage=0&order=desc&size=100&userId=${userId}`},
        mySavedPubs:(userId) => {return `${BASE_API.PROFIL}info/enregistre?numberPage=0&order=desc&size=100&userId=${userId}`}
    },
    ROOM:{
        pubInfos:(publicationId)=>{ return `${BASE_API.PUBLICATIONS}comments?publicationId=${publicationId}`},
        pubSolutions:(publicationId)=>{ return `${BASE_API.PARTICIPATION}solutions?publicationId=${publicationId}`},
        ADD_SOLUTION: `${BASE_API.PARTICIPATION}solution`,
        ADD_COMMENT :`${BASE_API.PARTICIPATION}comments`,

    }

}

export const config = { url: URL_FOR,baseUrl:BASE_URL,URL_PHOTOS:UrlPhoto.urlPhotoHeroku};