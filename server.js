import chalk from 'chalk';
import  app from './index.js';
export default app;
app.listen(5001, () => {
    console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
  });
  