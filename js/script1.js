// variables
var thePage = document.getElementsByClassName("page");
var studentList = document.getElementsByClassName("student-item cf");
var numOfstudents = studentList.length;
var maxIndex = numOfstudents - 1;
var numOfpages = Math.floor(numOfstudents / 10);
var currentPage = 1;
var extraPage = numOfpages + 1;
var overFlow = numOfstudents % 10;
// functions
var hideStudents = function(a, b, list) {
    for (i = a; i <= b; i++) {
        list[i].style.display = "none";
       }
};
var showStudents = function(a, b, list) {
    for (i = a; i <= b; i++) {
        list[i].style.display = "block";
    }
};
 var addPagination = function() {
    var paginationDiv = document.createElement("div");
    paginationDiv.setAttribute("class", "pagination");
    var pageNumbers = document.createElement("ul");
    thePage[0].appendChild(paginationDiv);
    paginationDiv.appendChild(pageNumbers);
    for (i = 1; i <= numOfpages; i++) {
        var numButtonLabel = i.toString();
        var numButton = document.createElement("li");
        numButton.innerHTML = "<a>" + numButtonLabel + "</a>";
        pageNumbers.appendChild(numButton);
        upDatePagination(numButton, numButtonLabel);
    }  
    if (overFlow != 0){
        var lastPageLink = document.createElement("li");
        var lastPageBottom = maxIndex;
        var lastPageTop = numOfstudents - overFlow; 
        lastPageLink.innerHTML =  "<a>" + extraPage + "</a>";
        pageNumbers.appendChild(lastPageLink);
        var omega = currentPage * 10 - 1;
        var alpha = omega - 9;
        lastPageLink.addEventListener("click",function(){
                                      hideStudents(alpha,omega,studentList);
        showStudents(lastPageTop,lastPageBottom,studentList);
            currentPage = extraPage
                                      });
    };

};
var upDatePagination = function(clickedButton, label) {
    clickedButton.addEventListener("click", function() {
        //hide current page
        if (currentPage == extraPage){clearLastPage()} else {
        bottomIndex = (currentPage * 10) - 1;
        topIndex = bottomIndex - 9;
        hideStudents(topIndex, bottomIndex, studentList);
        }
        //show new page
        newBottom = (label * 10) - 1;
        newTop = newBottom - 9;
        showStudents(newTop, newBottom, studentList);
        //make new page current page
        currentPage = label;
    })
}

var clearLastPage = function(){
    var extraPageTop = numOfstudents - overFlow;
    hideStudents(extraPageTop,maxIndex,studentList); 
}


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
        var searchTarget = searchString.value;
        if (searchTarget == ""){
            var bottomReset = currentPage * 10 - 1;
            var topReset = bottomReset - 9;
            hideStudents(0,52,studentList);
            showStudents(0,9,studentList);
            currentPage = 1;
            
            
          
        } else {
        var searchCompare = RegExp(searchTarget);
        var listTarget = "";
        var searchHit = 0;
        var hitList = [];
        for (x = 0; x <= maxIndex; x++) {
            listTarget = studentList[x].textContent;
            if (searchCompare.test(listTarget) == true) {
                hitList[searchHit] = x;
                searchHit = searchHit + 1;

            }

        }
        hideStudents(0, maxIndex, studentList)
        console.log(hitList);
        console.log(hitList.length);
        var limit = hitList.length - 1;
        for (y = 0; y <= limit; y++) {
            studentList[hitList[y]].style.display = "block";
        }
    }
    });
};



//main program logic

if (numOfstudents > 10) {
    addPagination();
    hideStudents(10, maxIndex, studentList);
    addSearchWidget();
}
