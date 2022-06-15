//  use let for functions
// use var for global 

// important or not icons
const nonImpIcon = 'fas fa-star-half';
const impIcon = "fas fa-star";
var isImportant = false;

// toogles importance of task
function toggleImportant(){
   
    if(isImportant){
        $('#iImportant').removeClass(impIcon).addClass(nonImpIcon);
        isImportant = false;
    } else {
        $('#iImportant').removeClass(nonImpIcon).addClass(impIcon);
        isImportant = true;
    }
}

// create btn , show/hide form 
var isVisible = true; // is true bc form is visible

function toggleForm(){
    if(isVisible){
        $('#form').fadeOut();
        isVisible = false;
    }else {
        $('#form').fadeIn();
        isVisible = true;
    }

}

function init(){

    // load data

    // hook events


    // jQuery get ele by Id // call func
    $('#iImportant').click(toggleImportant);
    $('#btnShowHide').click(toggleForm);
}



// loads html first
window.onload = init;