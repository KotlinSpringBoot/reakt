import {Component, LogicRender} from 'refast';
import {render} from 'react-dom';
import SearchWord from 'components/search-word';
import SearchData from 'components/search-data';
import './PageHome.less';
import * as logic from './logic';
import Navbar from "../../components/navbar/Navbar";

export default class PageHome extends Component {

  constructor(props) {
    super(props, logic);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      current: '1',
    };
  }

  handleChange(e) {
    this.dispatch(['updateState', 'search'], {workNo: e.target.value});
  }

  render() {
    const {state: {data, workNo, empty, loading}, handleChange} = this;
    return (
      <div>
        <Navbar/>

        <div className="page-home">
          <input
            className="kuma-input"
            onChange={handleChange}
            placeholder="请输入员工工号"
            value={workNo}
          />
          <SearchWord workNo={workNo}/>
          <LogicRender empty={empty} loading={loading}>
            <SearchData data={data}/>
          </LogicRender>
        </div>
      </div>
    );
  }
}
render(<PageHome/>, document.getElementById('App'));
