import React from 'react';
import Link from './link';

export default class Playground extends React.Component {
  constructor() {
    super();
    this.state = { content: {} };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const properties = {};
    for (const prop in Link.propTypes) {
      let type = '';
      if (Link.propTypes[prop] === React.PropTypes.string.isRequired) {
        type = 'string';
      }
      properties[prop] = {
        type,
      };
    }
    const schemaObj = {
      schema: {
        type: 'object',
        title: 'Link',
        properties,
      },
    };
    /* eslint-disable no-undef */
    const editor = new JSONEditor(document.getElementById('json-editor'), schemaObj);
    this.editorVal = editor.getValue();
    const elms = document.querySelectorAll('.form-control input');
    /* eslint-enable no-undef */
    for (let i = 0; i < elms.length; i++) {
      elms[i].onkeyup = this.update;
    }
  }

  update(event) {
    const reg = /root\[(.*)]/;
    this.editorVal[reg.exec(event.target.name)[1]] = event.target.value;
    this.setState({ content: this.editorVal });
  }

  render() {
    const childEl = React.cloneElement(
      this.props.children,
      ...this.state.content
    );
    return (
      <div>
        {childEl}
        <form id="json-editor" />
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  Playground.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  };
}
