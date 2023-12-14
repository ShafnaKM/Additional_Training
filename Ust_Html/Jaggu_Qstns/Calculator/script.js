function bclick(val)
{
    document.getElementById("screen").value+=val
}

function bclear()
{
    document.getElementById("screen").value=""

}

function eqclick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}