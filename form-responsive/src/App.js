import './App.css';
import styles from "./Styles.module.css"
import shopping from "../src/img/undraw_shopping_re_hdd9.svg"

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.form_image}>
        <img src={shopping} alt="Shopping"/>
      </div>
      <div className={styles.form}>
        <form>
          <div className={styles.form_header}>
            <h1>Cadastre-se</h1>
          </div>
          <div className={styles.login_button}>
            <button><a href="/">Entrar</a></button>
          </div>

          <div className={styles.input_group}>
            <div className={styles.input_box}>
              <label>Primeiro Nome</label>
              <input id='firstName' type="text" name="firstName" placeholder='Digite seu primeiro nome' required />
            </div>

            <div className={styles.input_box}>
              <label>Sobrenome</label>
              <input id='lastName' type="text" name="lastName" placeholder='Digite seu sobrenome' required />
            </div>

            <div className={styles.input_box}>
              <label>Email</label>
              <input id='email' type="email" name="email" placeholder='Digite seu email' required />
            </div>

            <div className={styles.input_box}>
              <label>Celular</label>
              <input id='number' type="number" name="number" placeholder='(xx) xxxxx-xxxx' required />
            </div>

            <div className={styles.input_box}>
              <label>Senha</label>
              <input id='password' type="password" name="password" placeholder='Digite sua senha' required />
            </div>

            <div className={styles.input_box}>
              <label>Confirme a senha</label>
              <input id='confirmPassword' type="password" name="confirmPassword" placeholder='Confirme sua senha' required />
            </div>
          </div>

          <div className={styles.gender_inputs}>
            <div className={styles.gender_title}>
              <h6>Gênero</h6>
            </div>

            <div className={styles.gender_group}>
              <div className={styles.gender_input}>
                <input id="female" type="radio" name='gender' />
                <label>Feminino</label>
              </div>
              <div className={styles.gender_input}>
                <input id="male" type="radio" name='gender' />
                <label>Masculino</label>
              </div>
              <div className={styles.gender_input}>
                <input id="others" type="radio" name='gender' />
                <label>Outros</label>
              </div>
              <div className={styles.gender_input}>
                <input id="none" type="radio" name='gender' />
                <label>Prefiro não dizer</label>
              </div>
            </div>
          </div>

          <div className={styles.continue_button}>
            <button><a href="/">Continuar</a></button> 
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;