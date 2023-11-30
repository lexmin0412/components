import { newE2EPage } from '@stencil/core/testing';

describe('lexmin-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lexmin-footer></lexmin-footer>');

    const element = await page.find('lexmin-footer');
    expect(element).toHaveClass('hydrated');
  });
});
