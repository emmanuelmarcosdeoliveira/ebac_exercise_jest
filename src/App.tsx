import Post from "./components/Post";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://hobbyciencia.com.br/wp-content/uploads/2021/12/a6-min-1-scaled.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
