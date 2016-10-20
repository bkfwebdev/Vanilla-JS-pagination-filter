// variables
var thePage = document.getElementsByClassName("page");
var listRoot = document.getElementById("student-list");
var studentList = document.getElementsByClassName("student-item cf") ;
var studentIndex = 0;
var numOfstudents = studentList.length - 1;
var numOfpages = numOfstudents/10;
var lastPage = numOfpages + 1; 
var currentPage = 0;
// functions
var hideStudents = function(a,b,list){
  for ( i=a ; i<=b ; i++){
    list[i].style.display = "none";
  }
};
var showStudents = function(a,b,list){};

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
        upDatePagination(numButton);
    }
    
};
var upDatePagination = function(clickedButton){
    clickedButton.addEventListener ("click", function(){console.log(clickedButton.innerHTML)});
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

 
