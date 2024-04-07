import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lexmin-avatar',
  styleUrl: 'lexmin-avatar.css',
  shadow: true,
})
export class LexminAvatar {

  render() {
    return (
      <Host>
        <img
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '16px',
          }}
          src="https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/common/24385370.jpeg"
        />
      </Host>
    );
  }

}
