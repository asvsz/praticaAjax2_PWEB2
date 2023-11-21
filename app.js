const getProfile = () => {
  const username = document.getElementById('searchInput').value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(resposta => resposta.json())
    .then(profile => {
      console.log(profile);

      const login = document.getElementById('sub-name');
      const name = document.getElementById('name');
      const repositorio = document.getElementById('repositorio');
      const following = document.getElementById('following');
      const followers = document.getElementById('followers');
      const imagem = document.getElementById('imagem');
      const bio = document.getElementById('bio');
      const github = document.getElementById('github');
      const twitter = document.getElementById('twitter');

      login.textContent = `@ ${profile.login}`;
      name.textContent = profile.name;
      repositorio.textContent = profile.public_repos;
      following.textContent = profile.following;
      followers.textContent = profile.followers;
      imagem.style.backgroundImage = `url(${profile.avatar_url})`;
      bio.textContent = profile.bio;
      github.href = `https://github.com/${profile.login}`;
      twitter.href = `https://twitter.com/${profile.twitter_username}`;
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
};

// Adicione um evento de clique ao botão de busca
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', getProfile);
