import './App.scss';
import ToastAnimated, { showToast } from './components/Toast';


const App = () => {
  const handleClick = () => {
    showToast({ type: 'newAchiev', message: achievementToastMessage })
  }

  const achievementToastMessage = () => {
    return (
      <div className="achievementContainer">
        <img className="achievementImage" src="/achievementIcon.png" alt="" height={80} width={80} />
        <div className="achievementText">
          <div className="achievementTitle">Conquista desbloqueada</div>
          <div className="achievementDescription">Parabéns você desbloqueou a conquista: Herói na luta contra COVID-19!</div>
        </div>

      </div>
    )
  }

  return (
    <div className="App">
          <header className="App-header">
            <ToastAnimated></ToastAnimated>
            <button onClick={handleClick}> Clique aqui</button>
          </header>
        </div>
  );
}

export default App;
