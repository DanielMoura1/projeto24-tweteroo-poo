
export async function Sign (req, res) {
    const { username, avatar } = req.body;
  
    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }
  
    usuarios.push({ username, avatar });
  
    res.status(200).send('OK deu tudo certo');
  };