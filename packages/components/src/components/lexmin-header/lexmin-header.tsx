import { Component, Host, h, Prop } from '@stencil/core';

// /**
//  * 内置图标类型
//  */
// export type InnerIcon = 'github' | 'theme'

// /**
//  * 自定义图标类型
//  */
// export type CustomIcon = {
//   /**
//    * 图标 url
//    */
//   icon: string
//   /**
//    * 跳转链接
//    */
//   link: string
// }

@Component({
  tag: 'lexmin-header',
  styleUrl: 'lexmin-header.css',
  shadow: true,
})
export class LexminHeader {
  /**
   * 头部标题 一般是站点或页面标题
   */
  @Prop() title: string;

  // /**
  //  * 图标列表
  //  */
  // @Prop() icons: Array<InnerIcon | CustomIcon>;

  render() {
    console.log('icons', this);
    return (
      <Host>
        <img
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            margin: '0 6px',
          }}
          src="https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/common/24385370.jpeg"
        />
        <div
          style={{
            fontWeight: '600',
            flex: '1',
          }}
        >
          {this.title}
        </div>
        {/* <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {this.icons?.map(icon => {
            return <div>{icon}</div>;
          })}
        </div> */}
      </Host>
    );
  }
}
