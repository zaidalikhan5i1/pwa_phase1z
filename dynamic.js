function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status == "200"){
    callback(xhr.responseText);

  }
}
xhr.send(null);

}

loadJson("data/dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  Education(data.Education);
  skills(data.skills);
})
var child1 = document.querySelector(".child1");

function profile(p){
  var image = document.createElement("img");
  // var name = document.createElement("name");

  image.src = p.image;

  // name = p.name;
  child1.append(image);
  child1.append(p.name);
  child1.append(p.email);
  child1.append(p.phno);

}
var child2 = document.querySelector(".child2");
function career(c){
   var hr = document.createElement("hr");

  child2.append(c.info);
  child2.append(hr);
}

 function Education(Education){
   var table = document.createElement("table");
   table.border = "1";
   var tr1 = "<tr><th>S.no</th><th>Name</th><th>Institute</th><th>Percentage</th></tr>";
   var tr2 = " ";

   for(var i = 0 ; i < Education.length ; i++)
     {
   tr2 = tr2 +"<tr><td>"+Education[i].Sno+"</td><td>"+Education[i].Name+"</td><td>"+Education[i].Institute+"</td><td>"+Education[i].Percentage+"</td></tr>";
     }
   table.innerHTML=tr1+tr2;
   child2.append(table);
}


function skills(s){
  var sk = document.createElement("h2")
  sk.innerHTML = "Skills";
  child2.append(sk);
  var ol = document.createElement("ol");
 for(var i in s)
  {
    var li = document.createElement("li");
    li.textContent = s[i];
    ol.append(li);
    break;
  }
  child2.append(ol);
}
