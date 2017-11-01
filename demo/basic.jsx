
//基本的分页器。
import React from 'react';
import ReactDOM from 'react-dom';
import NoticeBar from '../src';
import WhiteSpace  from '@gag/white-space';
import Icon  from '@gag/icon';

const App = () => (
  <div className="pagination-container" >
    <p className="sub-title">按钮内带文本</p>
    <Pagination total={5} current={1} prevText="上一步" nextText="下一步" />

    <p className="sub-title">带文本和icon</p>
    <Pagination total={5} current={1}
      prevText={<div className="arrow-align"><Icon type="left" />上一步</div>}
      nextText={<div className="arrow-align">下一步<Icon type="right" /></div>}
    />

    <p className="sub-title">隐藏数字</p>
    <Pagination simple total={5} current={1} prevText="上一步" nextText="下一步" />

    <p className="sub-title">只显示数字</p>
    <Pagination mode="number" total={5} current={3} />

    <p className="sub-title">点状</p>
    <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '0.32rem' }} />
  </div>
);


ReactDOM.render(<App />, document.getElementById('sk-root'));
