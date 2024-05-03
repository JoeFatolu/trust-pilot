// import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useLocation } from "react-router-dom";
import {
  arrowRight,
  chevronRight,
  companyImage,
  curvedArrow,
  emailIcon,
  facebookIcon,
  flagIcon,
  linkedinIcon,
  locationIcon,
  mapIcon,
  phoneIcon,
  reviewStar,
  screen,
  shareIcon,
  star,
  thumb,
  xIcon,
} from "assets";
import { Badge, CompanyImage, FilterRange, ContactIcon, Pagination } from "components";
import styles from "./namedcompany.module.scss";

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

const reviewStars = [
  {
    id: 1,
    value: reviewStar,
  },
  {
    id: 2,
    value: reviewStar,
  },
  {
    id: 3,
    value: reviewStar,
  },
  {
    id: 4,
    value: reviewStar,
  },
  {
    id: 5,
    value: reviewStar,
  },
];

const filterControl = [
  {
    id: 1,
    filteredNumber: 488,
    label: "5 stars",
    range: 90,
  },
  {
    id: 2,
    filteredNumber: 74,
    label: "4 stars",
    range: 15,
  },
  {
    id: 3,
    filteredNumber: 14,
    label: "3 stars",
    range: 10,
  },
  {
    id: 4,
    filteredNumber: 0,
    label: "2 stars",
    range: 0,
  },
  {
    id: 5,
    filteredNumber: 0,
    label: "1 star",
    range: 0,
  },
];

const contactItems = [
  {
    id: 1,
    icon: emailIcon,
    label: "marketing@dugood.org",
  },
  {
    id: 2,
    icon: phoneIcon,
    label: "(409) 899-3430",
  },
  {
    id: 3,
    icon: mapIcon,
    label: "7505 Eastex Frwy 77708 Beaumont United States",
  },
];

const badges = [
  {
    id: 1,
    title: "Artificial Intelligence",
    backgroundColor: "#EFF8FF",
    badgeColor: "#175CD3",
  },
  {
    id: 2,
    title: "Engineering",
    backgroundColor: "#F4F3FF",
    badgeColor: "#5925DC",
  },
  {
    id: 3,
    title: "+1 more",
    backgroundColor: "#FFF6ED",
    badgeColor: "#C4320A",
  },
];

const pagination = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
  },
  {
    id: 6,
    value: 6,
  },
];

const CompanyName = () => {
  const { companyName } = useParams();
  const { state } = useLocation();
  const data = state.data;
  const isLoading = state.isLoading;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="/" className={styles.linknav}>
          <p>Home</p>
          <span className={styles.chevroncontainer}>{chevronRight}</span>
        </Link>
        <Link to="/company" className={styles.linknav}>
          <p>Company</p>
          <span className={styles.chevroncontainer}>{chevronRight}</span>
        </Link>
        <span className={styles.linknav}>
          <p>{data.company.title}</p>
        </span>
      </div>

      <div className={styles.contents}>
        <div className={styles.companyDetails}>
          <div className={styles.overview}>
            <div className={styles.overviewleft}>
              <>
                <CompanyImage
                  className={styles.companyImage}
                  icon={companyImage}
                  backgroundColor="#F8F7F4"
                  companyName={companyName}
                />
              </>
              <div className={styles.companyName_ratings}>
                <div>
                  <p className={styles.companyName}>{companyName}</p>
                </div>
                <div className={styles.ratings}>
                  <div className={styles.rating}>
                    <p className={styles.ratingtext}>{data.company.ratings}</p>
                  </div>
                  <div className={styles.stars}>
                    {stars.map(({ id, value }) => (
                      <div key={id} className={styles.star}>
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.reviews}>
                  <div className={styles.review}>
                    <p className={styles.reviewtext}>{"Excellent"}</p>
                  </div>
                  <div>
                    <p className={styles.numberOfReviews}>
                      {data.company.reviews === 0
                        ? `(${data.company.reviews} Review)`
                        : `(${data.company.reviews} Reviews)`}
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={styles.overviewright}>
              <p className={styles.companyUrl}>{data.company.domain}</p>
              <span className={styles.svgwrapper}>{arrowRight}</span>
            </div>
          </div>
          <div className={styles.fulldetails}>
            <div className={styles.aboutCompanyContainer}>
              <div className={styles.about_review}>
                <div className={styles.about_review_wrapper}>
                  <div className={styles.abouttextwrapper}>
                    <p className={styles.abouttextheading}>About the Company</p>
                    <p className={styles.abouttextdescription}>{data.company.description}</p>
                  </div>
                  <div className={styles.voidInReview}></div>
                </div>
                <div className={styles.review_ratings_container}>
                  <div className={styles.textarealeft}>
                    <span className={styles.userAbbr}>{"AK"}</span>
                    <p className={styles.write_review}>Write Review</p>
                  </div>
                  <div className={styles.textarearight}>
                    {stars.map(({ id, value }) => (
                      <div key={id} className={styles.star}>
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* filter and review */}
              <div className={styles.reviewOverview}>
                <div className={styles.reviewfilter}>
                  <div className={styles.reviewfilterleft}>
                    <p className={styles.reviewfilterleftreview}>Reviews</p>
                    <p className={styles.reviewNumber}>{data.company.ratings}</p>
                    <div className={styles.reviewstarcontainer}>
                      {reviewStars.map(({ id, value }) => (
                        <span key={id}>{value}</span>
                      ))}
                    </div>
                    <p className={styles.numberOfReviews}>
                      {data.company.reviews === 0
                        ? `(${data.company.reviews} Review)`
                        : `(${data.company.reviews} Reviews)`}
                    </p>
                  </div>
                  <div className={styles.reviewfilterright}>
                    <div className={styles.reviewcheckbox}>
                      {filterControl.map(({ id, filteredNumber, label, range }) => (
                        <FilterRange key={id} filteredNumber={filteredNumber} label={label} width={range} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.filteredReviews}>
                  <div className={styles.filteredReviewsContainer}>
                    <div className={styles.filteredReviewsContainertop}>
                      <div className={styles.filteredReviewsContainertopleft}>
                        <div>
                          <span className={styles.userAbbr}>{"AK"}</span>
                        </div>
                        <div>
                          <div>
                            <p className={styles.username}>{"Alex K."}</p>
                          </div>
                          <div className={styles.review_location}>
                            <span className={styles.userreview}>
                              {data.company.reviews === 0
                                ? `(${data.company.reviews} Review)`
                                : `(${data.company.reviews} Reviews)`}
                            </span>
                            <span className={styles.location_icon}>
                              <span>{locationIcon}</span>
                              <span className={styles.userlocation}>{"Lagos"}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.filteredReviewsContainertopright}>
                        <p className={styles.revieweddate}>Jan 20, 2024</p>
                      </div>
                    </div>
                    <div className={styles.filteredReviewsContainermiddle}>
                      <div className={styles.stars}>
                        {stars.map(({ id, value }) => (
                          <div key={id} className={styles.star}>
                            {value}
                          </div>
                        ))}
                      </div>
                      <p className={styles.review_topic}>
                        {"FIrst time in my life of patronizing their service"}
                      </p>
                      <p className={styles.review_description}>
                        {`Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.`}
                      </p>
                      <div>
                        <p className={styles.dateofexperience}>
                          Date of experience :{" "}
                          <span className={styles.dateofexperiencedate}>
                            <span className={styles.revieweddate}>{`Jan 20, 2024`}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.filteredReviewsContainerbottom}>
                      <div className={styles.reviewActions}>
                        <div className={styles.reviewActionsleft}>
                          <div className={styles.reviewActionsleftchild}>
                            <span className={styles.svgwrapper}>{thumb}</span>
                            <p className={styles.userlocation}>Useful</p>
                          </div>
                          <div className={styles.reviewActionsleftchild}>
                            <span className={styles.svgwrapper}>{shareIcon}</span>
                            <p className={styles.userlocation}>Share</p>
                          </div>
                        </div>
                        <div className={styles.reviewActionsright}>
                          <span className={styles.svgwrapper}>{flagIcon}</span>
                        </div>
                      </div>
                      <div className={styles.reviewReply}>
                        <div className={styles.replybar}></div>
                        <div className={styles.reviewReplywrapper}>
                          <div className={styles.reviewReplywrappertop}>
                            <div className={styles.reviewReplywrappertopleft}>
                              <span className={styles.svgwrapper}>{curvedArrow}</span>
                              <p className={styles.reviewReplywrappertoplefttext}>Reply from 8am AI ltd</p>
                            </div>
                            <div className={styles.reviewReplywrappertopright}>
                              <span className={styles.dateofexperiencedate}>
                                <p className={styles.revieweddate}>{`Jan 20, 2024`}</p>
                              </span>
                            </div>
                          </div>
                          <div className={styles.reviewReplywrapperbottom}>
                            <p className={styles.reviewReplyheading}>{"Front-End Engineer"}</p>
                            <p
                              className={styles.reviewReplydescription}
                            >{`Sam.AI is not just a workplace; it's a community of passionate individuals driven by a common goal of helping others succeed. `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactInformationContainer}>
              <div className={styles.contactInformationContainerwrapper}>
                <p className={styles.contactInformationheading}>Contact Information</p>
                <div className={styles.contactInformation}>
                  {contactItems.map(({ id, icon, label }) => (
                    <ContactIcon key={id} icon={icon} label={label} />
                  ))}

                  <div className={styles.companyStatus}>
                    <p className={styles.companystatus}>Company Status</p>
                    <p className={styles.claimedstatus}>Claimed Profile</p>
                  </div>
                </div>
              </div>
              <div className={styles.socialmedia}>
                <div className={styles.socialmediawrapper}>
                  <div className={styles.companycaption}>
                    <img src={screen} alt="company caption" />
                  </div>
                  <div className={styles.socials_groups}>
                    <div className={styles.socials}>
                      {badges.map(({ id, title, backgroundColor, badgeColor }) => (
                        <Badge
                          className={styles.badge}
                          key={id}
                          backgroundColor={backgroundColor}
                          badgeColor={badgeColor}
                          title={title}
                        />
                      ))}
                    </div>
                    <div className={styles.socialIcons}>
                      <span>{xIcon}</span>
                      <span>{linkedinIcon}</span>
                      <span>{facebookIcon}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.pagination}>
            <Pagination pagination={pagination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyName;
