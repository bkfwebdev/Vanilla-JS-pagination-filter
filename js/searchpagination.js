var addSearchPageButtons = function() {
	var searchPages = Math.floor(hitList.length / 10)
    var searchPaginationDiv = document.createElement("div");
    SearchPaginationDiv.setAttribute("class", "pagination");
    SearchPaginationDiv.setAttribute("id","searchpagination");
    var searchPageNumbers = document.createElement("ul");
    thePage[0].appendChild(searchPaginationDiv);
    paginationDiv.appendChild(pageNumbers);
    for (var i = 1; i <= searchPages ; i++) {
        var pgNumButtonLabel = i.toString();
        var pgNumButton = document.createElement("li");
        pgNumButton.innerHTML = "<a>" + numButtonLabel + "</a>";
        searchPageNumbers.appendChild(numButton);
        upDateSearchPagination(numButton, numButtonLabel);
    }
    if (lastPageSearch !== 0){
	addLastSearchPage(searchPageNumbers);
    }
        
};
var addLastSearchPage = function (searchPageNumbers,lastSearchPageNum){
		var lastSearchPageLink = document.createElement("li");
        lastSearchPageLink.innerHTML = "<a>" + lastSearchPageNumPage + "</a>";
        pageNumbers.appendChild(lastSearchPageLink); 
        lastPageLink.addEventListener("click", function() {
            hidePage(currentPage,studentList);
            showPage(lastPage,studentList);
            currentPage = lastPage;
        });
    };