import  styles from "../styles/Eom.module.css";
import { Toolbar } from "../components/Toolbar";



export const Eom = ({employee}) => {

  return <div>
      <div className="page-container">
        <Toolbar/>
        <div className={styles.main}>
            <h1>Employee Of The Month</h1>
            <div className={styles.eom}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image} alt="pp" />
                <h3>{employee.description}</h3>
            </div>
        </div>
      </div>
  </div>;
};

export const getServerSideProps = async pageContext => {
    const res = await fetch(
        'https:my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    );

    const data = await res.json();
    console.log(data);

    return {
        props: {
            employee : data
        }
    }
};

export default Eom;
