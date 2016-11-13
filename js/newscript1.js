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
var hitList = [];
var searchDisplay = false;

// functions
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

var addSearchWidget = function() {
    var searchWidget = document.createElement("div");
    searchWidget.setAttribute("class", "student-search");
    var searchField = document.createElement("input");
    var placeHolder = "Search for student...";
    searchField.setAttribute("placeholder", placeHolder);
    searchField.setAttribute("type", "text");
    searchField.setAttribute("id", "searchString");
    searchWidget.appendChild(searchField);
    var searchButton = document.createElement("button");
    searchButton.innerHTML = "Search";
    searchWidget.appendChild(searchButton);
    var theHeader = document.getElementsByClassName("page-header cf");
    theHeader[0].appendChild(searchWidget);
    searchButton.addEventListener("click", function() {
        if (searchDisplay === true){
            clearSearchResults();
        }
        var searchTarget = searchString.value;
        if (searchTarget === "") {
          resetPage();
        } else {
            var searchCompare = RegExp(searchTarget,"i");
            var listTarget = "";
            var searchHit = 0;
            for (var x = 0; x <= maxIndex; x++) {
                listTarget = studentList[x].textContent;
                if (searchCompare.test(listTarget) === true) {
                    hitList[searchHit] = x;
                    searchHit = searchHit + 1;
                }
           }
            hideEverything();
            var limit = hitList.length - 1;
            for (var y = 0; y <= limit; y++) {
                studentList[hitList[y]].style.display = "block";
            }
            searchDisplay = true;
        }
    });
};

var addPageButtons = function() {
    var paginationDiv = document.createElement("div");
    paginationDiv.setAttribute("class", "pagination");
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

var showSearchResults = function() {
    var maxHit = hitList.length-1;
    for (var x = 0; x <= maxHit; x++) {
        studentList[hitList[x]].style.display = "block";
    }
    hitList.lenghth = 0;
};

var clearSearchResults = function() {
    var maxHit = hitList.length-1;
    for (var x = 0; x <= maxHit; x++) {
        studentList[hitList[x]].style.display = "none";
    }
    hitList.lenghth = 0;
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


var resetPage = function(){
	for (var x=2;x<=numOfpages; x++){
		hidePage(x);
	}
	hideLastPage();
	addPagebuttons();
	addSearchWidget();
};

// var switchPagination

// var paginateSearch 

var hideEverything  = function(){
	for (var x = 0;x <= maxIndex; X++ ){
		studentList[x].style.display = "none";
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