import React from "react";
import List from "./_menu-list";
import List2 from "./_menu-list2";
import MobileMenu from "./_mobile-menu";
import Others from "./_others";

const CenterNav = ({ setNavbar, setJumbo, setOption, bodyRef }) => {
  const select = async (option) => {
    setOption(option);
    window.scrollTo(0, bodyRef.current.offsetTop);
  };
  return (
    <nav class="navbar-centered">
      <div class="layout">
        <div class="left">
          <div className="items">
            <div class="item">
              <ul class="dropdown-ul">
                <li class="hide-sm">
                  <p class="hide-sm">
                    <div class="hide-sm">
                      Navbars <i class="fas fa-sort-down"></i>
                    </div>
                  </p>
                  <div class="underline"></div>
                </li>
                <div class="down">
                  <li class="hide-sm">
                    <p class="hide-sm">
                      <div class="hide-sm">
                        Navbars <i class="fas fa-sort-down"></i>
                      </div>
                    </p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setNavbar("simple")}>Simple</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setNavbar("hover")}>Hover</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setNavbar("centered")}>Centered</p>
                    <div class="underline"></div>
                  </li>
                </div>
              </ul>
            </div>
            <div class="item">
              <ul class="dropdown-ul">
                <li class="hide-sm">
                  <p class="hide-sm">
                    <div class="hide-sm">
                      Jumbos <i class="fas fa-sort-down"></i>
                    </div>
                  </p>
                  <div class="underline"></div>
                </li>
                <div class="down">
                  <li class="hide-sm">
                    <p class="hide-sm">
                      <div class="hide-sm">
                        Jumbos <i class="fas fa-sort-down"></i>
                      </div>
                    </p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setJumbo("simple")}>Simple</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setJumbo("big-deg")}>Big Degraded</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setJumbo("img-nobg")}>IMG no bg</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setJumbo("img")}>IMG</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => setJumbo("login")}>Login</p>
                    <div class="underline"></div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="center">
          <i class="fas fa-code fa-2x hide-sm"></i>
          <h1 class="hide-sm">Website</h1>
        </div>
        <div class="right">
          <ul>
            <li class="hov">
              <ul class="dropdown-ul">
                <li class="hide-sm">
                  <p>
                    <div class="hide-sm">
                      Others <i class="fas fa-sort-down"></i>
                    </div>
                  </p>
                  <div class="underline"></div>
                </li>
                <div class="down">
                  <li>
                    <p>
                      Others <i class="fas fa-sort-down"></i>
                    </p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("buttons")}>Buttons</p>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <a onClick={() => select("carousels")}>Carousels</a>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <a onClick={() => select("charts")}>Charts</a>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <a onClick={() => select("dialogues")}>Dialogues</a>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("images")}>Images</p>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("search-boxes")}>Search Boxes</p>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("tables")}>Tables</p>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <a onClick={() => select("tooltips")}>ToolTips</a>
                    <div className="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("videos")}>Videos</p>
                    <div className="underline"></div>
                  </li>
                </div>
              </ul>
            </li>

            <li class="hov">
              <ul class="dropdown-ul">
                <li class="hide-sm">
                  <p>
                    <div class="hide-sm">
                      Cards <i class="fas fa-sort-down"></i>
                    </div>
                  </p>
                  <div class="underline"></div>
                </li>
                <div class="down">
                  <li>
                    <p href="login.html">
                      Cards <i class="fas fa-sort-down"></i>
                    </p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("cards")}>Small Cards</p>
                    <div class="underline"></div>
                  </li>
                  <li>
                    <p onClick={() => select("big-cards")}>Big Cards</p>
                    <div class="underline"></div>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="show-sm">
        <div class="layout-mob">
          <div class="center">
            <i class="fas fa-code fa-2x"></i>
            <h1>Website</h1>
            <p>Since 1987</p>
          </div>
          <ul className="main-ul">
            <MobileMenu
              setOption={setOption}
              setNavbar={setNavbar}
              setJumbo={setJumbo}
              bodyRef={bodyRef}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default CenterNav;
