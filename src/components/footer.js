
import React from "react"

import {css} from "@emotion/core"
import tw from "tailwind.macro"

//import testImg from '../../static/upay-logo.png'
//const ypayUrl = 'https://console.upyun.com/register/?invite=SkuNoODHU';

const ypayUrl = 'https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral';
const ypayImg = 'https://img.laijunjie.com/blog/upay-logo.png';

const imgSize = css`
  width: 68.838px;
  height: 30px;
`

const container= css`
  ${tw`flex flex-wrap overflow-hidden`};
`;

const item = css`
  ${tw`w-full overflow-hidden sm:w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5px 0;
`;

const Footer = () => {
  return (
    <footer style={{padding: `17px 0 10px`,borderTop:`1px solid rgba(15, 15, 15,0.2)`,marginTop:`180px`}}>
      <div css={container}>
        <div css={item}>
          友链<a style={{fontSize:`0`}} href={ypayUrl} target={`_blank`} rel={`nofollow`} alt={`又拍云`}>
            <img src={ypayImg} css={imgSize} alt="ypayun"/>
          </a>
        </div>
        <div css={item}><a href="http://beian.miit.gov.cn" target={`_blank`}>粤ICP备19158757号</a></div>
        <div css={item}>&copy;2016-2020 laijunjie</div>
      </div>
    </footer>
  )

}

export default Footer;
