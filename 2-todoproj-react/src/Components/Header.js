import React from 'react';

const Header = ({ deleteAllItem }) => {
  return (
    <div>
      <div class="header">
        <div class="logo">
          <h2 class="logo__title">TODO APP</h2>
        </div>
      </div>

      <div class="description">
        <p class="sub_header__desc">Todo List with <span>react</span>.</p>
        <span><button class="btn btn-danger" type="button" onClick={deleteAllItem} id="button-deleteAll">Delete All</button> </span>


      </div>

    </div>
  );
};
export default Header;