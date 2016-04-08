import React from 'react';

export default function Link({
  text,
  href,
}) {
  return (
    <a href={href}>{text}</a>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Link.propTypes = {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  };
}
