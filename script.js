const fetchData = async() => {
  try {
    const response = await fetch('https://swapi.co/api/people/?page=1');
    const data = await response.json();
    const names = data.results.map( item => item.name);

    const html = names.map( name => `<li>${name}</li>`).join('');
    const list = document.querySelector('.names');
    list.innerHTML = html;

    const listItem = document.querySelector('ul');

    listItem.addEventListener('click', (event) => {
    const htmlName = event.target.innerHTML;
    let details = '';
    let arr = [];
    for (let i = 0; i < data.results.length; i++){
      if (data.results[i].name === htmlName){
        details = data.results[i];
      }
     Object.entries(details).forEach(([key, value]) => arr.push(`${key}: ${value}`));
     const detailHTML = arr.map( item => `<li>${item}</li>`).join('');
     const detailClass = document.querySelector('.details');
     detailClass.innerHTML = detailHTML;

    }

  })
  }
  catch (err){
    console.log(err);
  }
}
fetchData();
