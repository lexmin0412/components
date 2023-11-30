import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lexmin-footer',
  styleUrl: 'lexmin-footer.css',
  shadow: true,
})
export class LexminFooter {

  render() {
    return (
      <Host>
        Created and maintained by
        <a
          href="https://github.com/lexmin0412"
          target="_blank"
          style={{
          }}
        >
          Lexmin0412
        </a>
        .{/* 可实现类似于 children 的功能 */}
        {/* <slot></slot> */}
      </Host>
    );
  }

}
