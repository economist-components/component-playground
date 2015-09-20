import React from 'react';

export default class Link extends React.Component {

  static get propTypes() {
    return {
      href: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    };
  }

  static get schema() {
    return {
      schema: {
        type: 'object',
        title: 'Link',
        properties: {
          text: {
            type: 'string',
          },
          href: {
            type: 'string',
          },
        },
      },
    };
  }

  render() {
    return (
      <a href={this.props.href}>{this.props.text}</a>
    );
  }
}
