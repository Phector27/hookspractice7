import Header from './components/Header'
import Form from './components/Form'
import ListNews from './components/ListNews'
import { useState, useEffect } from 'react'

function App() {

  // Definit categoría y noticias
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])


  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7a7fc24a0f3b4713846d26b074098b07`
    
      const response = await fetch(url)
      const news = await response.json()

      setNews(news.articles)
    }

    consultAPI()
  }, [category])

  return (
    <>
      <Header
        title='Actualidad en EEUU'
      />
      <div className='container white'>
        <Form 
          setCategory={setCategory}
        />
        <ListNews
          news={news}
          />
      </div>
    </>
  );
}

export default App;
