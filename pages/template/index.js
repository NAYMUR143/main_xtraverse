import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import shadow from "../../components/images/shadow.svg";
import logo from "../../components/images/tepmplatelogo.svg";

import { Button } from "@mui/material";
import firstimg from "../../components/images/project1.png";
import Link from "next/link";
const Main = styled.div`
  background: #fff;
  height: 150vh;
`;
const Templatepage = styled.div`
  background: #fff;
  padding: 0px;
  position: relative;
`;
const HomepagePreview = styled.div`
  background: #fff;
  padding: 0px;
  border-radius: 5px;
  height: 100%;
  position: relative;
  svg {
    position: absolute;
    width: 100%;
    top: -15%;
    z-index: 1;
    @media screen and (min-width: 1400px) {
      top: 0%;
    }
  }
  .homesec {
    position: relative;
    z-index: 2;
  }
  .headersc {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    .logo {
      img {
        width: 40px;
        height: 25px;
      }
    }
    .headerbtn {
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 0.65em;
        font-weight: 600;
        margin: 0px 5px;
        &:last-child {
          color: #fff;
          background: #000;
        }
      }
    }
  }
  .herosec {
    display: grid;
    place-items: center;
    place-content: center;
    text-align: center;
    width: 75%;
    margin: auto;
    padding: 25px 0px 10px;
    .herotxt {
      padding: 100px 0px 0px;
    }
    h1,
    p,
    span {
      color: #000;
      font-weight: 600;
    }
    h1 {
      font-size: 8em;
      font-weight: 800;
      @media screen and (max-width: 1400px) {
        font-size: 6.5em;
      }
    }
    p {
      font-size: 1.5em;
      color: rgba(0, 0, 0, 0.65);
      width: 70%;
      margin: auto;
      @media screen and (max-width: 1400px) {
        font-size: 1.3em;
        width: 70%;
      }
    }
    button {
      color: #000;
      margin: 10px 0px;
      border: 2px solid #000;
      font-size: 1em;
      padding: 8px 40px;
    }
  }
  .heroimgs {
    display: flex;
    position: relative;
    width: 100%;
    margin-top: 20px;
    height: 330px;

    @media screen and (max-width: 1400px) {
      padding-top: 20px;
      padding-bottom: 50px;
    }
    .img {
      position: absolute;
      top: 0%;
      left: 50%;

      width: 250px;
      height: 100%;
      object-fit: cover;
      /* @media screen and (max-width: 1400px) {
        width: 120px;
        height: 150px;
      } */
      &:nth-of-type(1) {
        transform: translate(-120%, 14%) rotate(-15deg);
        z-index: 2;
      }
      &:nth-of-type(2) {
        z-index: 1;
        transform: translate(-50%, 3%) rotate(-5deg);
      }
      &:nth-of-type(3) {
        transform: translate(20%, 10%) rotate(15deg);
      }
    }
  }
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  z-index: 99;
  padding: 20px 40px;
  .btnsc {
    display: flex;
    gap: 15px;
    a {
      text-decoration: none;
      text-align: center;
      color: #212121;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      font-weight: 600;

      &:last-child {
        margin-left: 30px;
        background: #212121;
        border: 2px solid #212121;
        color: #fff;
        width: 150px;
      }
      &:hover {
        text-decoration: underline;
        &:last-child {
          color: #000;
          background: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;
function page() {
  return (
    <Main>
      <Templatepage>
        <Header>
          <Link href="/">
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          <div className="btnsc">
            <Link href="/template">Marketplace</Link>
            <Link href="/template/waitlist">Waitlist</Link>
            <Link href="/">Connect Wallet</Link>
          </div>
        </Header>
        <HomepagePreview>
          {/* svg  */}
          <svg
            width="1285"
            height="337"
            viewBox="0 0 1285 337"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_403_33)">
              <circle
                cx="711"
                cy="-55"
                r="238"
                transform="rotate(180 711 -55)"
                fill="url(#paint0_linear_403_33)"
              />
            </g>
            <g filter="url(#filter1_f_403_33)">
              <circle
                cx="662"
                cy="-145"
                r="238"
                transform="rotate(180 662 -145)"
                fill="url(#paint1_linear_403_33)"
              />
            </g>
            <g filter="url(#filter2_f_403_33)">
              <circle
                cx="392"
                cy="-124"
                r="238"
                transform="rotate(180 392 -124)"
                fill="#1EA573"
              />
            </g>
            <g filter="url(#filter3_f_403_33)">
              <circle
                cx="893"
                cy="-107"
                r="238"
                transform="rotate(180 893 -107)"
                fill="#1EA573"
              />
            </g>
            <g filter="url(#filter4_f_403_33)">
              <circle
                cx="697"
                cy="-145"
                r="238"
                transform="rotate(180 697 -145)"
                fill="url(#paint2_linear_403_33)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_403_33"
                x="319"
                y="-447"
                width="784"
                height="784"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77"
                  result="effect1_foregroundBlur_403_33"
                />
              </filter>
              <filter
                id="filter1_f_403_33"
                x="270"
                y="-537"
                width="784"
                height="784"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77"
                  result="effect1_foregroundBlur_403_33"
                />
              </filter>
              <filter
                id="filter2_f_403_33"
                x="0"
                y="-516"
                width="784"
                height="784"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77"
                  result="effect1_foregroundBlur_403_33"
                />
              </filter>
              <filter
                id="filter3_f_403_33"
                x="501"
                y="-499"
                width="784"
                height="784"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77"
                  result="effect1_foregroundBlur_403_33"
                />
              </filter>
              <filter
                id="filter4_f_403_33"
                x="305"
                y="-537"
                width="784"
                height="784"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="77"
                  result="effect1_foregroundBlur_403_33"
                />
              </filter>
              <linearGradient
                id="paint0_linear_403_33"
                x1="711"
                y1="-293"
                x2="711"
                y2="183"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#195F64" />
                <stop offset="1" stop-color="#06E9FE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_403_33"
                x1="662"
                y1="-383"
                x2="662"
                y2="93"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#09FB22" />
                <stop offset="1" stop-color="#0E5649" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_403_33"
                x1="697"
                y1="-383"
                x2="697"
                y2="93"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#20BC83" />
                <stop offset="1" stop-color="#97C45E" />
              </linearGradient>
            </defs>
          </svg>

          <div className="homesec">
            <div className="herosec">
              <div className="herotxt">
                <h1>Robo Gremlins</h1>
                <p>
                  Our <strong>Fancy Shamncy NFT Project</strong> is the king of
                  all fancy shamncy NFT projects. And we are sworn enemies of
                  Gary V.
                </p>
                <Button>GO TO NFTS</Button>
              </div>
              <div className="heroimgs">
                <div className="img">
                  <Image src={firstimg} alt="" />
                </div>
                <div className="img">
                  <Image src={firstimg} alt="" />
                </div>
                <div className="img">
                  <Image src={firstimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </HomepagePreview>
      </Templatepage>
    </Main>
  );
}

export default page;
