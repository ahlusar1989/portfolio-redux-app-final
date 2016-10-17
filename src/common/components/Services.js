import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Prototypes/MVPs</h3>

      	  	<p>I can build you a prototype or a minimal viable product (MVP)for your idea. 
      	  	</p> 

      	  	<p>The code I deliver will be the best possible foundations from which your application and idea can grow.</p>

	      	<h3>Training/Teaching</h3>

	      	<p>I have experience teaching both beginners and educators</p>

	      </div>

	      <div className="services">

      	  	<h3>Enterprise Applications</h3>

      	  	<p>I seek to continue to build and test production-ready web applications.
      	  	</p> 

      	  	<p>Most importantly, I seek to work to continue to devlelop my acumen in deploying scalable, secure and maintainable.</p>

	      </div>

      </div>
    );
  }
}

export default Services;