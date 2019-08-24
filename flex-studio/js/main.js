var Default = 200;
var DefaultClon = 200;
var buttonVar = 3;
var stepByStep1;
function myFunction(x){
    if(x == 1 && Default != 400){
        // alert("1");
        buttonVar++;
        Default += 100;
        DefaultClon -= 100;
        // alert(Default);
        document.getElementById('imgConteiner').style.left =- Default + '%';
        document.getElementById('imgConteiner-clon').style.left =- DefaultClon + '%';
        
    }
    else if(x == 0 && Default != 0){
        buttonVar--;
        Default -= 100;
        DefaultClon += 100;
        document.getElementById('imgConteiner').style.left =- Default + '%';
        document.getElementById('imgConteiner-clon').style.left =- DefaultClon + '%';
    }
    
    // ვთვლი, რომ საიტი ესეთი მიდგომით უფრო მსუბუქი იქნება
    stepByStep1=document.getElementById('div-preview').style.visibility
    stepByStep2=document.getElementById('div-next').style.visibility
 
    if (buttonVar == 1 && stepByStep1!='hidden'){
        document.getElementById('div-preview').style.visibility = 'hidden';
        document.getElementById('fsPreview').style.transitionDelay = '-1s';
        document.getElementById('fsPreview').style.transitionDuration = '0.5s';
        document.getElementById('fsPreview').style.opacity = '0';
        
    }
    else if(buttonVar == 2 && stepByStep1!='visible'){
        document.getElementById('div-preview').style.visibility = 'visible';
        document.getElementById('fsPreview').style.transitionDelay = '0.5s';
        document.getElementById('fsPreview').style.transitionDuration = '1s';
        document.getElementById('fsPreview').style.opacity = '1';
        
    }
    else if(buttonVar == 4 && stepByStep2!='visible'){
        document.getElementById('div-next').style.visibility = 'visible';
        document.getElementById('fsNext').style.transitionDelay = '0.5s';
        document.getElementById('fsNext').style.transitionDuration = '1s';
        document.getElementById('fsNext').style.opacity = '1';
        
    }
    else if (buttonVar == 5 && stepByStep2!='hidden'){
        document.getElementById('div-next').style.visibility = 'hidden';
        document.getElementById('fsNext').style.transitionDelay = '-1s';
        document.getElementById('fsNext').style.transitionDuration = '0.5s';
        document.getElementById('fsNext').style.opacity = '0';
        
    }
    
    
}
// botton

var fsX;
var fsY;
var fsNext;
var fsPreview;
var nextStyleElem = document.head.appendChild(document.createElement("style"));
var previewStyleElem = document.head.appendChild(document.createElement("style"));
// Next
function nextFunction() {
	fsX=1;
  fsNext = setInterval(alertFunc, 150);
}

function alertFunc() {
	if(fsX==1){
		nextStyleElem.innerHTML = "#nextIcon1:before {background: linear-gradient(35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}"+"#nextIcon1:after {background: linear-gradient(35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}";
	}
	else if(fsX==2){
		nextStyleElem.innerHTML = "#nextIcon2:before {background: linear-gradient(35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}"+"#nextIcon2:after {background: linear-gradient(35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}";
	}
	else if(fsX==3){
		nextStyleElem.innerHTML = "#nextIcon3:before {background: linear-gradient(35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}"+"#nextIcon3:after {background: linear-gradient(35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}";
	}
	fsX++;
	if(fsX==4)(fsX=1);
}
function stopNextFunction() {
	clearInterval(fsNext);
	nextStyleElem.innerHTML = "#nextIcon1:before {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}"+"#nextIcon1:after {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}";
	nextStyleElem.innerHTML = "#nextIcon2:before {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}"+"#nextIcon2:after {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}";
	nextStyleElem.innerHTML = "#nextIcon3:before {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}"+"#nextIcon3:after {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}";
    
}
// Preview

function previewFunction() {
	fsY=1;
  fsPreview = setInterval(Preview, 150);
}

function Preview() {
	if(fsY==1){
		previewStyleElem.innerHTML = "#previewIcon3:before {background: linear-gradient(-35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}"+"#previewIcon3:after {background: linear-gradient(-35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}";
		
	}
	else if(fsY==2){
		previewStyleElem.innerHTML = "#previewIcon2:before {background: linear-gradient(-35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}"+"#previewIcon2:after {background: linear-gradient(-35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}";
	}
	else if(fsY==3){
		previewStyleElem.innerHTML = "#previewIcon1:before {background: linear-gradient(-35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}"+"#previewIcon1:after {background: linear-gradient(-35deg, transparent 45%, white 53%, #f8fff8 45%,transparent 60%);}";
	}
	fsY++;
	if(fsY==4)(fsY=1);
}
function stopPreviewFunction() {
	clearInterval(fsPreview);
	previewStyleElem.innerHTML = "#previewIcon1:before {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}"+"#previewIcon1:after {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}";
	previewStyleElem.innerHTML = "#previewIcon2:before {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}"+"#previewIcon2:after {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}";
	previewStyleElem.innerHTML = "#previewIcon3:before {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}"+"#previewIcon3:after {ackground: linear-gradient(-35deg, transparent 45%, #166b6b 48%, #1aa9a9 52%, #166b6b 54%,transparent 60%);}";
    
}
// dropdown menu icon show
var menuB = 0;
//   show menu
function menuShowFunction(){
  
    if (menuB == 0) {
      document.getElementById("h_menu").classList.toggle("h-menu-show");
      document.getElementById("fs_menu_b_item1").classList.toggle("fs-menu-item1");
      document.getElementById("fs_menu_b_item2").classList.toggle("fs-menu-item2");
      document.getElementById("fs_menu_b_item3").classList.toggle("fs-menu-item3");
      menuB = 1;
    }
    else if (menuB == 1) {
      document.getElementById("h_menu").classList.remove("h-menu-show");
      document.getElementById("fs_menu_b_item1").classList.remove("fs-menu-item1");
      document.getElementById("fs_menu_b_item2").classList.remove("fs-menu-item2");
      document.getElementById("fs_menu_b_item3").classList.remove("fs-menu-item3");
      menuB = 0;
    }
    }

// dropdown menu
function iconClickFunction(iconca) {
  
    if (iconca == 1){
        jj = 1;
            document.getElementById("fs_menu_item2").classList.toggle("fs-menu-item-grow");
            document.getElementById("fs_span_icon2").classList.toggle("fs-deg");
            document.getElementById("fs_menu_item3").classList.remove("fs-menu-item-grow");
            document.getElementById("fs_span_icon3").classList.remove("fs-deg");
    }
    else if(iconca == 2){
        jj = 0;
            document.getElementById("fs_menu_item3").classList.toggle("fs-menu-item-grow");
            document.getElementById("fs_span_icon3").classList.toggle("fs-deg");
            document.getElementById("fs_menu_item2").classList.remove("fs-menu-item-grow");
            document.getElementById("fs_span_icon2").classList.remove("fs-deg");
    }
  }

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.fs-dropdown-icon')) {
      var dropdowns = document.getElementsByClassName("fs-menu-item");
      var dropIcon = document.getElementsByClassName("fs-span-icon");
      var ii;
      var kk;
      for (ii = 0; ii < dropdowns.length; ii++) {
        var openDropdownIcon = dropdowns[ii];
        if (openDropdownIcon.classList.contains('fs-menu-item-grow')) {
          openDropdownIcon.classList.remove('fs-menu-item-grow');
        }
      }
      for (kk = 0; kk < dropIcon.length; kk++) {
        var openDropdownIcon = dropIcon[kk];
        if (openDropdownIcon.classList.contains('fs-deg')) {
          openDropdownIcon.classList.remove('fs-deg');
        }
      }
    }
  }



 