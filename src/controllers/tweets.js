class user {
  constructor({ username, avatar}){
    this.username =username;
    this.avatar =avatar;
  }
}
class Tweet {
  constructor({username, tweet, avatar }){
    this.username=username;
    this.tweet=tweet;
    this.avatar=avatar;
  }
}
const usuarios = [];
const tweets = [];
export async function Sign (req, res) {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  usuarios.push(new user({ username, avatar }));

  res.status(200).send('OK deu tudo certo');
};
export async function Tweets (req, res){
    const { tweet, username } = req.body;
  
    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }
  
    const { avatar } = usuarios.find(user => user.username === username);
  
    tweets.push(new Tweet({ username, tweet, avatar }));
  
    res.status(201).send('OK, seu tweet foi criado');
  };
  
  
export async function TweetsUserName (req, res){
    const { username } = req.params;
  
    const tweetsDoUsuario = tweets.filter(t => t.username === username);
  
    res.status(200).send(tweetsDoUsuario);
  };
  
  
export async function TweetsGet (req, res){
    const { page } = req.query;
  
    if (page && page < 1) {
      res.status(400).send('Informe uma página válida!');
      return;
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;
  
    if (tweets.length <= 10) {
      return res.send(reverseTweets());
    }
  
    res.status(200).send([...tweets].reverse().slice(start, end));
  };
  
  function reverseTweets() {
    return [...tweets].reverse();
  }