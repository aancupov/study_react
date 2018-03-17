import nightmare from 'nightmare';

describe('when visit the homepage', () => {
  it('welcomes user', async () => {
    let page = nightmare().goto('http://localhost:3000');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Powered by React Course.');
  }, 20000);

  const path = 'http://localhost:3000/posts/3';
  const selector_likes = '.str-likes';
  const button = '.btn-like';
  let before;

  it('before press button Like', async (done) => {
    nightmare()
      .goto(path)
      .wait(selector_likes)
      .evaluate((selector) => document.querySelector(selector).innerText,selector_likes)
      .end()
      .then(result => {
        before = parseInt(result.substr(7));
        expect(before+1).toBeGreaterThan(0);
        done();
      });
  }, 10000);

  it('handle press button Like', async (done) => {
    nightmare()
      .goto(path)
      .click(button)
      .wait(selector_likes)
      .evaluate((selector) => document.querySelector(selector).innerText,selector_likes)
      .end()
      .then(result => {
        expect(parseInt(result.substr(7))-before).toEqual(1);
        done();
      });
  }, 10000);
});
