import React from 'react';
import { Link } from 'react-router';
import styles from '../stylesheets/components/articleNav.css';
import Scroll from 'react-scroll';

let DirectLink = Scroll.Link;

export default class ArticleNav extends React.Component {

  render() {
    const slug = this.props.slug;
    if (slug == 'its-all-in-the-passing') {
      return (
      <nav className={styles.articleNav}>
        <Link to="/"><h1 className={styles.titleLink}>It's all in the passing</h1></Link>
          <ul>
            <li><DirectLink activeClass="activeNav" to="prologue" spy={true} smooth={true} duration={500}>Prologue</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-search-and-the-material" spy={true} smooth={true} duration={500}>The search and the material</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="disposition-and-critical-themes" spy={true} smooth={true} duration={500}>Disposition and critical themes</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="defining-the-fields-of-tension-methodology" spy={true} smooth={true} duration={500}>Defining the fields of tension - Methodology</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="processing-process-analytical-perspectives" spy={true} smooth={true} duration={500}>Processing process - Analytical perspectives</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-adjunctive-terms" spy={true} smooth={true} duration={500}>Immanence and adjunctive terms</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="philosophy-in-practice-and-representation" spy={true} smooth={true} duration={500}>Philosophy in Practice and Representation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="forerunners" spy={true} smooth={true} duration={500}>Forerunners</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-modality-of-the-critique" spy={true} smooth={true} duration={500}>The modality of the critique</DirectLink></li>
          </ul>
        </nav>
        );
    } else if (slug == 'interview-20') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 20</h1></Link>
        </nav>
      );
    } else if (slug == 'cage-interpreted-and-performed') {
      return (
      <nav className={styles.articleNav}>
        <Link to="/"><h1 className={styles.titleLink}>Cage Interpreted and Performed</h1></Link>
          <ul>
            <li><Link to="/#">Entrance</Link></li>
            <li><Link to="/#">Introduction One</Link></li>
            <li><Link to="/#">Introduction Two</Link></li>
            <li><Link to="/#">On Cage, his esthetics interpreted</Link></li>
            <li><Link to="/#">Interpretation of esthetics I</Link></li>
            <li><Link to="/#">Interpretation of esthetics II</Link></li>
            <li><Link to="/#">Interpretation of esthetics III</Link></li>
            <li><Link to="/#">Interpretation of esthetics IV</Link></li>
            <li><Link to="/#">Influences, predecessors and mentors – Pragmatism and Spirituality</Link></li>
            <li><Link to="/#">Cage´s relationship to Asian philosophy and esthetics</Link></li>
            <li><Link to="/#">Chance and indeterminacy and the role of the Subject </Link></li>
            <li><Link to="/#">nterpretation of esthetics V</Link></li>
            <li><Link to="/#">Cage and politics (I See Myself as an Anarchist – Anarchic Harmony)</Link></li>
            <li><Link to="/#">What to be guided by</Link></li>
            <li><Link to="/#">Building the script – a score of chance and indeterminacy</Link></li>
            <li><Link to="/#">The fictive situation at the theater</Link></li>
            <li><Link to="/#">The things in the boxes and the making of the script</Link></li>
            <li><Link to="/#">The music and its place in the performance</Link></li>
            <li><Link to="/#">Water Walk</Link></li>
            <li><Link to="/#">The interplay between the script, the boxes and other materials</Link></li>
            <li><Link to="/#">The theatrical space in process</Link></li>
            <li><Link to="/#">The window and the sound of the street</Link></li>
            <li><Link to="/#">Identity as an artist rather than a character</Link></li>
            <li><Link to="/#">Compositional thinking and being in variation</Link></li>
            <li><Link to="/#">The physical mode – Body and music</Link></li>
            <li><Link to="/#">Theater as Process and The Shifting of Roles</Link></li>
            <li><Link to="/#">The Perspective of the young ones</Link></li>
            <li><Link to="/#">The reference group</Link></li>
            <li><Link to="/#">The director – Shifting role as a consequence</Link></li>
            <li><Link to="/#">The performer – Shifting role as a consequence</Link></li>
            <li><Link to="/#">The audience – Shifting role as a consequence</Link></li>  
            <li><Link to="/#">Coda</Link></li>                                          
          </ul>
      </nav>
      );
    } else if (slug == 'interview-3') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 3</h1></Link>
        </nav>
      );
    } else if (slug == 'hierarchy-in-creation') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Hierarchy in Creation</h1></Link>
          <ul>
            <li><DirectLink activeClass="activeNav" to="entrance" spy={true} smooth={true} duration={500}>Entrance</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="from-text-to-sound" spy={true} smooth={true} duration={500}>From text to sound</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="six-musicians-dissolving-the-author" spy={true} smooth={true} duration={500}>Six musicians dissolving the Author</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="layers-of-energy" spy={true} smooth={true} duration={500}>Layers of energy</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-playing-out" spy={true} smooth={true} duration={500}>The playing out</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-in-dialogue-immanence-in-music-making" spy={true} smooth={true} duration={500}>Immanence in dialogue, immanence in music making</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="to-move-along" spy={true} smooth={true} duration={500}>To move along</DirectLink></li>
          </ul>          
        </nav>
      );
    } else if (slug == 'interview-7') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 7</h1></Link>
        </nav>
      );
    } else if (slug == 'differentiated-presence') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Differentiated Presence</h1></Link>
          <ul>
            <li><DirectLink activeClass="activeNav" to="a-garden-of-music-and-social-connections" spy={true} smooth={true} duration={500}>A garden of music and social connections</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-composition" spy={true} smooth={true} duration={500}>The composition</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="problematizing-choreography" spy={true} smooth={true} duration={500}>Problematizing choreography</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="elements-for-interaction-and-connection" spy={true} smooth={true} duration={500}>Elements for interaction and connection</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="what-is-being-investigated-" spy={true} smooth={true} duration={500}>What is being investigated?</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="what-do-i-see-" spy={true} smooth={true} duration={500}>What do I see?</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="vulnerability-unrevealed" spy={true} smooth={true} duration={500}>Vulnerability unrevealed</DirectLink></li>          
          </ul>              
        </nav>
      );
    } else if (slug == 'who-is-the-creator') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Who is the creator?</h1></Link>
          <ul>
            <li><DirectLink activeClass="activeNav" to="setting-out" spy={true} smooth={true} duration={500}>Setting out</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="consistency-and-consolidation" spy={true} smooth={true} duration={500}>Consistency and Consolidation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-collective-creation" spy={true} smooth={true} duration={500}>Immanence and collective creation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-relations" spy={true} smooth={true} duration={500}>Immanence and Relations</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-creative-responsibility" spy={true} smooth={true} duration={500}>Immanence and creative responsibility</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-the-shifting-of-roles" spy={true} smooth={true} duration={500}>Immanence and The Shifting of Roles</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-performing-participation" spy={true} smooth={true} duration={500}>Immanence and Performing Participation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="there-is-an-initiative-taken-immanence-and-hierarchy" spy={true} smooth={true} duration={500}>There is an initiative taken – Immanence and Hierarchy</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="immanence-and-the-director" spy={true} smooth={true} duration={500}>Immanence and the director</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="reconnecting-to-the-fields-of-tension" spy={true} smooth={true} duration={500}>Reconnecting to the fields of tension</DirectLink></li>  
          </ul>                        
        </nav>
      );
    } else if (slug == 'interview-5') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 5</h1></Link>
        </nav>
      );
    } else if (slug == 'meeting-meaning') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Meeting - Meaning</h1></Link>
          <ul>
            <li><DirectLink activeClass="activeNav" to="in-the-midst-of-it-all" spy={true} smooth={true} duration={500}>In the midst of it all</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="introduction" spy={true} smooth={true} duration={500}>Introduction</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="no-borders-of-immanence-" spy={true} smooth={true} duration={500}>No Borders (of Immanence)</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="shared-space" spy={true} smooth={true} duration={500}>Shared Space</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="breaking-through-the-representational" spy={true} smooth={true} duration={500}>Breaking through the Representational</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="concepts-of-multiplicity-pushing-representation-towards-non-representation" spy={true} smooth={true} duration={500}>Concepts of Multiplicity - Pushing representation towards non-representation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="rhythm-and-representation" spy={true} smooth={true} duration={500}>Rhythm and Representation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="it-comes-and-goes" spy={true} smooth={true} duration={500}>It comes and goes</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-notion-of-potentiality" spy={true} smooth={true} duration={500}>The notion of Potentiality</DirectLink></li> 
            <li><DirectLink activeClass="activeNav" to="coda-maybe-fear-guides-the-idea-" spy={true} smooth={true} duration={500}>Coda (Maybe fear guides the idea?)</DirectLink></li>                                            
          </ul>           
        </nav>
      );
    } else if (slug == 'interview-14') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 14</h1></Link>
        </nav>
      );
    } else if (slug == 'the-rhythm-of-thinking') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>The Rhythm of Thinking</h1></Link>
          <ul>
            <li><DirectLink activeClass="activeNav" to="the-visceral-foundation" spy={true} smooth={true} duration={500}>The visceral foundation</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="sustain-the-turbulence" spy={true} smooth={true} duration={500}>Sustain the turbulence</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-rhythm-of-thinking-and-the-authority-of-narratives-" spy={true} smooth={true} duration={500}>The rhythm of thinking (and the authority of narratives)</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="the-vision-embodied-univocity" spy={true} smooth={true} duration={500}>The vision embodied – Univocity</DirectLink></li>
            <li><DirectLink activeClass="activeNav" to="forces-and-togetherness" spy={true} smooth={true} duration={500}>Forces and Togetherness</DirectLink></li> 
          </ul>
        </nav>           
      );
    } else if (slug == 'interview-19') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Interview 19</h1></Link>
        </nav>
      );
    }

    return false;
  }
}
