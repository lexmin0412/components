import { newSpecPage } from '@stencil/core/testing';
import { LexminAvatar } from '../lexmin-avatar';

describe('lexmin-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LexminAvatar],
      html: `<lexmin-avatar></lexmin-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <lexmin-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lexmin-avatar>
    `);
  });
});
