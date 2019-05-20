const fetchData = async() => {
  try {
    const response = await fetch('https://swapi.co/api/people/');
    const data = await response.json();
    const names = data.results.map( item => item.name);

    const html = names.map( name => `<li>${name}</li>`).join('');
    const list = document.querySelector('ul');
    list.innerHTML = html;


  }
  catch (err){
    console.log(err);
  }
}
fetchData();
