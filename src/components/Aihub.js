import React from 'react'

import dimension from '../assets/images/template-gatsby-dimension.jpg'
import forty from '../assets/images/template-gatsby-forty.jpg'
import strata from '../assets/images/template-gatsby-strata.jpg'
import stellar from '../assets/images/template-gatsby-stellar.jpg'
import photon from '../assets/images/template-gatsby-photon.jpg'

const Aihub = props => (
  <section id="requirements">
    <div className="inner">
      <section>
        <form
          name="requirements"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="field half first">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field half first">
            <label htmlFor="student_number">Student Number</label>
            <input type="text" name="student_number" id="student_number" />
          </div>
          <div className="field half">
            <label htmlFor="program">Current year and program</label>
            <input type="text" name="program" id="program" />
          </div>
          <div className="field">
            <label htmlFor="referee">Were you referred? If so, by who?</label>
            <input type="text" name="referee" id="referee" />
          </div>
          <div className="field">
            <label htmlFor="activities">
              Are there specific projects/activities you're interested in
              getting involved with? If so, list them below.
            </label>
            <textarea name="activities" id="activities" rows="4" />
          </div>
          <div className="field">
            <label htmlFor="ai_description">
              In your own words, explain what Artificial Intelligence is.
            </label>
            <textarea name="ai_description" id="ai_description" rows="4" />
          </div>
          <div className="field">
            <label htmlFor="ai_reason">
              Why are you interested in working with the AI/HUB? What are you
              most looking forward to?
            </label>
            <textarea name="ai_reason" id="ai_reason" rows="4" />
          </div>
          <div className="field half first">
            <label htmlFor="resume">Upload your resume below.</label>
            <input type="file" name="resume" id="resume" />
          </div>
          <div className="field half">
            <label htmlFor="schedule">
              Upload a picture of your schedule below.
            </label>
            <input type="file" name="schedule" id="schedule" />
          </div>
          {/*<div className="field half">
            <label htmlFor="business_description">
              Please describe what it is your business does:
            </label>
            <textarea
              name="business_description"
              id="business_description"
              rows="4"
            />
          </div>
          <div className="field">
            <label htmlFor="reason">
              Do you have an existing website already? If so, why are you
              looking to redevelop?
            </label>
            <textarea name="reason" id="reason" rows="4" />
          </div>
          <div className="field">
            <label htmlFor="updated">
              If you do have an existing website, when was the last time you
              updated it?
            </label>
            <textarea name="updated" id="updated" rows="4" />
          </div>
          <div className="field">
            <label htmlFor="best_worst">
              If you do have an existing website, what are the best aspects
              about it? What are the worst aspects?
            </label>
            <textarea name="best_worst" id="best_worst" rows="4" />
          </div>
          <div className="field">
            <label htmlFor="business_competitors">
              Please list at least two competitve websites and relevent URLs.
              Comment on what you like/dislike about them:
            </label>
            <textarea
              name="business_competitors"
              id="business_competitors"
              rows="6"
            />
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div className="field half first">
              <label htmlFor="traffic">
                How much traffic do you currently get to your site? If you do
                not have a site, how much traffic do you expect?
              </label>
              <input type="text" name="traffic" id="traffic" />
            </div>
            <div className="field half">
              <label htmlFor="purchase">
                Can people purchase directly from your site?
              </label>
              <input type="text" name="purchase" id="purchase" />
            </div>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div className="field half first">
              <label htmlFor="pages">
                How many pages of content do you expect the site to require?
                Please list the pages below.
              </label>
              <textarea name="pages" id="pages" rows="6" />
            </div>
            <div className="field half">
              <label htmlFor="budget">
                Please indicate your anticipated budget for the project.
              </label>
              <input type="text" name="budget" id="budget" />
            </div>
          </div>

          <div className="row uniform">
            <div className="12u 12u(small)">
              <label>Site Type</label>
            </div>
            <div className="6u 12u(small)">
              <input
                type="radio"
                id="site-type-one-page"
                name="site-type"
                checked
              />
              <label htmlFor="site-type-one-page">One Page</label>
            </div>
            <div className="6u 12u(small)">
              <input type="radio" id="site-type-multi-page" name="site-type" />
              <label htmlFor="site-type-multi-page">Multi Page</label>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <div className="row uniform">
            <div className="12u 12u(small)">
              <label>
                Which site do you like the most? Your site will be modelled
                after your selection.
              </label>
            </div>
            <div className="6u 12u(small)">
              <input type="radio" id="site-dimension" name="site" checked />
              <label htmlFor="site-dimension">
                Dimension
                <br />
                <a href="http://gatsby-dimension.surge.sh/" target="_blank">
                  <span className="image fit">
                    <img src={dimension} />
                  </span>
                </a>
              </label>
            </div>
            <div className="6u 12u(small)">
              <input type="radio" id="site-forty" name="site" />
              <label htmlFor="site-forty">
                Forty
                <br />
                <a href="http://gatsby-forty.surge.sh/" target="_blank">
                  <span className="image fit">
                    <img src={forty} />
                  </span>
                </a>
              </label>
            </div>
            <div className="6u 12u(small)">
              <input type="radio" id="site-strata" name="site" />
              <label htmlFor="site-strata">
                Strata
                <br />
                <a href="http://gatsby-strata.surge.sh/" target="_blank">
                  <span className="image fit">
                    <img src={strata} />
                  </span>
                </a>
              </label>
            </div>
            <div className="6u 12u(small)">
              <input type="radio" id="site-stellar" name="site" />
              <label htmlFor="site-stellar">
                Stellar
                <br />
                <a href="http://gatsby-stellar.surge.sh/" target="_blank">
                  <span className="image fit">
                    <img src={stellar} />
                  </span>
                </a>
              </label>
            </div>
            <div className="6u 12u(small)">
              <input type="radio" id="site-photon" name="site" />
              <label htmlFor="site-photon">
                Photon
                <br />
                <a href="http://gatsby-photon.surge.sh/" target="_blank">
                  <span className="image fit">
                    <img src={photon} />
                  </span>
                </a>
              </label>
            </div>
</div>*/}

          <div className="row uniform">
            <div
              className="12u"
              style={{
                marginTop: 25,
                borderTop: 'solid 2px #aaa',
                textAlign: 'right',
              }}
            >
              <ul className="actions">
                <li>
                  <input type="submit" value="Submit" className="special" />
                </li>
                {/*<li>
              <input type="reset" value="Clear" />
            </li>*/}
              </ul>
            </div>
          </div>
        </form>
      </section>
    </div>
  </section>
)

export default Aihub
