import { newE2EPage } from '@stencil/core/testing';

describe('lexmin-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lexmin-header></lexmin-header>');

    const element = await page.find('lexmin-header');
    expect(element).toHaveClass('hydrated');
  });
});
