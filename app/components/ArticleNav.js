import React from 'react';
import { Link } from 'react-router';
import styles from '../stylesheets/components/articleNav.css';


export default class ArticleNav extends React.Component {
  render() {
    const slug = this.props.slug;
    if (slug == 'its-all-in-the-passing') {
      return (
      <nav className={styles.articleNav}>
        <Link to="/"><h1 className={styles.titleLink}>It's all in the passing</h1></Link>
          <ul>
            <li><Link to="/#">Prologue</Link></li>
            <li><Link to="/#">The search and the material</Link></li>
            <li><Link to="/#">Disposition and critical themes</Link></li>
            <li><Link to="/#">Defining the fields of tension - Methodology</Link></li>
            <li><Link to="/#">Processing process - Analytical perspectives</Link></li>
            <li><Link to="/#">Immanence and adjunctive terms</Link></li>
            <li><Link to="/#">Philosophy in Practice and Representation</Link></li>
            <li><Link to="/#">Forerunners </Link></li>
            <li><Link to="/#">Disposition and critical themes</Link></li>
            <li><Link to="/#">The modality of the critique</Link></li>
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
            <li><Link to="/#">Entrance</Link></li>
            <li><Link to="/#">From text to sound</Link></li>
            <li><Link to="/#">Six musicians dissolving the Author</Link></li>
            <li><Link to="/#">Layers of energy</Link></li>
            <li><Link to="/#">The playing out</Link></li>
            <li><Link to="/#">Immanence in dialogue, immanence in music making</Link></li>
            <li><Link to="/#">To move along</Link></li>
            <li><Link to="/#">Interpretation of esthetics IV</Link></li>
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
            <li><Link to="/#">A garden of music and social connections</Link></li>
            <li><Link to="/#">The composition</Link></li>
            <li><Link to="/#">Problematizing choreography</Link></li>
            <li><Link to="/#">Elements for interaction and connection</Link></li>
            <li><Link to="/#">What is being investigated?</Link></li>
            <li><Link to="/#">What do I see? </Link></li>
            <li><Link to="/#">Vulnerability unrevealed</Link></li>
          </ul>              
        </nav>
      );
    } else if (slug == 'who-is-the-creator') {
      return (
        <nav className={styles.articleNav}>
          <Link to="/"><h1 className={styles.titleLink}>Who is the creator?</h1></Link>
          <ul>
            <li><Link to="/#">Setting out</Link></li>
            <li><Link to="/#">Consistency and Consolidation</Link></li>
            <li><Link to="/#">Immanence and collective creation</Link></li>
            <li><Link to="/#">Immanence and Relations</Link></li>
            <li><Link to="/#">Immanence and creative responsibility</Link></li>
            <li><Link to="/#">Immanence and The Shifting of Roles</Link></li>
            <li><Link to="/#">Immanence and Performing Participation</Link></li>
            <li><Link to="/#">There is an initiative taken – Immanence and Hierarchy</Link></li>
            <li><Link to="/#">Immanence and the director </Link></li>
            <li><Link to="/#">Reconnecting to the fields of tension</Link></li>            
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
            <li><Link to="/#">In the midst of it all</Link></li>
            <li><Link to="/#">Introduction</Link></li>
            <li><Link to="/#">No Borders (of Immanence)</Link></li>
            <li><Link to="/#">Shared Space</Link></li>
            <li><Link to="/#">Breaking through the Representational</Link></li>
            <li><Link to="/#">Concepts of Multiplicity - Pushing representation towards non-representation</Link></li>
            <li><Link to="/#">Rhythm and Representation	</Link></li>
            <li><Link to="/#">It comes and goes</Link></li>
            <li><Link to="/#">The notion of Potentiality</Link></li>
            <li><Link to="/#">Coda (Maybe fear guides the idea?)	</Link></li>            
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
            <li><Link to="/#">The visceral foundation</Link></li>
            <li><Link to="/#">Sustain the turbulence</Link></li>
            <li><Link to="/#">The rhythm of thinking (and the authority of narratives)</Link></li>
            <li><Link to="/#">The vision embodied – Univocity</Link></li>
            <li><Link to="/#">Forces and Togetherness</Link></li>      
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
