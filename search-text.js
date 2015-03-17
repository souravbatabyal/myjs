/*jshint multistr:true */
var text = "bla bala bal choda chudi sourav bara lwda sourav chudi\ bal choda sourav asfa";// text for searching
var myName = "sourav"; //text fragment to be searched
var hits = []; 
for( var i = 0; i< text.length ; i++) //spans through the entire text
{
    if( text[i] === "s" || text[i] === "S") // search for the 1st letter of the search key
    {
        for( var j=i; j < (myName.length + i); j++)
        {
            hits.push(text[j]); //push letters upto the length of the search key in the array
        }
    }
}
if(hits.length === 0)
{
    console.log("Your name wasn't found!");
}
else
{
    console.log(hits);
}
