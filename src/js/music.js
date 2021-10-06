
window.onload = function(){
    Main();
}

function Main(){
    console.log("Start");
    var Main = document.getElementById("main");

Main.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    Main.scrollLeft += evt.deltaY;
});
    GetJson();
}

function GetJson()
{
    $.getJSON("src/music.json", (data) => {
        JsonParser(data);
      });
}
function JsonParser(data)
{
    //親要素(music)
    var Main = document.getElementById("main");
    for(let i = 0;i<data.length;i++)
    {
        switch(i%2)
        {
            case 0:
                AddMusicData(true,Main,data[i]);
                break;
            case 1:
                AddMusicData(false,Main,data[i]);
                break;
        }
    }
}

function AddMusicData(i,main,jsondata)
{
    var ContentDiv = document.createElement("div");
    ContentDiv.setAttribute("class","content");
    var a = document.createElement("a");
    a.href = jsondata.YouTubeURL;

    var VideoDiv = document.createElement("div");
    VideoDiv.setAttribute("class","video");
    var thumbnail = document.createElement('img');
    thumbnail.src = "img/"+jsondata.Image;
    VideoDiv.appendChild(thumbnail);

    var br = document.createElement("br");



    var OverViewDiv = document.createElement("div");
    OverViewDiv.setAttribute("class","overview");
    var DatasDiv = document.createElement("div");
    DatasDiv.setAttribute("class","datas");
    var Title = document.createElement("h1");
    var TitleText = document.createTextNode(jsondata.Title);
    Title.appendChild(TitleText);
    var Vocal = document.createElement("h2");
    var VocalText = document.createTextNode("Vocal : " + jsondata.Vocal);
    Vocal.appendChild(VocalText);
    var Music = document.createElement("h2");
    var MusicText = document.createTextNode("Vocal : " + jsondata.Music);
    Music.appendChild(MusicText);

    DatasDiv.appendChild(Title);
    DatasDiv.appendChild(br);
    DatasDiv.appendChild(Vocal);
    DatasDiv.appendChild(Music);
    OverViewDiv.appendChild(DatasDiv);

    if(i)
    {
        a.appendChild(OverViewDiv);
        a.appendChild(VideoDiv);
    }
    else
    {
        a.appendChild(VideoDiv);
        a.appendChild(OverViewDiv);
    }
    ContentDiv.appendChild(a);
    main.appendChild(ContentDiv);
}