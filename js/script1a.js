// variables
var thePage = document.getElementsByClassName("page");
var listRoot = document.getElementById("student-list");
var studentList = document.getElementsByClassName("student-item cf") ;
var studentIndex = 0;
var numOfstudents = studentList.length - 1;
var numOfpages = numOfstudents/10;
var lastPage = numOfpages + 1; 
var currentPage = 1;
// functions
var hideStudents = function(a,b,list){
  for ( i=a ; i<=b ; i++){
    list[i].style.display = "none";
  }
};

var showStudents = function(a,b,list){
    for ( i=a ; i<=b ; i++){
    list[i].style.display = "block";
  }
};

var addPagination = function(){
    var paginationDiv = document.createElement("div");
    paginationDiv.setAttribute("class","pagination");
    var pageNumbers = document.createElement("ul");
    thePage[0].appendChild(paginationDiv);
    paginationDiv.appendChild(pageNumbers);
    for (i=1; i<=numOfpages; i++){
        numButtonLabel = i.toString();
        numButton = document.createElement("li");
        numButton.innerHTML = "<a>" + numButtonLabel + "</a>";
        pageNumbers.appendChild(numButton);
        upDatePagination(numButton,numButtonLabel);
    }
    
};
var upDatePagination = function(clickedButton,label){
    clickedButton.addEventListener ("click", function(){
        //hide current page
        bottomIndex = (currentPage * 10) - 1;
        topIndex = bottomIndex - 9;
        hideStudents(topIndex,bottomIndex,studentList);
        //show new page
        newBottom = (label * 10) - 1;
        newTop = newBottom - 9;
        showStudents(newTop,newBottom,studentList);
        //make new page current page
        currentPage = label;
    })
    }

var addSearchWidget = function (){
    var searchWidget = document.createElement("div");
    searchWidget.setAttribute("class","student-search");
    var searchField = document.createElement("input");
    searchField.setAttribute("placeholder","Search for student..."); 
    searchWidget.appendChild(searchField);
    var searchButton = document.createElement("button");
    searchButton.innerHTML = "Search";
    searchWidget.appendChild(searchButton);
    var theHeader = document.getElementsByClassName("page-header cf");
    theHeader[0].appendChild(searchWidget);
}

var searchStudents = function(){};
//main program logic
hideStudents(9,numOfstudents,studentList);
if (numOfstudents >10){
    addPagination();
} 
addSearchWidget();