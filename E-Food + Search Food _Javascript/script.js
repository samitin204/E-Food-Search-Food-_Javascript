
$("#clickhere").click(function(){
    
    $("#myModal").hide();
    
})




const contain = document.getElementById('container');
const cardcol = document.getElementById('colcard');
const butn = document.getElementById('check');
// let ipVal = document.getElementById("myInput").value;
//let ipVal2 = document.querySelector("#myInput").value;

const search = document.getElementById('myInput');

//console.log(contain);
//console.log(ipVal);
//console.log(ipVal2);

function searchMeal(e) {
//async function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
//  single_mealEl.innerHTML = '';

  // Get search term
  const term = search.value;	  
	console.log(term);  
	  
let showCoffees = "";

if (term.trim()) {
//await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)	
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
//        contain.innerHTML = `<h2>Search results for '${term}':</h2>`;		
		
	console.log(data.meals);
	
	const mealsArray = data.meals;
//	console.log(mealsArray.length);

        if ( mealsArray != null) {
//          contain.innerHTML = `<p>There are no search results. Try again!<p>`;
//        } else{
			console.log("1");
//			contain.innerHTML = data.meals
			
//				 showCoffees = () => {					
					
				  let output = "";
				  
//				  console.log(mealsArray.length);
				  
				  mealsArray.forEach(
					({strMeal, strMealThumb}) =>
					  (output += `	
								<div class="card-column">
									  <div class="card">
										<img class="card-img-top" src=${strMealThumb} alt="Card image">

										<div class="card-body">
										  <h5 class="card-title">${strMeal}</h5>
											<p class="card-text small"><span class="fa fa-star"></span>
														<span class="fa fa-star"></span>
														<span class="fa fa-star"></span>
														<span class="fa fa-star"></span>
														<span class="fa fa-star-o checked"></span>
													</p>
											<p class="card-text small">Average 4.5 / 5</p>
											<a class="card-link btn btn-success" href="#">Order It</a>
										</div>

										


									  </div>
								</div>
								
							  			`)
				  )
//				  contain.innerHTML = output
			
			cardcol.innerHTML = output;
			console.log("2");		
					
//				}
				
		} else{
			cardcol.innerHTML = `<p>There are no search results. Try again!<p>`;			
		}
				
}); // Clear search text    
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
	console.log("3");
}	


butn.addEventListener('click',searchMeal);




