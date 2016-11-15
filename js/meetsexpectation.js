// tech degree project 2 - second attempt writing JS script

// variables
var thePage = document.getElementsByClassName("page");
var studentList = document.getElementsByClassName("student-item cf");
var numOfstudents = studentList.length;
var maxIndex = numOfstudents - 1;
var numOfpages = Math.floor(numOfstudents / 10);
var currentPage = 1;
var lastPage = numOfpages + 1;
var lastPageStudents = numOfstudents % 10;

// functions

var hideEverything  = function(){
	for (var x = 0;x <= maxIndex; x++ ){
		studentList[x].style.display = "none";
	}
};

var hidePage = function(pgnum,pglist){
	if (pgnum === lastPage){
		hideLastPage();
	}else{
	var bottomIndex = pgnum * 10 - 1;
	var topIndex = bottomIndex - 9;
	for (var x = topIndex; x <= bottomIndex; x++ ){
		pglist[x].style.display = "none";
	}
	}
};

var showPage = function (pgnum,pglist){
	if (pgnum === lastPage){
		showLastPage();
	}else{
	var bottomIndex = pgnum * 10 - 1;
	var topIndex = bottomIndex - 9;
	for (var x = topIndex; x <= bottomIndex; x++ ){
		pglist[x].style.display = "block";
	}
	}
};

var addPageButtons = function() {
    var paginationDiv = document.createElement("div");
    paginationDiv.setAttribute("class", "pagination");
    paginationDiv.setAttribute("id","mainpagination");
    var pageNumbers = document.createElement("ul");
    thePage[0].appendChild(paginationDiv);
    paginationDiv.appendChild(pageNumbers);
    for (var i = 1; i <= numOfpages; i++) {
        var numButtonLabel = i.toString();
        var numButton = document.createElement("li");
        numButton.innerHTML = "<a>" + numButtonLabel + "</a>";
        pageNumbers.appendChild(numButton);
        upDatePagination(numButton, numButtonLabel);
    }
    if (lastPageStudents !== 0){
      addLastPage(pageNumbers);
    }
        
};

var addLastPage = function (pageNumbers){
		var lastPageLink = document.createElement("li");
        lastPageLink.innerHTML = "<a>" + lastPage + "</a>";
        pageNumbers.appendChild(lastPageLink); 
        lastPageLink.addEventListener("click", function() {
            hidePage(currentPage,studentList);
            showPage(lastPage,studentList);
            currentPage = lastPage;
        });
    };


var upDatePagination = function(clickedButton, label) {
    clickedButton.addEventListener("click", function() {
        //hide current page
        if (currentPage === lastPage) {
            hideLastPage();
        } else {
        hidePage(currentPage,studentList);
        }
        //show new page
				showPage(label,studentList);
        //make new page current page
        currentPage = label;
    });
};
 
 var hideLastPage = function(){
	 var lastPageTop =  numOfstudents - lastPageStudents;
	 for (var x = lastPageTop; x<= maxIndex; x++){
		 studentList[x].style.display = "none";
	 }
	
};

var showLastPage = function(){
	 var lastPageTop =  numOfstudents - lastPageStudents;
	 for (var x = lastPageTop; x<= maxIndex; x++){
		 studentList[x].style.display = "block";
	 }
	
};

// main program logic
if (numOfpages > 1){
	for(var x = 2; x<= numOfpages; x++){
		hidePage(x,studentList );
		}
	hideLastPage();
	addPageButtons();
	} 