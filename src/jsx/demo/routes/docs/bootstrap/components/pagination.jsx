import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Pagination'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative."}
            </p>
            <Well className='text-center'>
              <Pagination style={{margin: 0}}>
                <Page begin disabled />
                <Page active href='#'>
                  <span>1</span>
                  <span className='sr-only'>(current)</span>
                </Page>
                <Page href='#'>2</Page>
                <Page href='#'>3</Page>
                <Page href='#'>4</Page>
                <Page href='#'>5</Page>
                <Page end />
              </Pagination>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Pagination>\n"}
                  {"  <Page begin disabled />\n"}
                  {"  <Page active href='#'>2</Page>\n"}
                  {"  <Page href='#'>2</Page>\n"}
                  {"  <Page href='#'>3</Page>\n"}
                  {"  <Page href='#'>4</Page>\n"}
                  {"  <Page href='#'>5</Page>\n"}
                  {"  <Page end />\n"}
                  {"</Pagination>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Sizing</h4>
            <p>
              {"Fancy larger or smaller pagination? Add "}<code>lg</code> or <code>sm</code> {"for additional sizes."}
            </p>
            <Well className='text-center'>
              <div>
                <Pagination lg>
                  <Page begin disabled />
                  <Page active href='#'>
                    <span>1</span>
                    <span className='sr-only'>(current)</span>
                  </Page>
                  <Page href='#'>2</Page>
                  <Page href='#'>3</Page>
                  <Page href='#'>4</Page>
                  <Page href='#'>5</Page>
                  <Page end />
                </Pagination>
              </div>
              <div>
                <Pagination>
                  <Page begin disabled />
                  <Page active href='#'>
                    <span>1</span>
                    <span className='sr-only'>(current)</span>
                  </Page>
                  <Page href='#'>2</Page>
                  <Page href='#'>3</Page>
                  <Page href='#'>4</Page>
                  <Page href='#'>5</Page>
                  <Page end />
                </Pagination>
              </div>
              <div>
                <Pagination sm style={{margin: 0}}>
                  <Page begin disabled />
                  <Page active href='#'>
                    <span>1</span>
                    <span className='sr-only'>(current)</span>
                  </Page>
                  <Page href='#'>2</Page>
                  <Page href='#'>3</Page>
                  <Page href='#'>4</Page>
                  <Page href='#'>5</Page>
                  <Page end />
                </Pagination>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Pagination lg>\n"}
                  {"  ...\n"}
                  {"</Pagination>\n"}
                  {"<Pagination>\n"}
                  {"  ...\n"}
                  {"</Pagination>\n"}
                  {"<Pagination sm>\n"}
                  {"  ...\n"}
                  {"</Pagination>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Pager</h4>
            <p>
              {"Quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines."}
            </p>
            <Well className='text-center'>
              <div>
                <Pager>
                  <Page href='#'>Previous</Page>{' '}
                  <Page href='#'>Next</Page>
                </Pager>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Pager>\n"}
                  {"  <Page href='#'>Previous</Page>{' '}\n"}
                  {"  <Page href='#'>Next</Page>\n"}
                  {"</Pager>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Aligned links</h4>
            <p>
              {"Alternatively, you can align each link to the sides (with optional disabled state)."}
            </p>
            <Well className='text-center'>
              <div>
                <Pager>
                  <Page previous disabled href='#'>Previous</Page>{' '}
                  <Page next href='#'>Next</Page>
                </Pager>
              </div>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Pager>\n"}
                  {"  <Page previous disabled href='#'>Previous</Page>{' '}\n"}
                  {"  <Page next href='#'>Next</Page>\n"}
                  {"</Pager>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
