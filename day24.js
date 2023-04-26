

const app_id='8b14ad38'
const app_key='51a9be30be06b248fd95dfea982290c8'
const loadercontainer=document.querySelector('.loader-container')
const recipecontainer=document.querySelector('.results')
const input=document.querySelector('input')
const button=document.querySelector('button')

const generatecard=(image,title,dishType,mealType,dietLabels,totalWeight,url)=>`<div style="width: 400px;" class='bg-white rounded-3xl shadow-xl overflow-hidden'>
<div class='max-w-md '>

 <div style="height: 200px;  width:auto; background-image: url('${image}'); background-position: center; background-size: cover;" class="bg-red-100 w-full h-2/3"></div>
  <div class='p-4 sm:p-6 '>
    <p class='font-bold text-gray-700 text-[19px] leading-7 mb-1'>${title}</p>
    <div class='flex flex-row'>
      <p class='text-[#3C3C4399] text-[13px] mr-2 line-through'>MVR 700</p>
      <p class='text-[13px] font-bold text-[#0FB478]'>MVR 700</p>
    </div>
   <b> <p  style="font-size:medium;" class='text-[#7C7C80]text-gray-100 font-[19px] mt-6'>Description: </p></b>
      <ul>
        <li>Cuisine Type:${dishType}</li>
        <li>Meal Type:${mealType}</li>
        <li>Diet Labels:${dietLabels}</li>
        <li>Total Weight:${totalWeight.toFixed(2)}</li>
        
      </ul>
   

   

      <a target='_blank' href='${url}' class='block mt-5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
          View Recipe
      </a>
   
  </div>
</div>
</div>`;

const showloader=()=>{
loadercontainer.style="display:flex"
}
const hideloader=()=>{
  loadercontainer.style="display:none"
  }


  const GetRecipes=async()=>{
    try{
      showloader()
      const searchString=input.value;
      const response=await fetch(generateEndpoint(searchString))
      console.log(response);
      const data=await response.json()
      console.log(data)
      const recipes=data.hits
     recipecontainer.innerHTML="";
     recipes.forEach((recipe) => {
      const {image,label,dishType,mealType,dietLabels,totalWeight,url}= recipe.recipe
      recipecontainer.innerHTML+=generatecard(image,label,dishType,mealType,dietLabels,totalWeight,url)
      
     });
        
   
    }
    catch (error){
      console.log(error)
    }
    finally{
      hideloader()
      input.value=""
    }
  }
const generateEndpoint=(searchString='')=>`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=8b14ad38&app_key=51a9be30be06b248fd95dfea982290c8`



button.addEventListener('click',GetRecipes)