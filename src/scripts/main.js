'use strict';

document.querySelector('.nav__toggler')
  .addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav--open');
  });
