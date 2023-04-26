//   fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json())
// .then(result=>{
//   console.log(result)
// }).catch(error=>{
//   console.log(error)
// })



  const getTodos = async () => {
    try {
      console.log(1);
  
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 4000);
      })
  
      console.log(2)
  
       new Promise((resolve) => {
        setTimeout(() => resolve(), 9000);
      })
  
      console.log(3)
  
    } catch (err) {
      console.log(err);
    }
  };
  
  getTodos();
  console.log("hello");