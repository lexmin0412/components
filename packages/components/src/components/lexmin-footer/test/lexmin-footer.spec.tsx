import { newSpecPage } from '@stencil/core/testing';
import { LexminFooter } from '../lexmin-footer';

describe('lexmin-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LexminFooter],
      html: `<lexmin-footer></lexmin-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <lexmin-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lexmin-footer>
    `);
  });
});
