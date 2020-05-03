import React, { Fragment} from "react";
const JumboFooter = () => {
  return (
    <Fragment>
      <div class="jumbo-footer">
        <a href="mailto: companymail@gmail.com">
          <i class="fas fa-envelope-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.facebook.com">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.twitter.com">
          <i class="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="tel:+353834562685">
          <i class="fas fa-phone-square fa-2x"></i>
        </a>
      </div>
    </Fragment>
  );
};
export default JumboFooter;
