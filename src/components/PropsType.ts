export type deneme = {
    fullName  : {
      firstName : string ,
      lastName : string
  }
}

export type aileListType = {
    aileList : { 
        firstName : string ;
        lastName  : string ;
    }[]
 };

 export const instructorList = [
    {
      firstName : "Emre" , 
      lastName : "Özyörük"
     } ,
     {
      firstName : "Aynur" , 
      lastName : "Özyörük"
     } ,
     {
      firstName : "Ebrar" , 
      lastName : "Özyörük"
     } ,
     {
      firstName : "Halit" , 
      lastName : "Özyörük"
     } ,
   ]

   export type DataComing = {
    name : string
    courseNumber : number
    isBest : boolean
}

export type userType = {

  name : string
  email : string 
  age : number  
}