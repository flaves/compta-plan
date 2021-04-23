import wrapWithProvider from './wrapWithProvider';

export const wrapRootElement = wrapWithProvider;

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <meta
      name="facebook-domain-verification"
      content="mshqnysyajum67o96wq3piyuu4cq4g"
    />,
  ]);

  setPostBodyComponents([
    <script
      key="zendesk"
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=96703f00-74fa-49f8-a5e3-c52cca638261"
    />,
  ]);
};
