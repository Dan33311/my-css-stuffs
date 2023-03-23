import styles from '@/styles/Home.module.css'

export default function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <h1 className={styles.title}>My CSS Animations</h1>

        <div className={styles.animation_container}>
          <div className={styles.box}>
            <span className={`${styles.span} ${styles.image_1} ${styles.animado2}`}></span>
          </div>
        </div>

      </div>
    </>
  )
} 