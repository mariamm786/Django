
  //GET SEARCH FORM AND LINKS
searchForm = document.getElementById('searchForm')
pageLinks=  document.getElementsByClassName('page-link')


//ENSURE SEARCH FORM EXISTS 
console.log('new message')
if(searchForm){
  for ( i=0; pageLinks.length > i; i++ ){
    pageLinks[i].addEventListener('click',function (e)  {
      e.preventDeafult()
            console.log('Button click')
          })
        }
      
      }


      //ADD HIDDEN SEARCH INPUT TO FORM
  
  