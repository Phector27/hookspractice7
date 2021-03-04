import Noticia from './New'
import PropTypes from 'prop-types'


const ListNews = ({ news }) => (

    <div className='row'>
        {news.map(noticia => (
            <Noticia
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
);

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;