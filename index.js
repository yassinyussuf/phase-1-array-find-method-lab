// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(record){
    let wins = record.find((rcd) => rcd.result === "W");
    if (wins){

        return wins.year 
    }
    
}
superbowlWin(record)