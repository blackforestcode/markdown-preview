import React from "react";

const Textarea = ({ value, onChange, defaultValue }) => {
  return (
    <form>
      <div className="form-group row">
        <div className="col">
          <h2 className="text-muted">Enter your text:</h2>

          <textarea
            className="form-control"
            id="editor"
            rows="30"
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        </div>
      </div>
    </form>
  );
};

export default Textarea;
