import { newSpecPage } from '@stencil/core/testing';
import { LexminHeader } from '../lexmin-header';

describe('lexmin-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LexminHeader],
      html: `<lexmin-header></lexmin-header>`,
    });
    expect(page.root).toEqualHtml(`
      <lexmin-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lexmin-header>
    `);
  });
});
