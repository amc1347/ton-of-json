let contentgridelement = document.getElementById('contentgrid');
let jsondatabase = [
  {
    "title" : "The Napper",
    "picture_url" : "bee.jpg",
    "background_color" : "#",
    "lst" : ["schleep", "the worst one to have in a group project", "snoozing"]
  },
  {
    "title" : "The Unapproachable Hottie",
    "picture_url" : "growl.jpg",
    "background_color" : "#",
    "lst" : ["chomp", "verified baddie", "'don't come near me or else'"]
  },
  {
    "title" : "The Teacher's Pet (Literally haha!)",
    "picture_url" : "oomph.jpg",
    "background_color" : "#",
    "lst" : ["'ME!'", "I can do it!", "Has played an instrument since they were 10"]
  },
  {
    "title" : "The One Who Copies All Their Homework",
    "picture_url" : "spiderman.jpg",
    "background_color" : "#",
    "lst" : ["'Have you done the homework yet?'", "'Wanna help a brother out?'", "'I'll smoke you out for the homework"]
  },
  {
    "title" : "The Know It All",
    "picture_url" : "uh.jpg",
    "background_color" : "#",
    "lst" : ["the best person to work on a project with", "rasies their hand at every question or statement", "sits in the front row"]
  }]

  for (var i = 0; i < jsondatabase.length; i++) {
    element_create(jsondatabase[i]);
  }

function element_create(incoming_info) {

  let newcontentelement = document.createElement("DIV");
  newcontentelement.style.backgroundColor = incoming_info['background_color'];
  newcontentelement.classList.add('contentitem');

  let newcontentheading = document.createElement("H3");
  newcontentheading.classList.add('contenttitle');
  newcontentheading.innerHTML = incoming_info['title'];
  newcontentelement.appendChild(newcontentheading);

  let newcontentsubhead = document.createElement("H5");
  newcontentsubhead.innerHTML = "Characteristics: ";
  newcontentelement.appendChild(newcontentsubhead);

  let newcontentlist = document.createElement("UL");
  newcontentelement.appendChild(newcontentlist);

  for (var i = 0; i < incoming_info['lst'].length; i++) {
    var currentlist = incoming_info['lst'][i];
    var newlistitem = document.createElement("LI");
    newlistitem.innerHTML = currentlist;
    newcontentlist.appendChild(newlistitem);
  }

  let newimage = document.createElement("IMG");
  newimage.classList.add("footerimage");
  newimage.src = incoming_info['picture_url'];
  newcontentelement.appendChild(newimage);

  contentgridelement.appendChild(newcontentelement);
}
