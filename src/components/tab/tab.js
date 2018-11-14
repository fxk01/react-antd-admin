/*
 tab
 */

import React, { Component } from 'react';
import './tab.less';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

class Tab extends Component {
  constructor() {
    super();
    this.text = 'A dog is a type of domesticated animal.';
  }

  callback(key) {

  }

  render() {
    const list = this.props.aboutListItem;
    return (
      <div className="tab">
        {list.length > 0 ? list[0].date : 1}
        <Collapse defaultActiveKey={['1']} onChange={this.callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{this.text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{this.text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{this.text}</p>
          </Panel>
        </Collapse>,
      </div>
    );
  }
}

export default Tab;