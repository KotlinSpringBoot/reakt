import {render} from 'react-dom';
import {Component} from 'refast';
import logic from './logic';
import './PageArticleList.less';
import Navbar from "../../components/navbar/Navbar";

class PageArticleList extends Component {

  constructor(props) {
    super(props, logic);
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="page-article_list">
          page article_list
        </div>
      </div>
    );
  }
}

render(<PageArticleList/>, document.getElementById('App'));
