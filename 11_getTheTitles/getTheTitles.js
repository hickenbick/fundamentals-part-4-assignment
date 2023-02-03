const books = [
  {
    title:"Book",
    author: "Author"
  },
  {
    title:"Book1",
    author: "Author1"
  },
  {
    title:"Book2",
    author: "Author2"
  },
  {
    title:"Book3",
    author: "Author3"
  }
]

let getTheTitles = function(arr){
  let result = []
  arr.map(function(obj) {
    result.push(obj.title)
  })
  return result
};

// Do not edit below this line
module.exports = getTheTitles;
