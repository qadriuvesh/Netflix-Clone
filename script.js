function checkFunc(id){
    if(id.classList.contains('fa-plus')){
        id.classList.remove('fa-plus')
        id.classList.add('fa-xmark')
    }
    else{
        id.classList.add('fa-plus')
        id.classList.remove('fa-xmark')
    }
}