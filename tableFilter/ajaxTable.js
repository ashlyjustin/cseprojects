var info = document.getElementById('info');
var btn = document.getElementById('btn');
document.getElementById('count').innerHTML=0;
document.getElementById('myInput').style.display='none';
btn.addEventListener('click',function(){

		var xhttp = new XMLHttpRequest();

		xhttp.open('GET','ajax.json');
		xhttp.onload = function(){
		var data = JSON.parse(xhttp.responseText);
		console.log(data);
		renderHTML(data);
	};
	xhttp.send();
});
var i=0;

function renderHTML(data){
	var htmlString = "";

	for(i=0;i<data.length;i++){
		htmlString += "<tr><td>" + data[i].name + "</td><td>" + data[i].age + "</td><td>" +data[i].branch +"</td><td>" +data[i].city+"</td></tr>";
	}
	if(i==data.length)
	{
		document.getElementById('count').innerHTML=i;
		document.getElementById('btn').style.display='none';
		document.getElementById('myInput').style.display='inline';

	}
	info.insertAdjacentHTML('beforeend' , htmlString);
}


function searchFunction() {
  // Declare variables 
  var input, filter, table, tr, td,td1,td2,td3, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("info");
  tr = table.getElementsByTagName("tr");
  var count=0;


  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if(td+td2+td3+td1){
			if((td.innerHTML.toUpperCase().indexOf(filter)+td2.innerHTML.toUpperCase().indexOf(filter)+
				td3.innerHTML.toUpperCase().indexOf(filter)+td1.innerHTML.toUpperCase().indexOf(filter))>-4)
			{
				tr[i].style.display = "";
				count++;
				
			}
			else{
				tr[i].style.display = 'none';

			}  
		}
    } 
  }
  document.getElementById('count').innerHTML=count;

}
