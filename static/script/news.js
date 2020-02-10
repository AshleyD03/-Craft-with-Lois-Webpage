// output location on news
var output = document.querySelector(".output");
// values for each news article, object form in array
var newsList = [
  {
    date: "10/02/20",
    url: "card1.jpg",
    alt: "valentines card art",
    name: "Valentines Cards",
    time: "18:00 - 18:30",
    description: "Inspired by the time of love, it's time for lovey dovey cards. <br> Feel free to come down to Timber-Treasures, at 1 High St, Salisbury SP1 2NH, for a fun craft lesson. <br> £5 Entry fee to pay for material cost."
  }
];

// loop through array items
for (var i = 0; i < newsList.length; i++) {
  // background/paragraph
  var background = document.createElement("div");
  background.className = "background-1";
  var paragraph = document.createElement("div");
  paragraph.className = "paragraph-1";

  // paragraph > date > text
  var date = document.createElement("div");
  date.setAttribute("class", "p1-date p1");
  var text = document.createElement("h");
  text.innerHTML = newsList[i].date;
  date.appendChild(text);
  paragraph.appendChild(date);

  // paragraph > img > url
  var img = document.createElement("div");
  img.setAttribute("class", "p1-img p1");
  var url = document.createElement("img");
  url.setAttribute("class", "image-1");
  url.setAttribute("src", "static/images/" + newsList[i].url);
  url.setAttribute("alt", newsList[i].alt);
  img.appendChild(url);
  paragraph.appendChild(img);

  // create info/center
  var info = document.createElement("div");
  info.setAttribute("class", "p1-info p1");
  var center = document.createElement("center");

  // Appends center > head1/head2/p using a for loop with a switch statement for each different element
  for (var x = 0; x < 3; x++) {
    switch (x) {
      // Firstly creates div.head1 element
      case 0:
        var add = document.createElement("div");
        add.className = "head1";
        add.innerHTML = newsList[i].name;
        break;
      // Secoundly creates div.head2 elemenet
      case 1:
        var add = document.createElement("div");
        add.className = "head2";
        add.innerHTML = newsList[i].time;
        break;
      // Lastly creates paragraph element
      case 2:
        var add = document.createElement("p");
        add.innerHTML = newsList[i].description;
        break;
    }
    // Appends the element to center
    center.appendChild(add);
  }

  // append paragraph > info > center
  info.appendChild(center);
  paragraph.appendChild(info);

  // append output > background > paragraph
  background.appendChild(paragraph);
  output.appendChild(background);
}
