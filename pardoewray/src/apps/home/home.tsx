import './home.css';
import stockp1 from '../../assets/stockp1.webp';
import stockp2 from '../../assets/stockp2.webp';
import stockp3 from '../../assets/stockp3.webp';
import { clientClick, candidateClick } from '../../components/navbar/navbar';

const Home = () => {
  return <>
    <div
      id="home-banner"
      style={{backgroundImage: `url(${stockp1})`}}
    />

    <div className="home-bio">
      <h1> Pardoe Wray IT & Digital recruitment &nbsp;</h1><p>
        We bring a depth of
        experience to everyone we work with, along with an
        ultra personal touch you just don’t see often enough
        in this industry. <br/><br/>
        We know that there aren’t any ‘one size fits all’
        solutions. So we listen, tailor our approach and adapt
        to your needs. Our business model is built around
        forming powerful partnerships, whether you’re a
        start-up or a high growth organisation, We integrate,
        grow and scale to meet the needs of your business,
        and you. <br/><br/>
        Founded by <i>Nathan Pardoe</i> in <i>2020</i> (during a
        pandemic no less) Pardoe Wray is growing fast. We’re
        supported by Key Selection, an investment group
        made up of 40 equity partners. This gives us our
        unique ability to scale with the people and expertise
        you need to build brilliant teams.
      </p>
    </div>

    <div id="home-buttons">
      <button onClick={clientClick}> Get Me Hired </button>
      <button onClick={candidateClick}> Find Me Candidates </button>
      <button> View Positions </button>
    </div>

    <div className="home-bio">
      <h2> We’re your talent Management partner </h2><p>
        The idea of ‘partnership’ lies at the core of our business model.
        Whether you opt for a fully integrated service solution from us,
        or a more traditional contingent recruitment approach, we’ll take
        accountability for your talent needs and help your deliver your
        business goals. <br/><br/>
        No hard sell, no made up stats, just honest to
        goodness passion and drive to help you build an incredible business.
      </p>
    </div>

    <div
      id="home-banner2"
      style={{backgroundImage: `url(${stockp3})`}}
    />

    <h2 className="home-section-header"> Make The Right Move </h2>

    <div className="home-bio">
      <h2> Talent management partnership </h2><p>
        All the benefits of an internal recruitment function at a fraction of the cost.
        Reduced fees for multiple hires, we’ll fully integrate with your business to
        supercharge your growth.
      </p>
    </div>

    <div className="home-bio">
      <h2> Start-up recruitment </h2><p>
        We’ll partner with you to build your business from the ground up,
        allowing you to spread the cost of recruitment while you build profitability.
        We grow with you.
      </p>
    </div>

    <div className="home-bio">
      <h2> Executive Search </h2><p>
        One off search for senior appointments and key hires. Whether CXO level or a
        critical strategic role, we’ll partner with you to find exceptional candidates
        who share your values and beliefs.
      </p>
    </div>

    <div className="home-bio">
      <h2> Contingent Recruitment </h2><p>
        A more traditional recruitment approach, percentage fee per hire,
        integrate us with your PSL, still every bit as personal and uniquely
        tailored to your business needs.
      </p>
    </div>

    <div className="home-bio">
      <h2> Contract Recruitment </h2><p>
        We know temporary resource can tip the balance when you need it.
        We’ll partner with you to find the people you need for as long as you need them.
        All in line with IR35 requirements.
      </p>
    </div>

    <div
      id="home-banner2"
      style={{backgroundImage: `url(${stockp2})`}}
    />

    <h2 className="home-section-header"> Our Business Model </h2>

    <div className="home-bio">
    <h2> It's What We Do </h2>
    <p>We’ve been working with start-ups for a while now, and
        ‘cost to hire’ comes up as a common theme time and
        again, especially when engaging with recruitment
        agencies.<br/><br/>
        In most cases, start-ups or high-growth organisations are
        looking to hire multiple members of staff and being hit
        with big fees for every hire. This can be prohibitive to
        hiring top talent in your sector.
        In collaboration with our clients we’ve developed a
        method of recruiting that allows organisations to grow
        whilst spreading recruitment costs over a 12-month
        period.<br/><br/>
        This model allows for a true partnership to form, where
        Pardoe Wray can integrate with your business and plan
        for your recruitment needs across the year, building
        pipelines of relevant candidates. So, when the time
        comes to make that hire, we’re on hand and ready to go.
      </p>
    </div>

  </>
}

export default Home;
