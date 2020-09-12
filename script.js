
const element = document.createElement('div'),
      parent = document.querySelector('.parent'),
      url = 'https://api.chucknorris.io/jokes/random';


class ChuckNoris  {
    constructor(icon, id, value) {
        this.icon = icon;
        this.id = id;
        this.value = value;
    }

    render() {

        element.innerHTML = `
            <div class="id">${this.id}</div>
            <img src="${this.icon}" alt="chuck">
            <div class="value">${this.value}</div>
        `;

        parent.append(element);

    }
}



fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    new ChuckNoris(data['icon_url'], data.id, data.value).render();
  });




