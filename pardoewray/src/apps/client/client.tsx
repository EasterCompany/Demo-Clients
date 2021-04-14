import './client.css';
import '../home/home.css';
import tallImg from '../../assets/stats.webp';
import zelephant from '../../assets/zelephant.webp';
import ContactSection from '../../components/contact/contact';


const TopSection = () => {
  return <div className="home-section" style={{flexDirection: 'row-reverse'}}>
    <div className="home-left" style={{maxWidth: 'unset'}}>
      <h2
        id="client-page-header"
        style={{fontSize: 'calc(36px + 2vmin)'}}
      > What we do </h2>
      <h3
        style={{fontSize: 'calc(28px + 2vmin)'}}
      > We’re your Talent Management partner. </h3>
      <p>
        The idea of ‘partnership’ lies at the core of our business model. Whether you opt for a fully integrated service
        solution from us, or a more traditional contingent recruitment approach, we’ll take accountability for your
        talent needs and help your deliver your business goals. No hard sell, no made up stats, just honest to
        goodness passion and drive to help you build an incredible business.
      </p>
    </div>
    <div className="home-right" style={{paddingRight: '32px'}}>
      <img
        src={zelephant}
        alt="98% of stats are made up."
        style={{maxWidth: '320px'}}
      />
    </div>
  </div>
}


const BottomSection = () => {
  return <>
  <div className="home-section" style={{flexDirection: 'row'}}>
    <div className="home-left" style={{maxWidth: 'unset'}}>

      <h3 style={{color: '#4472c4', fontWeight: 'bold'}}>
        Our business model
      </h3>
      <p>
        We’ve been working with start-ups for a while now, and
        ‘cost to hire’ comes up as a common theme time and
        again, especially when engaging with recruitment
        agencies. <br/><br/>
        In most cases, start-ups or high-growth organisations are
        looking to hire multiple members of staff and being hit
        with big fees for every hire. This can be prohibitive to
        hiring top talent in your sector. <br/><br/>
        In collaboration with our clients we’ve developed a
        method of recruiting that allows organisations to grow
        whilst spreading recruitment costs over a 12-month
        period. <br/><br/>
        This model allows for a true partnership to form, where
        Pardoe Wray can integrate with your business and plan
        for your recruitment needs across the year, building
        pipelines of relevant candidates. So, when the time
        comes to make that hire, we’re on hand and ready to go.
      </p>

    </div>
    <div
      className="home-right"
      style={{paddingRight: '2vw'}}
    >
      <img
        src={tallImg}
        alt="pardoewray elephant"
        style={{padding: '25% 10% 10% 10%', width: '80%'}}
      />
    </div>
  </div>
  <h3 style={{
    color: '#4472c4',
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center'
  }}> Our services </h3>
  <div
    className="grid-section"
    style={{maxWidth: '1180px', margin: '0 auto'}}
  >
    <div className="grid-item">
      <h4> Talent management partnership </h4>
      <p>
        All the benefits of an internal recruitment function at a fraction of the cost.
        Reduced fees for multiple hires, we’ll fully integrate with your business to
        supercharge your growth.
      </p>
    </div>

    <div className="grid-item">
      <h4> Start-up recruitment </h4>
      <p>
        We’ll partner with you to build your business from the ground up, allowing you
        to spread the cost of recruitment while you build profitability. We grow with you.
      </p>
    </div>

    <div className="grid-item">
      <h4> Exec Search </h4>
      <p>
        One off search for senior appointments and key hires. Whether CXO level or a
        critical strategic role, we’ll partner with you to find exceptional candidates who
        share your values and beliefs.
      </p>
    </div>

    <div className="grid-item">
      <h4> Contingent Recruitment </h4>
      <p>
        A more traditional recruitment approach, percentage fee per hire, integrate us with
        your PSL, still every bit as personal and uniquely tailored to your business needs.
      </p>
    </div>

    <div className="grid-item">
      <h4> Contract Recruitment </h4>
      <p>
        We know temporary resource can tip the balance when you need it. We’ll partner with
        you to find the people you need for as long as you need them. All in line with IR35
        requirements.
      </p>
    </div>
  </div>
  </>
}


const Client = () => {
  document.title = 'Pardoe Wray | Client';

  return <>
    <TopSection />
    <ContactSection />
    <BottomSection />
    <ContactSection />
  </>
}


export default Client;
