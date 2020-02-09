const movieDB= [
  { title: "In Bruges",
    hasWatched: true,
    rating: 5
  },
  { title: "Frozen",
    hasWatched: false,
    rating: 4.5
  },
  { title: "Mad Max Fury Road",
    hasWatched: true,
    rating: 5
  },
  { title: "Les Miserables",
    hasWatched: false,
    rating: 3.5
  }
  ];



// function movieCritic(arr){
//   let seen = "You have watched ";
//   let notSeen = "You have not seen ";
//   let theTitle;
//   let theRating;
//   for(let i=0; i<arr.length; i++){

//     if(arr[i].hasWatched !== false){
//       theTitle = arr[i].title;
//       theRating = arr[i].rating;
//       movieCriticSeen()
//     } else {
//       theTitle = arr[i].title;
//       theRating = arr[i].rating;
//       movieCriticNoSee()
//     }

//   }

//   function movieCriticSeen(){
//     console.log(seen + `"` + theTitle + `"` + " - " + theRating + " stars")
//   }

//   function movieCriticNoSee(){
//     console.log(notSeen + `"` + theTitle + `"` + " - " + theRating + " stars")
//   }

// }

 function movieCritic(arr){
  arr.forEach(function(x){
  if(x.hasWatched !== true){
    console.log("You have not watched " + "\"" + x.title + "\"" + "- " + x.rating + " stars")
    } else {
    console.log("You have seen " + "\"" + x.title + "\"" + "- " + x.rating + " stars")
  }
  });
 };

movieCritic(movieDB);