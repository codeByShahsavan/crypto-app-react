import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>crypto app</h1>

    </header>
    {children}
    <footer className={styles.footer}>
        <p>develop by shahsavan</p>
    </footer>
    </>
  )
}

export default Layout