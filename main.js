menu_list_array = ["Veg Margherita Pizza","Panner Tikka Pizza","Deluexe Veg Pizza","Chicken tandooori Pizza"
                    ];

function getmenu(){
var htmldata="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
       
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
        htmldata=""
        imgtags="<img src='pizzaImg.png' id=im1>";
        console.log(menu_list_array)
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item().push;
}
