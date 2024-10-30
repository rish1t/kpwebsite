// pages/index.tsx
import Image from 'next/image';
import React from 'react';

const BentoGrid: React.FC = () => {
  const images = [
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBLZIDQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.ms8xDvwi_IfgLyRNxo2vebdfQ3LAl3swTtKXMZ93N2PRvHX8mYJWTe81zMl5inlze2RUlmxALs_lbZEzzFMPmQ2E2vRRm27HZgp25Jbtv8BHuKdz17-_WucoIyvPUkSiq1KN4TUd6Dk97jAfZJyMHp9IK2SHRotK2i5wFA3Z_Bw_f1M7u0LPLGraM4veaBCZutNBK2dui-UFskRLhvwcf8J-kSp24K765_EGlZD1ilGZEnWLzMj7vnej-zAadoRmNrw9XJB-mLWEPoaXvTc62RQYJNtGdSfr_mgla146Q2wGe23AC0sjvuksE8qOh_folCdETk20MkalzIR7bgikpXOnjrWp1UWCmDTnhIYM4ST1zpq7mCrTyebfAnG0ab6XWKLlgwLJOgPHEV0WeL_PRoGOkaOEfnncuvaKjsSn8m7HGkMmBspNCfRMLluXZiTaB5QrCWeIvZuzC_bV9Fqz0Mxc-pxFEWXtd5hFK7vs4Fk.AYcOedW8TvJDSbA43m7inQeyk5KVpU1sZ71hcrzPh-g%26version%3DPublished&cb=63846872299&encodeFailures=1&width=1080&height=732',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBL3ODQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.We8VEw6-ew0JXomOSzlnIpeoTZxjnBUQG_vdjExZWyaF-OAfXpODQNoAGzb7G5CF4QKfgyAIocyE_1NTNAifl1uJCCsFSEy4-9KG1ng7EU4sl9TLYQYk6ExC_DesIsKWjyjngxUKGLgEHe97ORlPbYJ6SYaRxlYqfbYNEUOUueadab5gfw7YQrV2v_M9evjQd2j7q_ECfuhWZchyAkTCdhFwJz2wCx7D54yssuUCIRWhFe3JzeAo47-hVl2hcgcqXlPkxLNJ9VGMNH74_86if2jtk7vnk86eNzzF2PPYAus_BRGXHDbmIew0X2OsIPqWH8fuIvOaDuzJczoiBaRJJzmk2b1w1l5a4Q9wEvRmXGp0ECcU768GoW0va77IE3TODE82Z9TvRLS85J9veGodv4DINQdyg8ljfES3Lx2jdaI4QZS0ClgtW0PqmXPxkLYXBLUOa3iyiYieg-iamRONKBwDgC3UF7EJg6r2akjCdtI.1E5OO8eMlMw5WcPAaZnb6SW3o-KriitPrxUMSa7anm4%26version%3DPublished&cb=63865175797&encodeFailures=1&width=542&height=813',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBL3IDQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.Uz81DDCHtueLWlbOI8fPeHZCYTzwiK7GUNKsnhXaV4ceuis1hSy4xDpaQftLll-R2EK_CYR08aUn2XwvhMMTuIS-5fXPISQGKVl3panUXmhwEjguGF1WEynPSvRehm7QacAH0Hok9lF2uka0aiRfClKemcLCinkqMrc_k_45eqbyc5q2YOnVOSQctImhP4Hp7SXHm87NARvRJjBfXCZzAARbyEl3P-iHYGlcjmGH3sco5CRZzj16QMNrRVzgZp1AXiN3KYmkOn1_5C0xvwZOiDvBA5cQYUI61X2D_r8s-toVYO6GzzA_40btdXeeCfIIq5LH67ax3-YMCiQVDTAfA9-ErgyI7RqJdLFSmsAJVSjdRw6L8uAB8SUQqmQJZRsU80yhXDGAFGyyayxi1jQm4mhj54Q1i8xrsuK8Ou8bUoGcr0bLbeejfFS7FZHqHCNxw-U14s3ezAesDQ3_zlNqdvww3N9vXIAIxK4dy98oSts.YEbern4nLibDP5q2_bDGnOP7t_OTUxwnjSGw1LAjOks%26version%3DPublished&cb=63865175714&encodeFailures=1&width=542&height=813',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBL2VDQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.P2fq6vnLxB4168tg2ocCcwzf71t5_yV49qT1TfVCATQmmvw7lBdWlFWfikzjl7hmzotOseQVnP5IbDd85GqlnZX-EkWu0Zmx3aJ5_CG38yz8hAALnbUMG4ovPMlAHH0T_Z4yGEUIS3VlO4VQoZZOlsUvH3kPgUNbIGBMVM97sp9HCT-QFMjtms2OnJwC7IcLZpt_Ys7-86z0WI_4gZ0J0jFEetZCF1aVRMSP9_OlZkJK-0JNIaRdqpZbntfriCSfJhghaKaq8WV4GbgJzesc4wWZYVI4zWEVQiYmsauHLu6guKspN7UiCOA49Z1QCdtvYOvZvB5nje4y96vSBc5Xw8zPvC5QcqrvUU77VIQ4LWLkPFDBWKvnXxLBFNFN3AFpFOIwlCfD7Oy72pGBJy2vS156y2tuR9VgEo2IueVyt0AQi_Hv50Ji_wmlYWPfnuGJ2OMvpC2W-6xvHIs4Uamk3QNlUptBNSeLopeQxP1sKrY.cplMwNVDZ65YkQt-0YB-QI2FymsRPDn8wK3bjvU6PnA%26version%3DPublished&cb=63823100136&encodeFailures=1&width=650&height=813',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBL22DQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.GODwv9jzk6N0Z1KNhIeaLpk3r87721ZA2hb1_EI2OIljl6LU1JxYKJBi7mMCYD4YUnGSrr9G2gK7EIZlVEMwot2pqUcweV6wP4cVsJl57DHDj6P0xoX_6pfzx8ZfScv-tYL7h1qfB7rUFnELRumFk1opwUhSI0Haey5dvPfZ_yPGDA65HrkdKjq12Jgm0ohoEio-qEwvKTpvHmeg5mHvl0-MkSs6vyZfsbyJxxbRW3ilf_MjCrO9lL2JE8rOKnknK7mev6uoiidhcH9c9xB97rA5Rh312f1vQHiqvYBHpjyHybFlLtc4S7odi7T90uUmo_MUkaAR86kgNUrEyGutNFZT2ECtuiQrHJz0nuttomlSJz5W4lYREC7ar3UGcQprELrDVWSeOthF5cCpX2MIXu7bf37XP88blf8UMIfTNByqxvZVlsKFWK6e6Odtet0qi26_umaJsFTEnXBFyFSf3xAfqOs3DcDndxJYwkSf-m8.D0FuM7dgmjHCb3__XgreRTYbRr1AlbYZfAI83WSyr2c%26version%3DPublished&cb=63712785399&encodeFailures=1&width=542&height=813',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBLZGDQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.-1lOrM7QWHOVgjM40sTzr-vWkhq8UkS_sTjfAMg_zGV0I6tAMa_ccYK-d0C721pCPsPYWwwqcb_lSeG77490EYktMdZ9ms1m_Zfzl0QQqjzgtogqxAdTnQM78Crr1QcuUwg3Wla1DUx3W0p1y5f9mhUOxjligLe0mUtrsx0_15FkWhnxz8v-69x5_qPvqb8hkg2VrUGAt0WEymsCN06BPavaA059w3bzz4ILhcn0zWtBMxfwRE_kFHimmaZDII4JhDLlzUrECiwViHb_exyl4qYEdhxht0I7HqqkLmzw0ZwyjRr6BJuAESkpaQ0NcLB5g_p-7AXVS3_MPuoBJ69fH1UnnV0fzMH4thxAnZXyM52bGSocwwDTAhF98EP_uiCpxOO0EY14Bjbm28MdHJ13bqq69y38C6sHxvvw30Ar9Yd3yrG8mCbq3E2rxCTQhVvyiiwb737SoyP_ZRxvGEf0xjhg-wTH-x_rCQbGjnPkc7E.-8l2NZjpWs8Xj-Pw6c3pWc1A18iXz5Jj4JTsc7vJQPE%26version%3DPublished&cb=63854135710&encodeFailures=1&width=540&height=813',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBL2ODQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.9TeVJEsefOYG6w_z-uT8glJQKHxdglsdqI24MfvAtL55pGYplKB7VjhR6If72Q3eLmUW5SpmtUss4rMoqYUmP2bV7-3sBYl6nXS7wFReQODKkb1d4mUbDbqlV0jsETkkAlutHDzasFXIUBnE_P1ihEdm0FJXm0ZfhyJ_FZGSCcfG6gLuf-prgOv_VykhjdqmIWYL6lJxoQOQ44LL2EkQA_eeNR1MWc4vHf3MUhkjYSSgDQkfPKogFiUnjEd6dHWOcj0cJPDDeqF7hb7l0jE4_qdEEvZ0FvtszgX9Pc8ObxJ4sn7gjW5EXrg-Qwwfqni9qEN5RJm48jx-aR9bbqMBZhSGJLN02a5N0xeYOjzFMu45SGa8RxHFZlA8rIDRjJXl0d-XIIPmarQl2_dmLbbvvQUEB_7U6MjQApmkSPPpAoXfkvBf46zKdwxqMAe8abQGj1qj5qbI1TOrt2d6Yg6Ctzhs0kzDMZIV9Zwc5U7vsdA.2BlOPN5SMdgcDeeFfMFC9NR7y-Qtm82qWVGpwzyUjzc%26version%3DPublished&cb=63822777346&encodeFailures=1&width=542&height=813',
    'https://centralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194056&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ljywatRXBEqTPA4EZRkD5aLWXaLzavpEnDSZCh2WLL6rMOGalpUsRqUbsWgxmgRP%2Fitems%2F01TQY55TW3NWUXVIR4HQQIBLZSDQAAAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2YWIwM2M5Ni01N2Q0LTRhMDQtOTMzYy0wZTA0NjUxOTAzZTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzMwMzMyODAwIn0.iMEkotqfFUXqnY7TReY11gsT2mOwYrSniT4mA3sh0V-HkzHeBhrSXdvBForIkAwIQ-9yZrKi8RkTB8Vm0VJ9DXkR9xtOL3s9Zi-oFusGkq1VG6kZkODZoHS0RwsBgnnTEVhOk95wFQ7jJhvDFd_fJ4bbqXIlGO3LEx9AXUbDf66hXdDEonG7sUMdn1_n3HfGsCDPLZjnump1O8pvv5p-5Uo_GJvhMvPGDoq47IRA1ZlS7veBr90i6zJ_B1USYtLLEQLZTNqcE5RVXaWbCgm7KtvF1NBcrX52BwhK4eUaUjBx3YzrdJ10otg5eX14v3mXjxOqm9dB-B0GwpFrFGAoX4Af4tAoCC4dSKdcAH1rJvZl7PIi3U8N591WGB5c20xDTmawfnF20pGGKQDAI-iJOoezA3nJHkrQ3iun6IVIoB3-powR_aABADKMzUKLW_dEvyPY6SntVWY1Z3JRMHYtAHYoiBGX8rkUw_LS_ANPwm0.wdZ47IWkIT0iDVcU-K8dZwc0tpxbF6eMxDxVp9PbY2Q%26version%3DPublished&cb=63851112531&encodeFailures=1&width=540&height=813',
  ];

  return (
    <div className="min-h-fit bg-black md:py-[4%] w-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-6 gap-3 w-full max-w-7xl">
        {/* Image 1: Large wide */}
        <div className="md:col-span-4 col-span-4 relative overflow-hidden" style={{ paddingTop: '35%' }}>
          <Image
            src={images[0]}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 2: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[1]}
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 3: Tall */}
        <div className="md:col-span-2 md:row-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '140%' }}>
          <Image
            src={images[3]}
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        

        <div className="md:col-span-2 col-span-4 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[5]}
            alt="Image 6"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 5: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[4]}
            alt="Image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 6: Small square */}
        

        {/* Image 7: Large
        <div className="col-span-4 relative overflow-hidden" style={{ paddingTop: '55%' }}>
          <Image
            src={images[6]}
            alt="Image 7"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div> */}

        {/* Image 8: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[6]}
            alt="Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Image 8: Small square */}
        <div className="md:col-span-2 col-span-2 relative overflow-hidden" style={{ paddingTop: '95%' }}>
          <Image
            src={images[7]}
            alt="Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
