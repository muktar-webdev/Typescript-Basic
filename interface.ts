// --interface is look like class --// we can create or declare a common object which we can use in multiple object which have same common propery.


interface Player{
    name:string,
    club:string,
    salary:number,
    wife?:string,   // --Optional Property--//(means,kuno object er wife property thakteu pare abr nau o pare)
    isPlaying:boolean
}

let messy:Player = {
 name:'Messy',
 club:'Bercelona',
 salary:200000,
 wife:'Selena Gomez',
 isPlaying:true
}

let mehedi:Player ={
    name:'Mehedi',
    club:'Kolkata Knight Riders',
    salary:40000,
    // wife:'Nai'
    isPlaying:true
}



