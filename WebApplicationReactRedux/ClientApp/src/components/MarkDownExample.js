import React from 'react';
import marked from 'marked';

class MarkdownExample extends React.Component {
    getMarkdownText() {
        var rawMarkup = marked(this.props.markdownValue, { sanitize: true });
        return { __html: rawMarkup };
    }
    render() {
        return (<div dangerouslySetInnerHTML={this.getMarkdownText()} />);
    }
}

export default MarkdownExample;