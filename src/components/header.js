import React from 'react'

const Header = () => {
  return (
    <nav class="nav">
        <div class="menu">
          <i class="material-icons">menu</i>
          <img class="youlogo" src="./assets/youlogo.png" />
        </div>
        <form class="" action="" method="post">
          <div class="searchbar">
          <input type="search" name="search" id="search" placeholder="Search" />
          <div class="search-btn" >
            <i class="material-icons search-icon">search</i>
          </div>
        </div>
        </form>
        {/* </div> */}
        <div class="feature-icons">
          <i class="material-icons">video_call</i>
          <i class="material-icons">apps</i>
          <i class="material-icons">message</i>
          <i class="material-icons">notifications</i>
          <span class="bell-icon-badge">9+</span>
          <i class="material-icons account-icon">account_circle</i>
        </div>
      </nav>
  )
}

export default Header