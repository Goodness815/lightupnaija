import HomeLayout from "../../components/layouts/HomeLayout";
import marketimg from "../../assets/market.png";
import styles from "./market.module.css";
import MarketCategory from "../../components/markets/marketCategory/MarketCategory";
import { Link } from "react-router-dom";
import Cta from "../../components/homeSections/cta/Cta";
function Market() {
  return (
    <HomeLayout>
      <div className={styles.market_container}>
        <div className={styles.market_container_top}>
          <div className={styles.market_left}>
            <h1>Solar Energy to Fulfil Your Daily Requirements.</h1>
            <p>
              Select a package that fits your needs and pay in convenient
              instalments.
            </p>
            <button>See Special Offers</button>
          </div>

          <div className={styles.market_right}>
            <img src={marketimg} alt="market" />
          </div>
        </div>

        <div className={styles.market_container_bottom}>
          <div className={styles.market_bottom_left}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="64"
              viewBox="0 0 50 64"
              fill="none"
            >
              <path
                d="M3.00001 24.9979C3.00037 21.3284 3.91857 17.7173 5.67103 14.4933C7.42349 11.2693 9.95454 8.53492 13.0337 6.53901C16.1129 4.5431 19.6425 3.3491 23.301 3.06571C26.9595 2.78232 30.6308 3.41855 33.9806 4.91648C37.3305 6.4144 40.2524 8.72643 42.4804 11.6421C44.7085 14.5577 46.1718 17.9844 46.7372 21.61C47.3027 25.2357 46.9522 28.9452 45.7178 32.4008C44.4834 35.8564 42.4042 38.9484 39.6696 41.3952C36.3843 44.3373 34.7416 45.8099 34.2957 46.3525C32.8672 48.1155 32.8056 48.2592 32.4477 50.4973C32.3333 51.1925 32.3333 52.2368 32.3333 54.3312C32.3333 57.0739 32.3333 58.4437 31.7437 59.4645C31.3576 60.1334 30.8022 60.6888 30.1333 61.0749C29.1125 61.6645 27.7427 61.6645 25 61.6645C22.2573 61.6645 20.8875 61.6645 19.8667 61.0749C19.1978 60.6888 18.6424 60.1334 18.2563 59.4645C17.6667 58.4437 17.6667 57.0739 17.6667 54.3312C17.6667 52.2397 17.6667 51.1925 17.5552 50.4973C17.1944 48.2592 17.1328 48.1155 15.7043 46.3555C15.2613 45.8099 13.6157 44.3373 10.3304 41.3923C8.02164 39.331 6.17495 36.8046 4.9116 33.9792C3.64825 31.1537 2.9968 28.0929 3.00001 24.9979Z"
                stroke="#1B7339"
                stroke-width="4.4"
              />
              <path
                opacity="0.5"
                d="M32.3333 54.3311H17.6667"
                stroke="#FF6600"
                stroke-width="4.4"
              />
              <path
                opacity="0.5"
                d="M27.3058 22.0645L21.0197 30.8645H29.8197L23.5335 39.6644"
                stroke="#FF6600"
                stroke-width="4.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              Allow us to assist you in determining your present energy usage
              and suggesting the most suitable product for your need
            </p>
          </div>
          <div className={styles.market_bottom_right}>
            <Link to={"/calculator"}>
              <button>Go To Calculator</button>
            </Link>
          </div>
        </div>
      </div>
      <MarketCategory title="Hot Deals" />
      <MarketCategory title="Solar Panels" />
      <MarketCategory title="Charge Controllers" />
      <MarketCategory title="Solar Batteries" />
      <MarketCategory title="Inverters" />
      <MarketCategory title="Solar Cables" />
      <Cta mode={true} />
    </HomeLayout>
  );
}

export default Market;
