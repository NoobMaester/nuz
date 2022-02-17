import { Toolbar } from "../../components/Toolbar";
import styles from "../../styles/Feed.module.css";

export const getStaticProps = async () => {

    const res = await fetch (`https://newsapi.org/v2/top-headlines?country=us&pageSize=8&page5&apiKey=31cba29823e541ed94756eaf86bae232`);

    const { articles } = await res.json();

    return {
        props: {
            news: articles,
        }
    }
}


const Feed = ({news}) => {
  return (
    <div className={styles.main}>
        <Toolbar/>
        {news.map((value, index) =>(
            <div key={index} className={styles.post}>
                
                <h1 onClick={()=> (window.location.href= value.url)}>{value.title}</h1>
                    
                <p>{value.description}</p>
    
                {!!value.urlToImage && <img src={value.urlToImage} />}
                
            </div>
        ))}
    </div>
  )
}

export default Feed