import styles from './page.module.css'
import { CustomJobStepperSection } from '@/public/calendar-card/calendar-card'

export default function Home() {
  return (
    <main className={styles.main}>
     <CustomJobStepperSection />
    </main>
  )
}
