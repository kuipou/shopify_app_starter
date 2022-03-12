import { Layout, Page } from "@shopify/polaris";

export function PageLayout({ children }) {
  return (
    <Page>
      Hello
      <Layout>{children}</Layout>
    </Page>
  );
}
