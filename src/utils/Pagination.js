// next page
function NextPage(array = [], currentPage = 1, itemsPerPage = 10) {
    if (currentPage < (Math.ceil(array.length / itemsPerPage)))
        return currentPage + 1;
    return currentPage;
}


// go to last page
function LastPage(array = [], currentPage = 1, itemsPerPage = 10) {
    return Math.ceil(array.length / itemsPerPage);
}


// previous page
function PrevPage(array = [], currentPage = 1, itemsPerPage = 10) {
    if (currentPage > 1)
        return currentPage - 1;
    return currentPage;
}


// go to first page
function StartPage(array = [], currentPage = 1, itemsPerPage = 10) {
    return 1;
}


// to make pages
function Paginate(array = [], currentPage = 1, itemsPerPage = 10) {
    const last_index = currentPage * itemsPerPage;
    const start_index = last_index - itemsPerPage;
    return array.slice(start_index, last_index);
}

export default { Paginate, NextPage, PrevPage, LastPage, StartPage };