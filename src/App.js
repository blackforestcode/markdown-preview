import React, { Component } from "react";
import Textarea from "./components/Textarea";
import Footer from "./components/Footer";
import marked from "marked";
import DOMPurify from "dompurify";

const mdplaceholder = `
# This is a h1...

## ...and this a h2 header

A link: https://www.freecodecamp.org/

\`Inline Code\`

\`\`\`
function sum(a, b) {
  return a + b;
}
\`\`\`

This is a
 > Block Quote

* A list item

An image:\n![Random Image](https://picsum.photos/200/300)

**Bold Text**
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: mdplaceholder
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleMarkdown = element => {
    let markdown = marked(element, {
      sanitize: true,
      breaks: true
    });
    return {
      __html: DOMPurify.sanitize(markdown)
    };
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{ background: "#6699ff", color: "#ffffff" }}
      >
        <div className="row my-5">
          <div className="col">
            <h1>FCC Markdown Preview</h1>
            <p className="">
              Stack:{" "}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="badge badge-light">React</span>
              </a>{" "}
              <a
                href="https://marked.js.org/#/README.md#README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="badge badge-light">Marked.js</span>
              </a>{" "}
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="badge badge-light">Bootstrap 4</span>
              </a>
            </p>
          </div>
        </div>
        <div className="row" id="content">
          <div className="col border-right">
            <Textarea
              value={this.state.mdplaceholder}
              onChange={this.handleChange}
              onSubmit={this.onSubmit}
              defaultValue={mdplaceholder}
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h2 className="text-muted">Preview:</h2>
                <hr />
                <span
                  id="preview"
                  dangerouslySetInnerHTML={this.handleMarkdown(
                    this.state.input
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
