import Sidebar from '../components/sidebar';

const styles = {
  conntainer: `h-full w-full flex bg-[#fff]`
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      // <Main />
    </div>
  )
}
