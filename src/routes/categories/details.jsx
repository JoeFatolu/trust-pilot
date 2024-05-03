import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { chevronRight, star, globeIcon, emailIcon, phoneIcon, chevronDown } from "assets";
import { FilterTab, Search, Dropdown, ReviewBadge } from "components";
import { allReviews } from "utils";
import styles from "./categories.module.css";
import { useQuery } from "@tanstack/react-query";
import { useCompanies } from "api";

const stars = [
  {
    id: 1,
    value: star,
  },
  {
    id: 2,
    value: star,
  },
  {
    id: 3,
    value: star,
  },
  {
    id: 4,
    value: star,
  },
  {
    id: 5,
    value: star,
  },
];

const CategoriesDetails = () => {
  const { details } = useParams();
  const { data, isLoading } = useCompanies(details);
  const [currentTab, setCurrentTab] = useState("any");
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tabViews = {
    any: <AllResults data={data} />,
    three: "three plus tab",
    four: "four plus tab",
    fourandhalf: "fourandhalf plus tab",
  };

  return (
    <div className={styles.container}>
      <div className={styles.topitem}>
        <div className={styles.links}>
          <Link to="/" className={styles.linknav}>
            <p>Home</p>
            <span className={styles.chevroncontainer}>{chevronRight}</span>
          </Link>
          <Link to="/categories" className={styles.linknav}>
            <p>Categories</p>
            <span className={styles.chevroncontainer}>{chevronRight}</span>
          </Link>
          <span className={styles.linknav}>
            <p>{details}</p>
          </span>
        </div>

        <div className={styles.category}>
          <p className={styles.bestincategory}>Best in {details}</p>
          <p className={styles.bestincategorydesc}>Compare the best companies in this category </p>
        </div>
      </div>

      <div className={styles.categoryContent}>
        <div className={styles.categoryfilter}>
          <div className={styles.filters}>
            <div className={styles.topfilter}>
              <div className={styles.topfilterwrapper}>
                <p className={styles.filterheading}>Rating</p>
                <div className={styles.filtersbystars}>
                  <FilterTab currentTab={currentTab} onTabCLick={handleTabClick} />
                </div>
                <p className={styles.filterheading}>Location</p>
                <input type="text" className={styles.countryofchoice} />
                <Search placeholder="City or ZIP Code" />
                <p className={styles.filterheading}>Company Status</p>
                <div className={styles.filterbyStatus}>
                  <div className={styles.statusfilter}>
                    <p className={styles.statustext}>Claimed Company</p>
                    <input type="checkbox" name="" id="" className={styles.statuscheckbox} />
                  </div>
                  <span className={styles.statusfilterseparator}></span>
                  <div className={styles.statusfilter}>
                    <p className={styles.statustext}>Product Page</p>
                    <input type="checkbox" name="" id="" className={styles.statuscheckbox} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottomfilter}>
              <div className={styles.bottomfilterwrapper}>
                <div className={styles.bottomfilterheadings}>
                  <p>Related Categories</p>
                  <p>Show all</p>
                </div>
                <div className={styles.bottomItems}>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>ATM</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Cash back Provider</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Central Bank</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Check Cashing Service</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Cryptocurrency Service </p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Currency Exchange Service</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Escrow Service</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Federal Reserve Ban</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Financial Institution</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                  <div className={styles.bottomItem}>
                    <p className={styles.bottomItemleft}>Mobile Money Agent</p>
                    <p className={styles.bottomItemright}>{203}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filterContent_pagination}>
          <div className={styles.filterContent}>{tabViews[currentTab]}</div>
          <div className={styles.pagination}></div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetails;

const AllResults = ({ data }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <div className={styles.allResultsmaincontainer}>
        <div className={styles.sort}>
          <span className={styles.sortResult}>{`1 - ${data.length} of ${data.length} results`}</span>
          <div className={styles.sortOrder}>
            <Dropdown />
          </div>
        </div>
        <div className={styles.explore}>Explore a diverse range of user-generated reviews</div>
        {data.map((item) => (
          <div className={styles.listing}>
            <div className={styles.toplisting}>
              <div className={styles.toplistingItems}>
                <div className={styles.toplistingleftItem}>
                  <span className={styles.toplistingImageholder}></span>
                  <span className={styles.toplistinglogo}>{"LOGO"}</span>
                </div>
                <div className={styles.toplistingrightItem}>
                  <p className={styles.listingName}>{item.title}</p>
                  <div className={styles.listingstars}>
                    <div className={styles.stars}>
                      {stars.map(({ id, value }) => (
                        <div key={id} className={styles.star}>
                          {value}
                        </div>
                      ))}
                    </div>
                    <div className={styles.listingscorewrapper}>
                      <p className={styles.listingscore}>TrustScore {4.5}</p>
                      <p className={styles.listingreviews}>{item.reviews} reviews</p>
                    </div>
                  </div>
                  <span className={styles.listingareaname_country}>
                    <p>{`${"Lagos"},`}</p>
                    <p>{" Nigeria"}</p>
                  </span>
                </div>
              </div>
              <span className={styles.listingborder}></span>
            </div>
            <div className={styles.bottomlistingitems}>
              <div className={styles.bottomlistingitemsleft}>
                <div className={styles.bottomIcons}>
                  <span className={styles.bottomIconbox}>{globeIcon}</span>
                  <span className={styles.bottomIconbox}>{emailIcon}</span>
                  <span className={styles.bottomIconbox}>{phoneIcon}</span>
                </div>
                <p className={styles.subcategories}>Category . Sub-categories</p>
              </div>
              <div className={styles.listingmodal} onClick={toggleModal}>
                <p>Latest Reviews</p>
                <span className={styles.listingIconbox}>{chevronDown}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal ? (
        <div className={styles.modalContainer}>
          {/* <div>I am the modal container</div> */}
          {allReviews.map(({ id, ...rest }) => (
            <ReviewBadge
              key={id}
              reviewLocation={rest.location}
              dateAndTime={rest.dateAndTime}
              userImage={rest.image}
              username={rest.username}
              reviewtext={rest.reviewtext}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
