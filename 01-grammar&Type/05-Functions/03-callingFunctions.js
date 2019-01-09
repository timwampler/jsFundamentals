function list() {
    for(var x = 1; x <=10; x++) {
        console.log(x);
    }
    return "Done!";
}



//reference
https://www.google.com/search?q=javascript+calling+function&safe=off&rlz=1C1CHBF_enUS762US762&source=lnms&tbm=vid&sa=X&ved=0ahUKEwju1tDotOHfAhWFz4MKHaXhALgQ_AUIDygC&biw=1366&bih=664



let arr = ["this" , "is" , "cool"];

function ind() {
    for(item of arr){
        console.log(item);
    }
}
ind();