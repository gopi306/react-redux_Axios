import React, { Fragment } from "react";

import '../App.css'

const Form = () => {
  return (
    <Fragment>
    <div className=" input-container">
      <form className="form-box">
        <div>
        <label htmlFor="title"></label>
          <input type="text" id="title" autoComplete="off" name="title" placeholder=" Add Title" />
        </div>

        <div>
        <label htmlFor="body"></label>
          <input type="text" id="body" name="body" placeholder="Add pst"/>
        </div>
      <button type="submit" >Add</button>
      </form>
      </div>
    </Fragment>
  );
};

export default Form;
