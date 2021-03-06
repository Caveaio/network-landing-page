<template>
  <div class="container">
    <h1>Privacy Policy</h1>
    <div class="policy">
      <div class="p-section">
        <h2>Introduction</h2>
        <div class="p-paragraph">
          <p>
            Netwrk, Inc. respect your privacy and are committed to protecting it
            through our compliance with this policy. This policy describes the
            types of information we may collect from you or that you may provide
            when you visit the website https://Netwrk.gg (our “Website”) and our
            practices for collecting, using, maintaining, protecting, and
            disclosing that information.
          </p>
          <h2 style="margin-top: 10px; margin-bottom: 10px">
            This policy applies to information Netwrk collects:
          </h2>
          <ul>
            <li>On this Website and your interactions with this Website.</li>
            <li>
              In email, text, and other electronic messages between you and this
              Website.
            </li>
            <li>
              Through mobile and desktop applications you download from this
              Website, which provide dedicated non-browser-based interaction
              between you and this Website.
            </li>
            <li>
              When you interact with our advertising and applications on
              third-party websites and services, if those applications or
              advertising include links to this policy.
            </li>
          </ul>
          <h2>It does not apply to information collected by:</h2>
          <ul>
            <li>
              Us offline or through any other means, including on any other
              website operated by Company or any third party;
            </li>
            <li>
              Any third party, including through any application or content
              (including advertising) that may link to or be accessible from or
              on the Website
            </li>
          </ul>
          <p style="margin-top: 10px; margin-bottom: 10px">
            Please read this policy carefully to understand our policies and
            practices regarding your information and how we will treat it. If
            you do not agree with our policies and practices, your choice is not
            to use our Website. By using this Website and submitting your
            personal data to its database, you agree to be bound by this Privacy
            Policy, and that Netwrk may process your data for the purposes
            described in this Privacy Policy and consistent with the Website’s
            Terms of Use. This policy may change from time to time (see Changes
            to Our Privacy Policy). Your continued use of this Website after we
            make changes is deemed to be acceptance of those changes, so please
            check the policy periodically for updates.
          </p>

          <ul v-for="t in toc" :key="t.content" class="toc">
            <h2
              style="
                list-style-type: none;
                margin-top: 15px;
                margin-bottom: 15px;
              "
            >
              {{ t.title }}
            </h2>
            <div>{{ t.content }}</div>
            <ul v-for="item in t.lists" :key="item">
              <li style="margin-left: 25px">{{ item }}</li>
            </ul>
            <a href="">{{ t.i }}</a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Policy',
  data: () => ({
    toc: [
      {
        title: '1. Children Under the Age of 13',
        content: `Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. Netwrk does not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or through any of its features, register on the Website, make purchases through the Website, use any of the interactive or public comment features of this Website, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, Netwrk will delete that information. If you believe Netwrk might have any information from or about a child under 13, please contact us at privacy@Netwrk.gg.
                        California residents under 16 years of age may have additional rights regarding the collection and sale of their personal information. Please see Your California Privacy Rights for more information.`,
        lists: [],
        i: '',
      },
      {
        title: '2. Information We Collect and How We Collect It',
        content: `We collect several types of information from and about users of our Website, including information:`,
        lists: [
          `By which you may be personally identified, such as name, postal address, e-mail address, telephone number, any other identifier by which you may be contacted online or offline (”personal information”);`,
          `Information relating to purchases (name, email address, and credit card information), although we use a third party known as Stripe to collect and process this data;`,
          `That is about you but individually does not identify you, such as your location.`,
          `That is about your interaction on this Website, including but not limited to, what you are viewing on the Website, how you view it, what links or webpages you click to, what parts or pages you spend the most time on, and your preferences on the Website`,
          `About your internet connection, the equipment you use to access our Website, and usage details.`,
          `We collect this information:`,
          `Directly from you when you provide it to us.`,
          `Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.`,
          `From third parties, for example, our business partners, content providers, and affiliates`,
          `From YouTube API Services https://policies.google.com/privacy`,
        ],
        i: '',
      },
      {
        title: '3. Information You Provide to Us',
        content:
          'The information Netwrk collects on or through our Website may include:',
        lists: [
          'Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, posting material, or requesting further services. Netwrk may also ask you for information when you report a problem with our Website.',
          'Records and copies of your correspondence (including email addresses), if you contact us.',
          'Your responses to surveys that we might ask you to complete for research purposes.',
          'Details of transactions you carry out through our Website and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website.',
          'Your search queries on the Website.',
        ],
        i: 'You also may provide information to be posted on public areas of the Website, or transmitted to other users of the Website or third parties (collectively, “User Contributions”). Your User Contributions are posted on and transmitted to others at your own risk. Although you may set certain privacy settings for such information by logging into your account profile, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Website with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.',
      },
      {
        title:
          '4. Information We Collect Using Automatic Data Tracking Technologies',
        content:
          'As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:',
        lists: [
          'Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website',
          'Information about your computer and internet connection, including your IP address, operating system, and browser type.',
          'We also may use these technologies to collect information about your online activities over time and across third-party websites or other online services (behavioral tracking). Please see Do Not Track Requests (https://efuse.gg/privacy#doNotTrack) for information on how you can opt out of behavioral tracking on this website and how we respond to web browser signals and other mechanisms that enable consumers to exercise choice about behavioral tracking.',
          'The information we collect automatically may include personal information, or we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:',
          'Estimate our audience size and usage patterns.',
          'Store information about your preferences, allowing us to customize our Website according to your individual interests.',
          'Prepare relevant information on our Website based on your and other consumers use and navigation of it.',
          'Speed up your searches.',
          'Recognize you when you return to our Website.',
          'The technologies we use for this automatic data collection may include:',
          'Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may rNetwrk to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will rNetwrk cookies, our system will issue cookies when you direct your browser to our Website.',
          'Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see How Netwrk Uses and Discloses Your Information. (https://efuse.gg/privacy#discloses)',
          'Web Beacons. Pages of our the Website and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit Netwrk, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).',
        ],
        i: '',
      },
      {
        title:
          '5. Third Party Use of Cookies and Other Data Tracking Technologies',
        content: `Some content or applications, including advertisements, on the Website are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our website. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.
                        We do not control these third parties’ tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly. For information about how you can opt out of receiving targeted advertising from many providers, see How Netwrk Uses and Discloses Your Information. (https://efuse.gg/privacy#discloses)`,
        lists: [],
        i: '',
      },
      {
        title: '6. How We Use Your Information',
        content: `Netwrk uses information that we collect about you or that you provide to us, including any personal information:`,
        lists: [
          'To present our Website and its contents to you.',
          'To provide you with information, products, or services that you request from us or based on your interactions from our Website',
          'To fulfill any other purpose for which you provide it.',
          'To provide you with notices about your account, including expiration and renewal notices.',
          'To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.',
          'To notify you about changes to our Website or any products or services Netwrk offers or provides though it.',
          'To better update our Website based on your and other consumers interaction with it.',
          'To allow you to participate in interactive features on our Website.',
          'In any other way we may describe when you provide the information.',
          'For any other purpose with your consent.',
        ],
        i: `We may also use your information to contact you about our own and third-parties’ goods and services that may be of interest to you. If you do not want us to use your information in this way, please adjust your user preferences in your account profile. For more information, see How Netwrk Uses and Discloses Your Information (https://efuse.gg/privacy#discloses). We may use the information we have collected from you to enable us to display advertisements to our advertisers’ target audiences. Even though we do not disclose your personal information for these purposes without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria.`,
      },
      {
        title: '7. Transferring Personal Information from the EU to the US',
        content:
          'Netwrk is headquartered in the United States. Information you provide to us or we collect from you will be processed in the United States. The United States is not currently considered by the EU to provide an adequate level of data protection. Netwrk therefore relies on exceptions listed in the GDPR. In particular, we collect and transfer your personal information to the United States only: with your consent; to perform services under the contracts we have in place with you; or to fulfill compelling legitimate interest of Netwrk that does not outweigh your rights or freedoms. Netwrk strives to apply suitable safeguards to protect the privacy and security of your personal information and to use it only as described in this Policy. We also enter into data processing agreements and standing contractual clauses with our vendors, whenever feasible and appropriate. For more information regarding the GDPR and data transfers',
        lists: [
          'Read more here: https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_en',
        ],
        i: '',
      },
      {
        title: '8. Do Not Track Requests',
        content:
          'Netwrk uses a number of third party analytics and service providers to help us evaluate your use of the Website; compile statistical reports on activity and improve the content on the Website, as well as the Website’s performance. We only use these third-party analytics providers on certain areas of the Website. We currently do not respond to your browser’s Do Not Track signal, and we do not permit third parties other than our analytics and service providers to track Netwrk users’ activities over time on the Website. We do not track your online browsing activity on other online services over time.',
        lists: [],
        i: '',
      },
      {
        title: '9. Disclosure of Your Information',
        content:
          'Netwrk may disclose aggregated information about our users, and information that does not identify any individual, without restriction. Netwrk may disclose personal information that we collect or you provide as described in this privacy policy:',
        lists: [
          'To our subsidiaries and affiliates.',
          'To contractors, service providers, and other third parties we use to support our business.',
          'To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Netwrk’s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Netwrk about our Website users is among the assets transferred.',
          'To third parties to market their products or services to you if you have not opted out of these disclosures. For more information, see How Netwrk Uses and Discloses Your Information (https://efuse.gg/privacy#discloses)',
          'To fulfill the purpose for which you provide it.',
          'For any other purpose disclosed by us when you provide the information.',
          'With your consent.',
          'We may also disclose your personal information:',
          'To comply with any court order, law, or legal process, including to respond to any government or regulatory request.',
          'To enforce or apply our Terms of Use and other agreements, including for billing and collection purposes.',
          'If Netwrk believes disclosure is necessary or appropriate to protect the rights, property, or safety of Netwrk, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.',
        ],
        i: '',
      },
      {
        title: '10. Your Rights With Respect to Your Personal Information',
        content:
          "Depending on the location from where you access the Website, you may have the right to access, correct, delete, or restrict use of certain personal information covered by this Policy and exercise all other rights set forth in Articles 15-22 of the General Data Protection Regulation (“GDPR”). You may also have the right to request that we refrain from processing your personal information. You may also have the right to rovoke Netwrk's access to Google data via the Google security settings page. Please bear in mind that if you exercise such rights this may affect Netwrk’s ability to provide our services. For inquiries about your personal information, please contact us. Although we will make reasonable efforts to accommodate your request, we reserve the right to impose certain restrictions and requirements on such requests, if allowed or required by applicable laws. Please not that it may take some time to process your request.",
        list: [],
        i: '',
      },
      {
        title: '11. How Netwrk Uses and Discloses Your Information',
        content:
          'We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:',
        lists: [
          'Tracking Technologies and Advertising. You can set your browser to rNetwrk all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe’s website. If you disable or rNetwrk cookies, please note that some parts of this site may then be inaccessible or not function properly.',
          'Disclosure of Your Information for Third-Party Advertising. If you do not want us to share your personal information with unaffiliated or non-agent third parties for promotional purposes, you can opt-out by checking the relevant box logging into the Website and adjusting your user preferences in your account profile, or by sending us an email with your request to opt-out@Netwrk.gg.',
          'Promotional Offers from the Company. If you do not wish to have your contact information used by Netwrk to promote our own or third parties’ products or services, you can opt-out by logging into the Website and adjusting your user preferences in your account profile by checking or unchecking the relevant boxes or by sending us an email stating your request to opt-out@Netwrk.gg. If we have sent you a promotional email, you may send us a return email asking to be omitted from future email distributions. This opt out does not apply to information provided to the Netwrk as a result of a product purchase, product service experience, or other transactions',
          'Targeted Advertising. If you do not want us to use information that we collect or that you provide to us to deliver advertisements according to our advertisers’ target-audience preferences, you can opt-out by emailing opt-out@Netwrk.gg.',
        ],
        i: 'We do not control third parties’ collection or use of your information to serve interest-based advertising. However these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt out of receiving targeted ads from members of the Network Advertising Initiative (”NAI”) on the NAI’s website. \n \n California residents may have additional personal information rights and choices. Please see Your California Privacy Rights for more information. Nevada residents who wish to exercise their sale opt-out rights under Nevada Revised Statutes Chapter 603A may submit a request to this designated address: opt-out@Netwrk.gg.',
      },
      {
        title: '12. Accessing and Correcting Your Information',
        content:
          'You can review and change your personal information by logging into the Website and visiting your account profile page. You may also send us an email at privacy to request access to, correct or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect \n \n If you delete your User Contributions from the Website, copies of your User Contributions may remain viewable in cached and archived pages, or might have been copied or stored by other Website users. Proper access and use of information provided on the Website, including User Contributions, is governed by our Terms of Use. California residents may have additional personal information rights and choices. Please see Your California Privacy Rights for more information.',
        lists: [],
        i: '',
      },
      {
        title: '13. Your California Privacy Rights',
        content:
          'If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, visit CCPA Privacy Notice to California Residents. \n \n California’s “Shine the Light” law (Civil Code Section § 1798.83) permits users of our App that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to privacy@Netwrk.gg.',
        lists: [],
        i: '',
      },
      {
        title: '14. Data Security',
        content:
          'We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. Any payment transactions and Netwrk user’s personally identifiable information will be encrypted. \n \n The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. We urge you to be careful about giving out information in public areas of the Website like message boards. The information you share in public areas may be viewed by any user of the Website. \n \n Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.',
        lists: [],
        i: '',
      },
      {
        title: '15. Changes to This Privacy Policy',
        content:
          'It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users’ personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.',
        lists: [],
        i: '',
      },
      {
        title: '16. Contact Information',
        content: `To ask questions or comment about this privacy policy and our privacy practices, contact us at: privacy@Netwrk.gg`,
        lists: [],
        i: '',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
}
ul {
  margin-left: 15px;
}
ul > li {
  margin-top: 5px;
}

.policy {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  .p-section {
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      margin-top: 15px;
    }
    background-color: #1a162f;
    padding: 4rem 5rem;
    border-radius: 5px;
    margin-bottom: 6rem;
    max-width: 760px;
  }
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 250px;
}

ul > li {
  margin-top: 5px;
}

.policy {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  .p-section {
    p {
      margin-top: 15px;
    }
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }
    background-color: #1a162f;
    padding: 4rem 5rem;
    border-radius: 5px;
    margin-bottom: 6rem;
    max-width: 760px;
  }
}
</style>
