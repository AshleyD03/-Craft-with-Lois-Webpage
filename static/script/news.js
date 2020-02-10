// output location on news
var output = document.querySelector(".output");
// values for each news article, object form in array
var newsList = [
    { date: "28/08/03",
      url:  "card1.jpg",
      alt:  "valentines card art",
      name: "Class Name",
      time: "18:00 - 18:30",
      description: "Descritpion"
    },
    { date: "04/08/98",
      url: "card1.jpg",
      alt: "ECH",
      name: "this is a class",
      time: "wowowo",
      description: "loreeeee"}
];

// create br element
br = document.createElement("br");

// loop through array items
for (var i = 0; i < newsList.length; i++) {
    // background/paragraph
    var  background = document.createElement("div");
    background.className = "background-1";
    var paragraph = document.createElement("div");
    paragraph.className = "paragraph-1";

    // paragraph > date > text
    var date = document.createElement("div");
    date.setAttribute("class","p1-date p1");
    var text = document.createElement("h");
    text.innerHTML = newsList[i].date;
    date.appendChild(text); paragraph.appendChild(date);

    // paragraph > img > url 
    var img = document.createElement("div");
    img.setAttribute("class","p1-img p1");
    var url = document.createElement("img");
    url.setAttribute("class","image-1"); url.setAttribute("src","static/images/" + newsList[i].url); url.setAttribute("alt", newsList[i].alt);
    img.appendChild(url); paragraph.appendChild(img);

    // create info/center 
    var info = document.createElement("div");
    info.setAttribute("class", "p1-info p1");
    var center = document.createElement("center");

    // center > head1/head2/p
    for (var x = 0; x < 3; x++) {
        switch(x) {
            // center > head1
            case 0:
                var add = document.createElement("div");
                add.className = "head1"; 
                add.innerHTML = newsList[i].name;
                break;
            // center > head2
            case 1:
                var add = document.createElement("div");
                add.className = "head2";
                add.innerHTML = newsList[i].time;
                break;
            // center > p
            case 2:
                var add = document.createElement("p");
                add.innerHTML = newsList[i].description;
                break;
        }
        center.appendChild(add)
    }

    // append paragraph > info > center
    info.appendChild(center); paragraph.appendChild(info);

    // append output > background > paragraph
    background.appendChild(paragraph); output.appendChild(background);

    // append br
    background.appendChild(br);
};