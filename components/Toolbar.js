import styles from "../styles/Toolbar.module.css";
import {useRouter} from 'next/router'


export const Toolbar = () => {
  const router = useRouter();

  return <div className={styles.main}>
    <div onClick={()=> router.push('/')}>Home</div>

    <div onClick={()=> router.push('/feed')}>Feed</div>

    <div onClick={()=> router.push('/Eom')}>EOM</div>

    <div onClick={()=> window.location.href = "https://twitter.com/Aladin_St"}>Twitter</div>
  </div>;
}; 
