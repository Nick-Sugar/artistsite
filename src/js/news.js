window.onload = function(){
    GetJson();
}

function GetJson()
{
    $.getJSON("src/news.json", (data) => {
        JsonParser(data);
      });
}
function JsonParser(data)
{
    var Main = document.getElementById("main");
    for(let i = 0;i<data.length;i++)
    {
        AddData(Main,data[i]);
    }
}
function AddData(main,jsondata)
{
    var ContentDiv = document.createElement("div");
    ContentDiv.setAttribute("class","content");
    var a=document.createElement("a");
    a.href = jsondata.Url;

    var day = document.createElement("p");
    var dayText = document.createTextNode(jsondata.Day);
    day.appendChild(dayText);

    var Title = document.createElement("h1");
    var TitleText = document.createTextNode(jsondata.Title);
    Title.appendChild(TitleText);

    a.appendChild(day);
    a.appendChild(Title);
    ContentDiv.appendChild(a);
    main.appendChild(ContentDiv);
}