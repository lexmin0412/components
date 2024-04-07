import { newE2EPage } from '@stencil/core/testing';

describe('lexmin-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lexmin-avatar></lexmin-avatar>');

    const element = await page.find('lexmin-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
