module.exports = function getSongs(number){
    let lyrics
    if(number<100 && number>1)
    {
        let n1 = number.toString();
        let n2 = (number-1).toString();
        lyrics+=" bottles of beer on the wall, "+n1+" bottles of beer.\n"+
            "Take one down and pass it around, "+n2+" bottles of beer on the wall.";
    }
    else
    {
        lyrics+="1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";

    }
    return lyrics
};