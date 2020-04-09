import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <>
      <div className="footer">
        <p>
          <a href="https://hello.chandu.dev" target="_blank">
            Designed & developed by ChandraMouli R{' '}
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
          </a>
        </p>
        <p>
          <a
            href="https://github.com/zcam007/IMDB-Movie-Search"
            target="_blank"
          >
            View code{' '}
          </a>
        </p>
      </div>
    </>
  );
}
