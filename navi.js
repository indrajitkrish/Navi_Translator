var but=document.querySelector("#btn");
var inp=document.querySelector("#input")
var outp=document.querySelector("#out");
var url="https://api.funtranslations.com/translate/navi.json";
but.addEventListener("click", buttonClickHandler)
function buttonClickHandler(event)
{
    var link = constructurl(url);
    fetch(link)
    .then(response => response.json())
    .then(json =>
        {
            var trans=json.contents.translated;
            outp.innerText = trans;
        })
  .catch(() => alert("Some error occured on server. Please try again after sometime.."))
}

function constructurl(urltext)
{
    return urltext+"?text="+inp.value;
}