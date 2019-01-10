//let name = {
  //  (1) (2)
  //  key : 'value';
  //  (3) (4) (5)
//}



var netflix = { ///object
    id: 9, //properties inside object
    name: "Super Store",
      season1: {  ///new object
        seasonInfo: {  ///obeject
          episodeInfo : [  ///array of objects containing episodes and episode names
            { episode: 1, episodeName: "Pilot"}, //arrays
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };

    console.log('just season info:' , netflix.season1.seasonInfo)
    console.log('my favorite episode is in Season 1 :' , netflix.season1.seasonInfo.episodeInfo[9].episodeName)
    console.log()


    ////
spaceJam
    
let spaceJam = {
 toonSquad: {
  human: 'Michael Jordan',
  rabbit1: 'Bugs Bunny',
  rabbit2: 'Lola Bunny',
  duck: 'Daffy Duck',
  tDevil: 'Tasmanian Devil',
  bird: 'Tweety',
  cat: 'Sylvester',
  pig: 'Porky Pig'
 },
 monstars: {
  0: 'Bupkus',
  1: 'Bang',
  2: 'Nawt',
  3: 'Pound',
  4: 'Blanko'
 },
 nbaPlayers: {
  phoenixSuns: 'Charles Barkley',
  newJerseyNets: 'Shawn Bradley',
  newYorkNicks: 'Patrick Ewing',
  charlotteHornets1: 'Larry Johnson',
  charlotteHornets2: 'Muggsy Bogues'
 }
}
 console.log(spaceJam.nbaPlayers)


//////

let garden = {

    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};


////console.log("I like",garden.vegetable,"its my favorite")


let x = 'water';

object.keys(garden).forEach(g => {
    if (g == x){
        console.log('yay, its' , garden[x])
} else{
    console.log("ther's no water in here =(")
}
});


