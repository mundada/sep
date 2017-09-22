function obj()
                    // global varible --->
var num =1;
function obj1(){
 num += 1;   
}
obj1();
 return num;
}obj();
obj();

//3 nested function--->///////////

function sub()
{
var num;
var num2;
var num1 = 1;
function sub1()
{
var num2 = 2;
function sub2()
{
num= num1 + num2;
}
sub2();
return num;
}
sub1();
}sub(); // getting output undefined



/////////////////////////////////////

var a = (function a()
{
var count;
var count1 = 1;
var count2 = 2;

return function()
{
return count = count1 + count2;
}})();
a();
a();			// output is 3	