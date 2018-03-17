import nightmare from 'nightmare';

describe('testing of controled form Comments', () => {
  const path = 'http://localhost:3000/posts/3';

  it('rendering form without errors', async () => {
    let page = nightmare().goto(path);
    let text = await page.evaluate(() => document.body.innerHTML).end();
    expect(text).toContain('Comments:');
  }, 20000);

  const selector_author = '[name=author]';
  const selector_message = '[name=text]';
  const button = '.primary';
  const now = (new Date()).toString();

  it('test form', async (done) => {
    nightmare()
      .goto(path)
      .type(selector_message, now)
      .type(selector_author, 'Иван')
      .click(button)
      .wait(2000)
      .evaluate(() => document.body.innerText)
      .end()
      .then(result => {
        expect(result).toContain(now);
        done();
      });
  }, 10000);

  it('test form: author less', async (done) => {
    nightmare()
      .goto(path)
      .type(selector_message, now)
      .click(button)
      .wait(2000)
      .evaluate(() => document.body.innerText)
      .end()
      .then(result => {
        expect(result).toContain('Comment should have the author');
        done();
      });
  }, 10000);

  it('test form: message less', async (done) => {
    nightmare()
      .goto(path)
      //.type(selector_message, now)
      .type(selector_author, 'Иван')
      .click(button)
      .wait(2000)
      .evaluate(() => document.body.innerText)
      .end()
      .then(result => {
        expect(result).toContain('Comment should have the text');
        done();
      });
  }, 10000);
});
