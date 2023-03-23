import styles from '@/styles/Landing.module.css'

export default function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <h1 className={styles.title}>My CSS Animations</h1>
        
        <div className={styles.container}>
          
          {/* animation-1 on hover */}
          <div className={styles.animation_container}>
            <h3 className={styles.title}>Animation 1</h3>
            <div className={styles.box}>
              <span className={`${styles.span} ${styles.image_1}`}></span>
            </div>
          </div>

          {/* animation 2  */}
          <div className={styles.animation_container}>
            <h3 className={styles.title}>Animation 2 - GLITCH</h3>
            <div className={styles.testb}>
              <img className={`${styles.image_2} ${styles.glitch_animation}`} src="/rl-red.png" alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
} 