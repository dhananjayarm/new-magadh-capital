import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  selectedTab = 'PMS';
activeFAQId: string | null = null; 
  faqs = [
    {
      id: 'collapse1',
      question: 'Who is a Portfolio Manager?',
      answer: `A portfolio manager is a body corporate, which, pursuant to a contract with a client,
      advises or directs or undertakes on behalf of the client (whether as a discretionary portfolio
      manager or otherwise) the management or administration of a portfolio of securities or goods
      or funds of the client.`,
      isOpen: true
    },
    {
      id: 'collapse2',
      question: 'What is Portfolio Management Services (PMS)?',
      answer: `Portfolio Management Services (PMS) is a service offered by the Portfolio Manager for professional management of investment portfolio to create wealth by investing in stocks, fixed income, debt, cash, structured products and other individual securities and/or to cater the investment needs by providing personalized investment solutions to meet specific investment objectives by a professional investment/portfolio manager.`,
      isOpen: false
    },
    {
      id: 'collapse3',
      question: 'How many types of PMS are there?',
      answer: `There are three types of PMS:`,
      array: [
        'Discretionary PMS - The portfolio manager individually and independently manages the funds and securities of each client in accordance with the needs of the client. The choice as well as the timings of the investment decisions rest solely with the portfolio manager.',
        'Non-Discretionary PMS - The portfolio manager manages the funds in accordance with the directions of the client. The choice as well as the timings of the investment decisions rest solely with the Investor. The portfolio manager only suggests the investment ideas. However, the execution of trade is done by the portfolio manager.',
        'Advisory Services - It involves advising the client on managing the portfolio/investments. The portfolio manager plays the role of an advisor only, the management of the portfolio/investments and execution of trade is done from the client’s end.',
      ],
      isOpen: false
    },
    {
      id: 'collapse4',
      question: 'How is PMS different from a Mutual Fund?',
      answer: `Mutual Fund is an investment trust for investors with a common investment objective and invests funds in securities, which complement that objective. The rewards/risks are proportionately shared by all the investors in the Mutual Fund. PMS, on the other hand, is a personalized investment service provider that takes into account unique needs of investors. It is not possible to service all investors through a mutual fund due to the uniqueness/diversity of investment objectives. Thus, a PMS seeks to address investors' requirements through an individual investment goal assessment exercise and portfolio building. The rewards/risks from the portfolio are borne solely by the investor for whom the portfolio is being managed.
<br> An investor in a PMS can expect better handholding from his/her/its portfolio manager than he has been accustomed to in investing either on his/her/its own or from through his/her/its broker or in a mutual fund. A PMS investor can also expect to occasionally interact with the portfolio manager to discuss any concerns that he might have. The Portfolio Manager will handle all administrative matters, including operating a bank account and dealing with settlement and depository transactions.
`,
      isOpen: false
    },
    {
      id: 'collapse5',
      question: 'Is Magadh Capital Advisors LLP (MCA LLP) a registered Portfolio Manager? What all portfolio management services are offered by MCA LLP?',
      answer: `Yes. Magadh Capital Advisors LLP (MCA LLP) is registered with Securities and Exchange Board of India (SEBI) as a Portfolio Manager vide registration no. INP000007155 under SEBI Portfolio Manager Regulations, 2020. Currently MCA LLP offers 1) Discretionary portfolio management services and 2) Advisory Services.`,
      isOpen: false
    },
    {
      id: 'collapse6',
      question: 'Who can invest in PMS?',
      answer: `The following can invest in the PMS:`,
      array: [
        'Resident Individuals',
        'Hindu Undivided Families (HUF)',
        'Body corporate (Private/Public)',
        'Trust (Registered)',
        'Limited Liability Partnership (LLP)',
        'Partnership Firms',
        'Non Resident Indian (NRI)( post RBI approval)',
        'Any other eligible investor'
      ],
      isOpen: false
    },
    {
      id: 'collapse7',
      question: 'Can NRIs invest in the PMS?',
      answer: `Yes, NRIs can invest in the PMS through the NRE or NRO accounts. There are some additional compliance/documentation requirements for NRIs which need to be taken into consideration. For proper guidance, contact us our representative will help NRI investors with the process/documentation.`,
      isOpen: false
    },
    {
      id: 'collapse8',
      question: 'For whom is PMS ideally suited for?',
      answer: `MCA LLP PMS is ideally suited for HNIs (High Networth Individuals), family offices or corporates having unique investment objectives and who are concerned primarily with their investment growth but with an intense focus on capital preservation.`,
      isOpen: false
    },
    {
      id: 'collapse9',
      question: 'How do I start PMS with MCA LLP?',
      answer: `You can drop an email on: <a href="mailto:investor.info@magadhcapital.com" > <u> investor.info@magadhcapital.com  </u></a> about your requirement and share your contact details. Our representative will get in touch with you to help with the onboarding process/documentation.`,
      isOpen: false
    },
    {
      id: 'collapse10',
      question: `Can an investor join MCA LLP's PMS directly?`,
      answer: `Yes. Investor have the option for direct on-boarding without intermediation of any person engaged in distribution services to avail services of Magadh Capital Advisors LLP by dropping an email on: <a href="mailto:investor.info@magadhcapital.com">  <u>investor.info@magadhcapital.com  </u></a>`,
      isOpen: false
    },
    {
      id: 'collapse11',
      question: 'What are the investment approaches offered by MCA LLP for PMS?',
      answer: `The following investment approaches are offered by MCA LLP:`,
      array: [
        `A) VALUE FOR GROWTH: A multi-cap, sector agnostic investment approach with Nifty 500 as the benchmark.`,
        `B) FUTURE STARS: A small-cap and mid-cap, sector agnostic investment approach with Nifty mid-cap 100 index as the benchmark`
      ],
      isOpen: false
    },
    {
      id: 'collapse12',
      question: 'What is the minimum amount required to start with MCA LLP for PMS?',
      answer: `The minimum amount applicable at the time of opening a new account with MCA LLP for PMS is the same as regulatory minimum requirement i.e. amount of Rs. 50 lakhs or securities having a minimum worth of Rs. 50 lakhs. Please note, in case of securities, we will re‐align the securities, if required.`,
      isOpen: false
    },
    {
      id: 'collapse13',
      question: 'Can I open a PMS account with securities and cash combination?',
      answer: `Yes, you can open a PMS account with a combination of securities and cash as long as they add upto a minimum of Rs 50 lakhs. However, we will re‐align the securities, if required.`,
      isOpen: false
    },
    {
      id: 'collapse14',
      question: 'How shall I add money to my account? Is it with some frequency or lump sum',
      answer: `Resident Investors with Pooled Bank Account can remit funds online via netbanking/NEFT/RTGS into our account or can sent us account payee cheque drawn on the name of MAGADH CAPITAL ADVISORS LLP. 
Non-Resident, clients with separate account and clients for remitting funds online via netbanking / NEFT / RTGS must drop an email on: <a href="mailto:investor.info@magadhcapital.com"> <u>investor.info@magadhcapital.com </u></a> for account details.`,
      isOpen: false
    },
    {
      id: 'collapse15',
      question: 'What is stock transfer process for Initial/Top up stock corpus?',
      answer: `After the demat account opening process has been completed with MCA LLP, the client will be provided a copy of the Client Master List (CML) of the new demat account. The client will then have to produce this CML copy and fill up the depository slips at the entity where the client has his/her/its old demat account.`,
      isOpen: false
    },
    {
      id: 'collapse16',
      question: 'Do MCA LLP PMS have an SIP structure?',
      answer: `Yes. An existing client of MCA LLP having minimum AUM of Rs. 50 Lakhs in existing account can top up his/her/its existing portfolio with a minimum amount of Rs. 1 Lakh in the increment of Rs. 50,000/- whether monthly or a quarterly.`,
      isOpen: false
    },
    {
      id: 'collapse17',
      question: 'Do I need to have a PAN card?',
      answer: `Yes, you need to have PAN card as per regulations, it is mandatory for all transactions in capital markets. In case you do not have a PAN card, we can help you in acquiring one.`,
      isOpen: false
    },
    {
      id: 'collapse18',
      question: 'Am I required to open new demat account to invest in PMS?',
      answer: `Yes. For investment in listed securities, an investor is required to open a new demat account in his/her/its own name. MCA LLP will help you to open a new demat account.`,
      isOpen: false
    },
    {
      id: 'collapse19',
      question: 'How is In Person Verification (IPV) carried out in the case of Resident Indians?',
      answer: `In Case of Resident Indians during their account opening documentation process, IPV will be carried out by employees of Kotak Mahindra Bank at a time and place convenient for the client.`,
      isOpen: false
    },
    {
      id: 'collapse20',
      question: 'How is In Person Verification (IPV) carried out in the case of Non Resident Indians?',
      answer: `In Case of Non-Resident Indians who are visiting India during their account opening documentation process, IPV will be carried out by employees of Kotak Mahindra Bank at a time and place convenient for the client. However, considering the infeasibility of carrying out IPV of NRIs not visiting India, attestation of KYC documents by Notary public, any court, magistrate, Judge or local banker of the client where client is residing, may be permitted. However, for NRIs who are either US persons or Canadian persons, IPV has to be done only when they are visiting India.`,
      isOpen: false
    },
    {
      id: 'collapse21',
      question: 'How long will it take to open the account?',
      answer: `It generally takes 7-10 working days from receipt and verification of Account Opening Form kit, which is complete in all respects.`,
      isOpen: false
    },
    {
      id: 'collapse22',
      question: 'Will I have any control over my portfolio?',
      answer: `Under discretionary portfolio management services, the investor can mention specific needs (like sector/company restrictions) which the investment manager may, but not necessarily, keep in mind while investing your funds. However, the sole authority of investment decisions will be with the investment / portfolio manager.`,
      isOpen: false
    },
    {
      id: 'collapse23',
      question: 'How is the PMS operated? Is any personal involvement required in its day-to-day functioning?',
      answer: `You are required to sign a PMS Agreement and also give us a Power of Attorney to handle all the operations related to the management of your portfolio.`,
      isOpen: false
    },
    {
      id: 'collapse24',
      question: `Who shall manage my portfolio/ funds ? `,
      answer: `Under MCA LLP PMS, your portfolio is managed by a team of experienced Portfolio Managers with more than 17 years of experience in the industry and capital market to manage the funds backed with a strong team of research analysts. These specialists create and actively manage your portfolio to strive to provide you risk adjusted returns in line with your stated investment objectives.`,
      isOpen: false
    },
    {
      id: 'collapse25',
      question: 'Under Discretionary Portfolio Management Service (DPMS), Portfolio Managers shall invest funds of his/her/its clients in the securities listed or traded on a recognized stock exchange, money market instruments, units of Mutual Funds through direct plan and other securities as specified by SEBI from time to time.',
      isOpen: false
    },
    {
      id: 'collapse26',
      question: 'What asset classes do you invest in under your PMS?',
      answer: `Our PMS is an equity‐oriented service. We invest in equity and equity related products under our PMS. However there will be occasions when we may deploy some part of funds in debt securities, or debt mutual funds etc depending on our market call.`,
      isOpen: false
    },
    {
      id: 'collapse27',
      question: 'Can I switch in between the investment approaches after starting with one particular investment approach?',
      answer: `Yes. You can switch between the investment approaches after following the proper procedure.`,
      isOpen: false
    },
    {
      id: 'collapse28',
      question: 'Can I do goal-based investment with PMS?',
      answer: `Yes. You can switch between the investment approaches after following the proper procedure.`,
      isOpen: false
    },
    {
      id: 'collapse29',
      question: 'How can I invest in both the investment approach of MCA LLP?',
      answer: `You can invest in both the investment approach of MCA LLP by executing the client agreement and the respective annexures as may be required and subject to minimum investment of Rs. 50 lakhs in each investment approach.`,
      isOpen: false
    },
    {
      id: 'collapse30',
      question: 'Whether the funds of clients availing discretionary PMS may be invested in unlisted bonds, which are traded over the counter but settled and reported to the Stock Exchanges?',
      answer: `No.`,
      isOpen: false
    },
    {
      id: 'collapse31',
      question: 'Is the client required to top up his/her/its account if the portfolio value falls below the minimum investment amount as provided in the SEBI (Portfolio Managers) Regulations, 2020 as a result of valuation of portfolio?',
      answer: `No.`,
      isOpen: false
    },
    {
      id: 'collapse32',
      question: 'Is Partial withdrawal of Portfolio permitted, for the existing clients of Portfolio Managers?',
      answer: `The client may withdraw partial amounts from his/her/its portfolio, in accordance with the terms of the agreement between the client and the Portfolio Manager. However, the value of investment in the portfolio after such withdrawal shall not be less than the applicable minimum investment amount i.e. Rs. 50 lakhs/-`,
      isOpen: false
    },
    {
      id: 'collapse33',
      question: 'Can I withdraw any time from MCA LLP PMS?',
      answer: `A client may at any time, at its own risk and cost, withdraw its asset from MCA LLP PMS by giving not less than 30 days' written notice for the same.`,
      isOpen: false
    },
    {
      id: 'collapse34',
      question: 'Do I have to pay penalty incase of an early withdrawal?',
      answer: `Early withdrawal of funds from the investment approach is subject to exit load, as mentioned in the client agreement. No penalty will be levied for the same.`,
      isOpen: false
    },
    {
      id: 'collapse35',
      question: 'What is the disclosure mechanism of the portfolio managers to their clients?',
      answer: `The portfolio manager provides to the client the Disclosure Document at least two days prior to entering into an agreement with the client. The Disclosure Document contains the quantum and manner of payment of fees payable by the client for each activity, portfolio risks, complete disclosures in respect of transactions with related parties, the performance of the portfolio manager and the audited financial statements of the portfolio manager for the immediately preceding three years. Notably, disclosure document is also available on our website (www.magadhcapital.com).`,
      isOpen: false
    },
    {
      id: 'collapse36',
      question: 'Does SEBI approve any of the services offered by portfolio managers?',
      answer: `No. SEBI does not approve any of the services offered by the Portfolio Manager. An investor has to invest in the services based on the terms and conditions laid out in the disclosure document and the agreement between the portfolio manager and the investor.`,
      isOpen: false
    },
    {
      id: 'collapse37',
      question: 'Does SEBI approve the disclosure document of the portfolio manager?',
      answer: `No. While the portfolio manager submits the disclosure document to SEBI prior to its general circulation, SEBI does not approve or certify the accuracy or adequacy of the contents of the Disclosure Document.`,
      isOpen: false
    },
    {
      id: 'collapse38',
      question: 'What are the rules governing services of a Portfolio Manager?',
      answer: `The services of a Portfolio Manager are governed by the agreement between the portfolio manager and the investor. Hence, an investor is advised to read the agreement carefully before signing it.`,
      isOpen: false
    },
    {
      id: 'collapse39',
      question: 'Can a Portfolio Manager impose a lock-in on the investor?',
      answer: `Portfolio managers cannot impose a lock-in on the investment of their clients. However, a portfolio manager can charge exit fees from the client for early exit as applicable and as laid down in the agreement subject to provision of SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2020/26.`,
      isOpen: false
    },
    {
      id: 'collapse40',
      question: 'Can a Portfolio Manager offer indicative or guaranteed returns?',
      answer: `As per SEBI rules, no portfolio manager can guarantee returns. Hence we are not permitted to guarantee any returns.`,
      isOpen: false
    },
    {
      id: 'collapse41',
      question: `Who is appointed as a custodian and fund accountant for MCA LLP's PMS?`,
      answer: `Kotak Mahindra Bank Limited has been appointed as the custodian and fund accountant for MCA LLP's PMS.`,
      isOpen: false
    },
    {
      id: 'collapse42',
      question: 'Do you indulge in day trading under the Portfolio Management Service?',
      answer: `SEBI guidelines forbid any day trading activity by Portfolio Managers.`,
      isOpen: false
    },
    {
      id: 'collapse43',
      question: `Do we reinvest client's dividend in his/her/its portfolio?`,
      answer: `Yes. Dividends against securities are credited directly into the client's PMS account and hence get reinvested into the PMS account.`,
      isOpen: false
    },
    {
      id: 'collapse44',
      question: 'What fees can a portfolio manager charge from its clients for the services rendered by him?',
      answer: `SEBI (Portfolio Managers) Regulations, 2020 provide that the portfolio manager shall charge a fee as per the agreement with the client for rendering portfolio management services. The fee so charged may be a fixed amount or a performance-based fee or a combination of both.<br>
The agreement between the portfolio manager and the client shall, inter-alia, includes the quantum and the manner of fees payable by the client for each activity for which service is rendered by the portfolio manager directly or indirectly. Hence, an investor is advised to read the agreement carefully before signing it.`,
      isOpen: false
    },
    {
      id: 'collapse45',
      question: 'What is the process to change the fees schedule?',
      answer: `Fees schedule can only be changed on a prospective basis, from the 1st April of a new financial year. Changes to the fees structure are not allowed on retrospective effect.`,
      isOpen: false
    },
    {
      id: 'collapse46',
      question: `Why do resident Indians have to transfer money into a MCA LLP Investment Managers' pooled bank account? Doesn't this transfer lead to change in ownership of the funds?`,
      answer: `All resident Indian clients become beneficiary owners in the pooled bank in proportion to the value of funds transferred by them into this account. MCA LLP Investment Managers is NOT one of the beneficiary owner of this account. As a result, the pooled bank account will not get affected even in the unlikely event of all bank accounts of MCA LLP Investment Managers getting locked / sealed by the regulatory bodies. Use of pooled bank account is a structure provided by SEBI to help ease operations and reduce operational costs related to execution of PMS accounts.`,
      isOpen: false
    },
    {
      id: 'collapse47',
      question: 'What is the difference between the structure of an NRI account and other accounts ? ',
      answer: `NRI discretionary PMS accounts include a PIS bank account (in the name of the client), a non-PIS bank account (in the name of the client), a trading account (in the name of the client) and a demat account (in the name of the client).<br>
However, for resident Indian discretionary PMS accounts, corporate accounts and HUF accounts, the structure includes only a demat account opened in the name of the client. For the purposes of a bank account, the client becomes one of the beneficiary owners of a pooled bank account which is used for funding, top-ups and other banking requirements.`,
      isOpen: false
    },
    {
      id: 'collapse48',
      question: 'On what basis is the performance of the portfolio manager calculated?',
      answer: `The performance of a discretionary portfolio manager is calculated using time weighted rate of return (TWRR) method for the immediately preceding three years or period of operation, whichever is lesser.<br>
SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2020/26 dated February 13, 2020, inter-alia, provides information on reporting of performance by Portfolio Managers and also a client reporting format which includes information on the performance of the client account, portfolio manager and the appropriate benchmark.`,
      isOpen: false
    }

  ];
  aifs = [
    {
      id: 'aif1',
      question: 'What is an AIF?',
      answer: `Alternative Investment Fund or AIF means any fund established or incorporated in India which is a privately pooled investment vehicle which collects funds from sophisticated investors, whether Indian or foreign, for investing it in accordance with a defined investment policy for the benefit of its investors.`,
      isOpen: true
    },
    {
      id: 'aif2',
      question: 'What are the various categories of AIF?',
      answer: `a) Category I AIF:`,
      subItems: [
        'Venture capital funds (Including Angel Funds)',
        'SME Funds',
        'Social Venture Funds',
        'Infrastructure funds'
      ],
      moreCategories: ['b) Category II AIF', 'c) Category III AIF'],
      isOpen: false
    },
    {
      id: 'aif3',
      question: 'What are Category III AIF?',
      answer: `AIFs which employ diverse or complex trading strategies and may employ leverage including through investment in listed or unlisted derivatives. Various types of funds such as hedge funds, PIPE Funds, etc. are registered as Category III AIFs. Long-only equity focused funds like Magadh Capital also come under the Category III.`,
      isOpen: false
    },
    {
      id: 'aif4',
      question: 'What does long-only stand for in description of an equity investment fund?',
      answer: `This means that the fund does not short sell or use derivatives. Instead it only buys and sells securities in cash market.`,
      isOpen: false
    },
    {
      id: 'aif5',
      question: 'Does Magadh Capital undertake leverage?',
      answer: `No. Leverage is against Magadh Capital's philosophy.`,
      isOpen: false
    },
    {
      id: 'aif6',
      question: 'Can an AIF raise any amount of funds from any investor?',
      answer: `An AIF may raise funds from any sophisticated investor whether Indian, foreign or non-resident Indian, who inter alia undertake risk of investing in primarily unlisted or illiquid securities. However, AIF (other than angel fund) shall not accept from an investor, an investment of value less than one crore rupees. In case of investors who are employees or directors of the AIF or employees or directors of the Manager, the minimum value of investment shall be twenty-five lakh rupees. Here it is worth mentioning that Magadh Capital, being a long-only equity-oriented Category III AIF, does not invest in unlisted or illiquid securities. It invests only in listed equities in the cash segment.`,
      isOpen: false
    },
    {
      id: 'aif7',
      question: 'Is the sponsor/management mandated to have an interest in AIF?',
      answer: `In order to ensure that the interest of the Manager/Sponsor is aligned with the interest of the investors in the AIF, the AIF Regulations require that the sponsor/manager shall have a certain continuing interest in the AIF which shall not be through the waiver of management fees. For Category I and II AIFs, such interest must be not less than two and half percent of the corpus or five crore rupees, whichever is lesser and for Category III AIFs, the interest must be not less than five percent of the corpus or ten crore rupees, whichever is lesser. Thus in case of Magadh Capital the Manager/Sponsor shall have a contribution of not less than five percent of the corpus or ten crore rupees, whichever is lesser.`,
      isOpen: false
    },
    {
      id: 'aif8',
      question: 'In which legal forms can an AIF be set up?',
      answer: `An AIF under the SEBI (Alternative Investment Funds) Regulations, 2012 can be established or incorporated in the form of a trust or a company or a limited liability partnership or a body corporate. Magadh Capital AIF is registered as a trust as are most other AIFs, as per SEBI.`,
      isOpen: false
    },
    {
      id: 'aif9',
      question: 'Who is the Sponsor of the AIF?',
      answer: `‘'Sponsor'' is any person(s) who set up the AIF and includes promoter in case of a company and designated partner in case of a limited liability partnership. Magadh Capital Advisors LLP is the Sponsor of Magadh Capital AIF.`,
      isOpen: false
    },
    {
      id: 'aif10',
      question: 'Is Magadh Capital an open-ended fund or closed fund?',
      answer: `As per SEBI regulations Category III funds can choose to be open ended or close ended as per their strategy. Magadh Capital is open ended (which means investors can put in their contribution to the fund at any point in time, and can redeem at any point in time subject to lock-in and redemption terms).`,
      isOpen: false
    },
    {
      id: 'aif11',
      question: 'What are the reporting requirements to SEBI for AIFs registered with SEBI?',
      answer: `As per SEBI's circular No.CIR/IMD/DF/10/2013 dated 29th July, 2013, Category I and II AIFs and the Category III AIFs which do not undertake leverage are required to submit report to SEBI on a quarterly basis while Category III AIFs which undertake leverage are required to submit the reports on a monthly basis. The formats for such reports are provided as a part of the said circular. All AIFs shall submit the report irrespective of whether or not the AIF has started activity. Currently, all AIFs shall send reports to SEBI by email to aifreporting@sebi.gov.in. No physical reports are required to be filed with SEBI. The reports are required to be submitted within 7 calendar days from the end of quarter/ end of month as the case maybe.`,
      isOpen: false
    },
    {
      id: 'aif12',
      question: 'What kind of reports can an investor expect from an AIF?',
      answer: `Chapter IV of the AIF Regulations provides for general obligations, responsibilities and transparency requirements that are required to be complied by all AIFs. Chapter IV provides for specific disclosure obligations on the AIF to the investors including conflict of interest, information on fund investments, fees, various risks, valuation, etc. Further, AIFs, in addition to what is required under the AIF Regulations, may also provide for additional disclosures to investors in the placement memorandum.`,
      isOpen: false
    },
    {
      id: 'aif13',
      question: 'Where can an investor look out for information on AIF?',
      answer: `SEBI (Alternative Investment Funds) Regulations, 2012 and circulars issued thereunder are available on website of SEBI at: <a href="http://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListDept=yes&deptId=25" target="_blank" rel="noopener noreferrer">http://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListDept=yes&deptId=25</a> The list of registered AIFs is also available on the SEBI website.`,
      isOpen: false
    }
  ];

 
  toggleAIF(aif: any) {
    // Close other AIFs
    this.aifs.forEach(f => {
      if (f.id !== aif.id) f.isOpen = false;
    });
    // Toggle clicked FAQ
    aif.isOpen = !aif.isOpen;
    // Track active question
    this.activeFAQId = aif.id;
  }

  toggleFAQ(faq: any) {
    // Close other AIFs
    this.faqs.forEach(f => {
      if (f.id !== faq.id) f.isOpen = false;
    });
    // Toggle clicked FAQ
    faq.isOpen = !faq.isOpen;
    // Track active question
    this.activeFAQId = faq.id;
  }



  // toggleFAQ(faq: any) {
  //   faq.isOpen = !faq.isOpen;
  //   this.activeFAQId = faq.isOpen ? faq.id : null;
  // }

  // toggleAIF(aif: any) {
  //   aif.isOpen = !aif.isOpen;
  //   this.activeFAQId = aif.isOpen ? aif.id : null;
  // }

  selectTab(tab: string) {
    this.selectedTab = tab;

    console.log('selectedTab__',this.selectedTab);
    
  }

  // toggleFAQ(faq: any) {
  //   faq.isOpen = !faq.isOpen;
  // }

  // toggleAIF(aif: any) {
  //   aif.isOpen = !aif.isOpen;
  // }
}
