"ues strict";
var getSongs = require("../main/main.js")
var lyrics = require("../main/main.js")
describe('getSongs', function(){

it("returns when number>1",function(){
    let number = 99
    let result= getSongs(number);
    expect(lyrics)==('99 bottles of beer on the wall, 99 bottles of beer.\nTake one down, pass it around, 98 bottles of beer on the wall.');
 });//大于1的数字

 it("returns when number=1",function(){
    let number = 1
    let result= getSongs(number);
    expect(lyrics)==('1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.');
 });//等于1的数字

 it("returns when number<1",function(){
    let number = 0
    let result= getSongs(number);
    expect(lyrics)==('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.');
 });//等于0的数字
})