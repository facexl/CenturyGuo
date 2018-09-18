import React from 'react';
import Link from 'gatsby-link';
import './post.less';

export default class Post extends React.Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const { tag } = post.frontmatter;
    const tags = tag ? tag.split(',') : '';
    return (
      <div className="post-container">
        <div className="post-title">
          {post.frontmatter.title}
        </div>
        <div className="extra-info">
          <span className="post-date">
            {post.frontmatter.date} 
          </span>
          <span className="post-tag">
            {
              tags.map(t => (
                <Link to={`/posts/${t}`}>{t}</Link>
              ))
            }
          </span>
        </div>
        <div className="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tag
      }
    }
  }
`;