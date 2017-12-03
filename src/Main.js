import React, { Component } from "react";
import ReduxForm from "./ReduxForm";


class Main extends Component {
      render() {
        return (
  
            <div>
              <h1>Redux form maintains state on Server-side validation</h1>
    <p>
    This is a proof of concept that redux-form maintains it's state (i.e. the data previously entered)
    if it goes the process of submitting data for server-side validation and does receive
    a validation error.    
    see:
    <ul><li>example: https://redux-form.com/7.1.2/examples/submitvalidation/</li>
    <li>useful starter: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm</li></ul>
    </p>

    <ReduxForm />
            </div>

        );
      }
    }
     export default Main;