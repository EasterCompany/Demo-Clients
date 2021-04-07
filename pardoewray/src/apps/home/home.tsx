import './home.css';
import leeImg from '../../assets/lee.webp';
import karlImg from '../../assets/karl.jpeg';
import philImg from '../../assets/phil.webp';
import katieImg from '../../assets/katie.webp';
import nathanImg from '../../assets/nathan.webp';
import logoImg from '../../assets/zelephant2.webp';


const Introduction = () => {
  return <div className="home-section">
    <div className="home-left" style={{margin: '0 auto'}}>
      <div className="home-title">
        <h2> Hello. </h2>
        <img src={logoImg} alt="logo" />
      </div>
      <h3> Powerful partnerships. </h3>
      <p>
        Pardoe Wray are a new business, but we’re not new
        to IT & Digital recruitment. We bring a depth of
        experience to everyone we work with, along with an
        ultra personal touch you just don’t see often enough
        in this industry.<br/><br/>
        We know that there aren’t any ‘one size fits all’
        solutions. So we listen, tailor our approach and adapt
        to your needs. Our business model is built around
        forming powerful partnerships, whether you’re a
        start-up or a high growth organisation, We integrate,
        grow and scale to meet the needs of your business,
        and you.<br/><br/>
        Founded by <b>Nathan Pardoe</b> in 2020 (during a
        pandemic no less) Pardoe Wray is growing fast. We’re
        supported by Key Selection, an investment group
        made up of 40 equity partners. This gives us our
        unique ability to scale with the people and expertise
        you need to build brilliant teams.
      </p>
    </div>
    <div className="home-right">
      <img src={logoImg} alt="logo" />
    </div>
  </div>
}


const TeamMember = (props: any) => {
  return <div className="team-member-container">
    <img src={props.img} alt={props.name} />
    <div className="team-member-info-container">
      <div className="team-member-info">
        <p className="team-member-name"> {props.name} </p>
        <p className="team-member-title"> {props.title} </p>
      </div>
      <div className="team-member-bio">
        <p> {props.bio} </p>
      </div>
    </div>
  </div>
}


const TheTeam = () => {
  return <div className="home-section" style={{flexDirection: 'row-reverse'}}>
    <div className="home-left" style={{maxWidth: 'unset'}}>

      <TeamMember
        img={nathanImg}
        name="Nathan Pardoe"
        title="Managing Director"
        bio="Nathan has worked in IT/Software recruitment for 20+ years, both in agency
and internal recruitment. He has a deep knowledge of how to integrate with organisations
to allow them to grow highly talented teams. When he’s not spending time with his
wife and 2 daughters, you’ll find him somewhere near a barbell, a football, or a pint."
      />

      <TeamMember
        img={leeImg}
        name="Lee Callendar"
        title="Managing consultant"
        bio="Lee has worked in the recruitment industry for 20+ years, alongside his
recruitment experience Lee founded a ‘driving school comparison website’ which gave him a
valuable insight into hiring IT specialists from a client perspective. In his spare time,
he likes being with his 2 sons, who are growing up fast! Lee has a passion for cooking
(and eating!), so regular swimming is a must!"
      />

      <TeamMember
        img={karlImg}
        name="Karl Roberts"
        title="Senior Consultant"
        bio="Karl has been working in Technology Recruitment for close to 25 years, supplying
contract & permanent talent throughout the UK & Europe. With a keen interest in all
technology, he’s very focused on finding the right person as well as the right skills for
his clients, from entry to board level. Karl is a an avid armchair sports-fan, especially
international Rugby, and he's kept busy by his two young boys, sharing their love of
gaming - both Xbox & tabletop."
      />

      <TeamMember
        img={philImg}
        name="Phil Bottomley"
        title="Chairman"
        bio="Phil has owned Major Recruitment for nearly 30 years, building a successful
recruitment business from a start-up. This success has allowed Phil to invest in others.
4 years ago, Phil set up the investment group Key Selection, through this company
Phil has invested in 40 independent recruitment firms supporting their growth."
      />

      <TeamMember
        img={katieImg}
        name="Katie Nebard"
        title="Non-Exec Director"
        bio="Katie has been with Major Recruitment for several years having initially joined the
business as an HR Officer. She has developed her career through managing both large
contracts and teams. In her current role Group MD, she is responsible for the
recruitment and development of the Equity Partners within Key Selection."
      />

    </div>
    <div className="home-right">
      <h2 style={{textAlign:'center', marginTop:'-120px'}}> Meet <br/> The <br/> Team </h2>
    </div>
  </div>
}


const Home = () => {
  return <>
    <Introduction />
    <div className="home-buttons">
      <button> Get Me Hired </button>
      <button> Find Me Candidates </button>
      <button> View Positions </button>
    </div>
    <TheTeam />
  </>
}


export default Home;
